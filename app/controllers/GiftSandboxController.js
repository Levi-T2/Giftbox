import { AppState } from "../AppState.js"
import { giftSandboxService } from "../services/GiftSandboxService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawAllGifts() {
    let content = ''
    const gifts = AppState.gifts
    // gifts.forEach(gift => content += gift.closedGiftTemplate)
    gifts.forEach(gift => {
        if (gift.opened == true) {
            content += gift.activeGiftTemplate
        } else {
            content += gift.lockedGiftTemplate
        }
    })
    // console.log(gifts)
    setHTML('giftCards', content)
}

export class GiftSandboxController {
    constructor() {
        console.log('Gift sandbox controller is loaded.')
        // this.getGifts()

        AppState.on('account', this.getGifts)

        AppState.on('gifts', _drawAllGifts)
    }

    async getGifts() {
        try {
            await giftSandboxService.getGifts()

        } catch (error) {
            console.log(error)
            Pop.error(error)

        }
    }


    drawAllGifts() {
        _drawAllGifts()
    }


    changeGiftState(giftId) {
        giftSandboxService.changeGiftState(giftId)
    }

    async createGift(event) {
        try {
            event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            await giftSandboxService.createGift(formData)
            form.reset()
        } catch (error) {
            console.log(error);
            Pop.error
        }

    }
}