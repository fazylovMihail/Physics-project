// селекторы, классы и айди
const selectsBtnSelector = '.selects';
const selectClassHeader = 'select-btn-header';
const headerWrapperSelector = '.header-wrapper';
const contentTextConteinerSelector = '.content-text-conteiner';
const circleBtnSelector = '.circle-btn';
const selectClassContent = 'select-btn-content';
const trainerWrapperSelector = '.trainer-wrapper';
const startTrainerSelector = '.start-trainer';
const startTrainerBtnSelector = '.start-trainer-btn';
const midleTrainerSelector = '.midle-trainer';

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

// переменные
const contentTextConteiner = document.querySelector(contentTextConteinerSelector);
const circleBtn = document.querySelectorAll(circleBtnSelector);

const contentText = [
    '7 класс',
    '8 класс',
    '9 класс',
]

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
SelectManagerContent(circleBtn[0], 0, selectClassContent);

for(let i = 0;i<circleBtn.length;i++){
    circleBtn[i].addEventListener('click', ()=>{
        SelectManagerContent(circleBtn[i], i, selectClassContent);
    })
}

// const scrollElementsSelector = '.scroll-element';

// const scrollElements = document.querySelectorAll(scrollElementsSelector);

// window.addEventListener('scroll',()=>{
//     for(let i = 0;i<scrollElements.length;i++){
//         scrollElements[i].scrollIntoView({
//             behavior: 'smooth'
//         });
//     }
// })