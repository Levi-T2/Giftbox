import { AppState } from "../AppState.js";
import { Gif } from "../models/Gif.js";
import { apiGif } from "./AxiosService.js"

class GifService {
    async getGifs(searchQuery) {
        const res = await apiGif.get('search', {
            params: {
                q: searchQuery
            }
        })
        console.log(res.data);
        const searchedGifs = res.data.data.map(gif => new Gif(gif))
        console.log('searchedGifs', searchedGifs);
        AppState.gifs = searchedGifs
    }

}

export const gifService = new GifService()