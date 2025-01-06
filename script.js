import { WindowManager } from "./js/windowManager.js";
import { classFormuls } from './js/class.js';
import { Content } from "./js/contentSystemClass.js";

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
const topBtnGroup = document.querySelector(topBtnGroupSelector);
const startTrainerBtn =  document.querySelector(startTrainerBtnSelector);
const hStartTrainer = document.querySelector(hStartTrainerSelector);
const trainerBtnConteiner = document.querySelector(trainerBtnConteinerSelector);

let score = 0;
let trueFormul = 0;

const startWindowArray = [header, main, footer];
const contentText = [
    '7 класс',
    '8 класс',
    '9 класс',
]

SelectManagerContent(circleBtn[0], 0, selectClassContent);
localStorage.setItem('indexContentText', 0);

for(let i = 0;i<circleBtn.length;i++){
    circleBtn[i].addEventListener('click', ()=>{
        localStorage.setItem('indexContentText', i);
        SelectManagerContent(circleBtn[i], i, selectClassContent); 
    })
}

function DrowTrainerBtn(element){
    return `<div class="trainer-btn false">${element}</div>`;
}
function RemoveTrainerBtnConteiner(){
    trainerBtnConteiner.style.opacity = '0';
}
RemoveTrainerBtnConteiner();

let amountTrainer = 0;

function TrueTrainerBtnManager(element, first){
    let firstAttemt = false;

    if(!first){
        if(element.classList.contains('true')){
            element.style.backgroundColor = '#42ff71';
            StepStyle()
            
            score++;
            firstAttemt = true;
        }
        else{
            element.style.backgroundColor = '#d93232';
        }
    }

    return firstAttemt;
}

let trainerNames;
let trainerFormuls;

function StartTrainerManager(arrayFormul, arrayName){
    trainerBtnConteiner.innerHTML = null;
    const randomName = arrayName[Math.floor(Math.random() * arrayName.length)]

    hStartTrainer.innerHTML = `Выбери формулу ${randomName}`;
    startTrainerBtn.style.display = 'none';

    const trueIndex = arrayName.indexOf(arrayName.find(randFormul => randFormul == randomName));
    const card = new Content(randomName, arrayFormul[trueIndex]);

    trainerBtnConteiner.innerHTML += card.DrowTrainerConteiner();
    arrayFormul.splice(trueIndex,1);
    arrayName.splice(trueIndex, 1);

    for(let i = 0;i<2;i++){
        const randomFormul = arrayFormul[Math.floor(Math.random() * arrayFormul.length)];
        trainerBtnConteiner.innerHTML += DrowTrainerBtn(randomFormul);

        trainerBtnConteiner.style = `
            transition: 1s;
            opacity: 1;
        `;
    }

    if(trueFormul<5){
        StepManager();
    }
    else{
        trainerBtnConteiner.innerHTML = null;
        startTrainerBtn.style.display = 'flex';
        startTrainerBtn.innerHTML = 'Заново';
        hStartTrainer.innerHTML = `Поздравляем вы набрали ${score} из ${trueFormul} очков`;
        
        score = 0;
        trueFormul = 0;

        return;
    }

    console.log(arrayFormul.length);
}

function StepStyle(){
    trainerBtnConteiner.style = `
        transition: 0.5s;
        opacity: 0;
    `;
    setTimeout(()=>{
        trainerBtnConteiner.style = `
            transition: 1s;
            opacity: 1;
        `;
    },1000)
}

