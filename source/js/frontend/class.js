export class Product{
    constructor(obj){Object.assign(this, obj)}
    Drow_Card(){
        return `<div class="content_card">${this.title}</div>`;
    }
    Drow_Window(){
        return `<div class="left_content_wrapper">
                    <div class="header_h_wrapper">
                        <h1 class="left_h">${this.title}</h1>
                    </div>
                    <div class="header_content_wrapper">
                        <h2>${this.desc}</h2>
                        <p>где ...</p>
                    </div>
                </div>`
    }
}