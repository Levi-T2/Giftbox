import { AppState } from "../AppState.js";
import { gifService } from "../services/GifService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawSearchedGifs() {
    let content = ''
    const gifs = AppState.gifs
    gifs.forEach(gif => content += gif.gifTemplate)
    setHTML('giftCards', content)
}
export class GifController {
    constructor() {
        console.log('Gif controller loaded.');
        // this.getGifs()

        // AppState.on('account', this.getGifs)
        AppState.on('gifs', _drawSearchedGifs)

    }

    // async getGifs() {
    //     try {
    //         await gifService.getGifs()

    //     } catch (error) {
    //         console.log(error);
    //         Pop.error(error)

    //     }

    // }

    async searchGif(event) {
        event.preventDefault()
        console.log('you submitted your search in the controller!')
        const form = event.target
        const formData = getFormData(form)
        console.log(formData)
        const searchQuery = formData.search
        // console.log(searchQuery)
        await gifService.getGifs(searchQuery)

    }
}