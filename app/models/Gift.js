
export class Gift {
    constructor(data) {
        this.tag = data.tag || 'No Tag Given 🥲'
        this.url = data.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Bituminous_Coal.JPG/1200px-Bituminous_Coal.JPG'
        // this.url = data.url
        this.opened = data.opened
        this.id = data.id
    }


    get activeGiftTemplate() {
        return `              <div class="col-12 col-md-4">
        <div onclick="app.GiftSandboxController.changeGiftState('${this.id}')"class="m-1 p-3 card">
          <img class="img-fluid rounded"
            src="${this.url}">
          <p class="text-center">${this.tag}</p>
        </div>
      </div>`
    }

    get lockedGiftTemplate() {
        return `       <div class="col-12 col-md-4">     
            <div class="m-1 p-3 card">
        <button onclick="app.GiftSandboxController.changeGiftState('${this.id}')" class="btn btn-info text-light p-3">${this.tag}</button>
      </div>
      </div>`
    }
}