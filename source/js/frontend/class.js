export class Product{
    constructor(title, desc){
        this.title = title;
        this.desc = desc;
    }
    Drow_Card(){
        return `<button class="content_card">${this.title}</button>`;
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