import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"

class GiftSandboxService {
    async createGift(formData) {
        const res = await api.post('/api/gifts', formData)
        // console.log('res data', res.data);
        // console.log('after', AppState.gifts);
        AppState.gifts.splice(0, 0, new Gift(res.data))
        // console.log('before', AppState.gifts);
        AppState.emit('gifts')
    }

    async getGifts() {
        const res = await api.get('/api/gifts')
        console.log('these are our gifts', res.data)
        AppState.gifts = res.data.map(giftPOJO => new Gift(giftPOJO))
        console.log(AppState.gifts)


    }

    changeGiftState(giftId) {
        const changingGift = AppState.gifts.find(gift => giftId == gift.id)
        // console.log('changing gift', changingGift);
        changingGift.opened = !changingGift.opened
        // console.log('changing gift after change', changingGift);
        AppState.emit('gifts')

    }

}

export const giftSandboxService = new GiftSandboxService()
