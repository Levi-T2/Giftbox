
export class Gif {
    constructor(data) {
        this.id = data.id
        this.url = data.images
        this.title = data.title
    }

    get gifTemplate() {
        return `             <div class="col-12 col-md-4 card p-3 text-center">
        <img class="img-fluid rounded"
          src="${this.url.downsized.url}">
        <p>${this.title}</p>
      </div>`
    }
}