function StepManager(){
    trueFormul++;

    let amounts = [];
    let amountFalse = 0;
    let first = false;
    let step = false;

    const falseTrainer = document.querySelectorAll(falseTrainerSelector);
    const trainerBtn = document.querySelectorAll(trainerBtnSelector);
    const trueTrainerBtn = document.querySelector(trueTrainerBtnSelector);

    for(let i = 0;i<falseTrainer.length;i++){
        let clicked = false;

        falseTrainer[i].addEventListener('click',()=>{
            if(!clicked){
                amountFalse++;
    
                if(amountFalse>=2){
                    step = true;

                    trueTrainerBtn.style.backgroundColor = '#42ff71';
                }

                clicked = true;
            }
        })
    }
    for(let i = 0;i<trainerBtn.length;i++){
        trainerBtn[i].style = `
            order: ${Math.floor(Math.random() * 4 + 1)};
        `;
        let clicked = false;

        trainerBtn[i].addEventListener('click',()=>{
            if(!clicked){
                const amount = TrueTrainerBtnManager(trainerBtn[i], first);
                if(amount){
                    first = true;
                    step = true;
                }
                if(step){
                    trueTrainerBtn.classList.add('no-click-true-btn');

                    for(let i = 0;i<falseTrainer.length;i++){
                        falseTrainer[i].style.backgroundColor = '#d93232';
                    }

                    setTimeout(()=>{
                        StartTrainerManager(trainerFormuls, trainerNames);
                    },1000);
    
                    step = false;
                }
    
                amounts.push(amount);
                
                clicked = true;
            }
        })

        // if(amounts.length >= 2){
        //     trueTrainerBtn.style.backgroundColor = '#42ff71';
        //     setTimeout(()=>{
        //         StartTrainerManager();
        //     },1000);
        // }
    }

    if(amounts.length >= 2){
        amountTrainer++;

        StepStyle();
    }
}

startTrainerBtn.addEventListener('click',()=>{
    trainerNames = ['скорости', 'плотности','силы тяжести','силы упругости','веса тела','давления в твердых телах','давления в жидкости/газе','архимедовой силы','силы трения','механической работы','мощности','кинетической энергии','потенциальной энергии','момента силы','КПД','количества теплоты','теплоты сгорания','теплоты плавления','теплоты парообразования','закона Кулона','силы электрического тока','сопротивления проводника','электрического напряжения','последовательного соединения проводников','параллельного соединения проводников','работы тока','мощности тока','закона Джоуля-Ленца'];
    trainerFormuls = classFormuls.flat()

    StartTrainerManager(trainerFormuls, trainerNames);
})

// для работы кнопки вверх
let Visible = function (target) {
    let ok;

  // Все позиции элемента
  var targetPosition = {
        top: window.scrollY + target.getBoundingClientRect().top,
        left: window.scrollX + target.getBoundingClientRect().left,
        right: window.scrollX + target.getBoundingClientRect().right,
        bottom: window.scrollY + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
        top: window.scrollY,
        left: window.scrollX,
        right: window.scrollX + document.documentElement.clientWidth,
        bottom: window.scrollY + document.documentElement.clientHeight
    };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа

        ok = true;
    }
    else {
        ok = false;
    };

    return ok;
};

const topBtn = document.querySelector(topBtnSelector);
const fixedHeader = document.querySelector(fixedHeaderSelector);

localStorage.setItem('topBtnRequest', false);
let topBtnRequestLocal = localStorage.getItem('topBtnRequest');

function SetStyleVisible(ok){
    if(ok){
        topBtnGroup.style = `
            opacity: 0;
            z-index: -1;
        `;
        topBtn.removeEventListener('click', scrollToHeader);

        fixedHeader.style = `
            opacity: 0;
            z-index: -1;
        `;
    }
    else{
        topBtnGroup.style = `
            opacity: 1;
            z-index: 99;
        `;
        topBtn.addEventListener('click', scrollToHeader);

        fixedHeader.style = `
            opacity: 1;
            z-index: 99;
        `;
    }

}

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
    let visible = Visible(header);

    const windowWidth = window.innerWidth;

    if(windowWidth > 700 && !topBtnRequestLocal){
        SetStyleVisible(visible);
    }
    else{
        SetStyleVisible(true);
    }
});

contentTextConteiner.addEventListener('click',()=>{
    topBtnRequestLocal = true;
    localStorage.setItem('topBtnRequest', topBtnRequestLocal);

    WindowManager(true);
})

function scrollToHeader(){
    header.scrollIntoView({behavior:"smooth"});
}

// const footerTagFamous = document.querySelector(footerTagFamousSelector);
// const blurConteiner = document.querySelector(blurConteinerSelector);

// function FooterTagManager(){
//     body.style = `
//         filter: blur(10px);
//     `;
//     blurConteiner.style = `
//         filter: none;
//         background-color: #000;
//     `;
// }

// footerTagFamous.addEventListener('click',()=>{
//     FooterTagManager();
// })