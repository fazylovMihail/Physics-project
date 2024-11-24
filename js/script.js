// переменные
const headerSelectsBtn = document.querySelectorAll(selectsBtnSelector);
const headerWrapper = document.querySelector(headerWrapperSelector);

const aboutTextHeader = [
    '<div class="header-wrapper-downoald header-text">Этот проект был создан с целью упростить поиск формул по физике<br><span class="wrapper-smile">:)</span></div>',
    '<div class="header-wrapper-downoald"><div class="header-wrapper-downoald-btn">Скачать для андройд</div></div>',
];

// код для работы header
function Select(element, addClass){
    element.classList.add(addClass);
}
Select(headerSelectsBtn[0], selectClassHeader);
function Remove(element, removeClass){
    element.classList.remove(removeClass);
}
function SelectManagerHeader(element, index, workClass){
    if(!element.classList.contains(workClass)){
        Select(element, workClass);
        
        if(index<=0){
            Remove(headerSelectsBtn[index+1], workClass);
        }
        else{
            Remove(headerSelectsBtn[index-1], workClass);
        }
    }
    headerWrapper.innerHTML = aboutTextHeader[index];
}
SelectManagerHeader(headerSelectsBtn[0],0,selectClassHeader);

for(let i = 0;i<headerSelectsBtn.length;i++){
    headerSelectsBtn[i].addEventListener('click', ()=>{
        SelectManagerHeader(headerSelectsBtn[i], i, selectClassHeader);
    })
}

// код для работы контейнера с контентом

function SelectManagerContent(element, index, workClass){
    if(!element.classList.contains(workClass)){
        Select(element, workClass);

        if(index<=0){
            Remove(circleBtn[index+1], workClass);
            Remove(circleBtn[index+2], workClass);
        }
        else if(index==1){
            Remove(circleBtn[index-1], workClass);
            Remove(circleBtn[index+1], workClass);
        }
        else{
            Remove(circleBtn[index-2], workClass);
            Remove(circleBtn[index-1], workClass);
        }
    }
    contentTextConteiner.innerHTML = contentText[index];
}

// работа с продуктом и тренажёром

// переменные
const contentTextConteiner = document.querySelector(contentTextConteinerSelector);
const circleBtn = document.querySelectorAll(circleBtnSelector);
const header = document.querySelector(headerSelector);
const main = document.querySelector(mainSelector);
const footer = document.querySelector(footerSelector);
const body = document.querySelector(bodySelector);
const headerManager = document.querySelector(headerManagerSelector);
const managerWrapper = document.querySelector(managerWrapperSelector);

const startWindowArray = [header, main, footer];

const contentText = [
    '7 класс',
    '8 класс',
    '9 класс',
]
class Content{
    constructor(
        name,
        formul,
    ){
        this.name = name;
        this.formul = formul;
    }
}

SelectManagerContent(circleBtn[0], 0, selectClassContent);

for(let i = 0;i<circleBtn.length;i++){
    circleBtn[i].addEventListener('click', ()=>{
        SelectManagerContent(circleBtn[i], i, selectClassContent);
    })
}

function WindowManager(ok){
    if(ok){
        for(let i = 0;i<startWindowArray.length;i++){
            startWindowArray[i].style.display = 'none';
        }

        managerWrapper.style.display = 'block';
    }
    else{
        for(let i = 0;i<startWindowArray.length;i++){
            startWindowArray[i].style.display = 'flex';
        }

        managerWrapper.style.display = 'none';
    }

    for(let i = 0;i<circleBtn.length;i++){
        if(circleBtn[i].classList.contains(selectClassContent)){
            headerManager.innerHTML = contentText[i];
            break;
        }
    }
}

contentTextConteiner.addEventListener('click',()=>{
    WindowManager(true);
})
headerManager.addEventListener('click',()=>{
    WindowManager(false);
})