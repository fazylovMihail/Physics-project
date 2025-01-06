// import { headerManagerHSelector, typeBtnConteinerSelector, contentManagerGroupSelector } from './selector.js'
import { classNames, classFormuls } from './class.js';
import { Content } from "./contentSystemClass.js";

function WindowManager(ok){
    if(ok){
        window.open('./content.html', '_self');
    }
    else{
        window.open('./index.html', '_self');
    }
}

function bodyOverflowManager(overParams){
    const body = document.querySelector('body');
    body.style = `
        overflow-y: ${overParams};    
    `
}

function ContentManager(){
    const headerManagerHSelector = '.header-manager-h';
    const typeBtnConteinerSelector = '.type-btn-conteiner';
    const contentManagerGroupSelector = '.content-manager-group';
    const typeBtnSelector = '.type-btn';

    const contentText = [
        '7 класс',
        '8 класс',
        '9 класс',
    ]
    
    const headerManagerH = document.querySelector(headerManagerHSelector);
    const typeBtnConteiner = document.querySelector(typeBtnConteinerSelector);
    const contentManagerGroup = document.querySelector(contentManagerGroupSelector);
    
    const indexContentText = localStorage.getItem('indexContentText');
    typeBtnConteiner.innerHTML = null;

    headerManagerH.innerHTML = contentText[indexContentText];
    
    for(let g = 0;g<classNames[indexContentText].length;g++){
        const card = new Content(classNames[indexContentText][g], classFormuls[indexContentText][g]);

        typeBtnConteiner.innerHTML += card.DrowTypeBtn();
    }
    for(let g = 0;g<classFormuls[indexContentText].length;g++){
        const card = new Content(classNames[indexContentText][g], classFormuls[indexContentText][g]);

        const typeBtn = document.querySelectorAll(typeBtnSelector);

        typeBtn[g].addEventListener('click',()=>{                  
            contentManagerGroup.innerHTML = card.DrowFormulConteiner();

            bodyOverflowManager('scroll');
        });
    }
}

export {WindowManager, ContentManager}