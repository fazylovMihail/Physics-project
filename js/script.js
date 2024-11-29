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
const typeBtnConteiner = document.querySelector(typeBtnConteinerSelector);
const contentManagerGroup = document.querySelector(contentManagerGroupSelector);
const topBtnGroup = document.querySelector(topBtnGroupSelector);

const startWindowArray = [header, main, footer];
const classNames = [];

const class7Names = ['Скорость', 'Плотность','Сила тяжести','Сила упругости','Вес тела','Давление в твердых телах','Давление в жидкости/газе','Архимедова сила','Сила трения','Механическая работа','Мощность','Кинетическая энергия','Потенциальная энергия','Момент силы','КПД'];
classNames.push(class7Names);
const class8Names = ['Количество теплоты при нагревании','Количество теплоты при охлаждении','Теплота сгорания','Теплота плавления','Теплота парообразования','Закон Кулона','Сила электрического тока','Сопротивление проводника','Электрическое напряжение','Последовательное соединение проводников','Параллельное соединение проводников','Работа тока','Мощность тока','Закон Джоуля-Ленца'];
classNames.push(class8Names);

const classFormuls = []

const class7Formul = ['v=s/t','ρ=m/V','F<sub>тяж</sub>=mg','F<sub>упр</sub>=k∆l','P=mg','p=F/S','p=ρgh','F<sub>A</sub>=ρ<sub>т</sub>gV<sub>п.ч.</sub>','F<sub>тр</sub>=μP','A=Fs','N=A/t','E<sub>k</sub>=mv<sup>2</sup>/2','E<sub>п<sub>=mgh','M=Fl','η=A<sub>п</sub>/A<sub>з</sub>*100%'];
classFormuls.push(class7Formul);
const class8Formul = ['Q=cm∆t или Q=cm(t<sub>2</sub>-t<sub>1</sub>)','Q=cm∆t или Q=cm(t<sub>2</sub>-t<sub>1</sub>)','Q=qm','Q=λm','Q=Lm','F = k(|q<sub>1</sub>| * |q<sub>2</sub>| / r2)', 'I=q/t','I=U/R','R=ρl/s','U=A/q','','','A=Uq=UIt=I<sup>2</sup>*Rt=(U<sup>2</sup>/R) * t','P=A/t=UI=I<sup>2</sup>R=U<sup>2</sup/R','Q=UIt=I<sup>2</sub>Rt=(U<sup>2</sup>/R )* t'];
classFormuls.push(class8Formul);

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
    DrowTypeBtn(){
        return `<div class="type-btn" onclick="document.querySelector('#content-manager-group').scrollIntoView({ behavior: 'smooth' });">${this.name}</div>`;
    }
    DrowFormulConteiner(){
        return `<div class="content-manager">
                    <div class = "formul-package">
                        <div class="formul-name">${this.name}</div>
                        <div class="formul-conteiner">${this.formul}</div>
                    </div>
            </div>`;
    }
}

SelectManagerContent(circleBtn[0], 0, selectClassContent);

for(let i = 0;i<circleBtn.length;i++){
    circleBtn[i].addEventListener('click', ()=>{
        SelectManagerContent(circleBtn[i], i, selectClassContent);
    })
}

function bodyOverflowManager(overParams){
    body.style = `
        overflow-y: ${overParams};    
    `
}

function WindowManager(ok){
    bodyOverflowManager('hidden');

    if(ok){
        for(let i = 0;i<startWindowArray.length;i++){
            startWindowArray[i].style.display = 'none';
        }
        managerWrapper.style.display = 'block';

        window.scrollTo(0,0);
    }
    else{
        for(let i = 0;i<startWindowArray.length;i++){
            startWindowArray[i].style.display = 'flex';
        }
        managerWrapper.style.display = 'none';

        document.querySelector('.content-wrapper').scrollIntoView({behavior:"instant"});

        bodyOverflowManager('scroll');
    }
    
    ContentManager();
}

let cards = [];

function ContentManager(){
    typeBtnConteiner.innerHTML = null;
    
    for(let i = 0;i<circleBtn.length;i++){
        if(circleBtn[i].classList.contains(selectClassContent)){
            headerManager.innerHTML = contentText[i];
            
            for(let g = 0;g<classNames[i].length;g++){
                const card = new Content(classNames[i][g], classFormuls[i][g]);
    
                typeBtnConteiner.innerHTML += card.DrowTypeBtn();
            }
            for(let g = 0;g<classFormuls[i].length;g++){
                const card = new Content(classNames[i][g], classFormuls[i][g]);

                const typeBtn = document.querySelectorAll(typeBtnSelector);

                typeBtn[g].addEventListener('click',()=>{                  
                    contentManagerGroup.innerHTML = card.DrowFormulConteiner();

                    bodyOverflowManager('scroll')
                });
            }
        }
    }

    // for(let g = 0;g<typeBtn.length;g++){

    // }
}

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

let topBtnRequest = false;

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
    let visible = Visible(header);

    const windowWidth = window.innerWidth;
    // console.log(windowWidth);

    if(windowWidth > 700 && !topBtnRequest){
        if(visible == true){
            topBtnGroup.style = `
                opacity: 0;
                z-index: -1;
            `;
            topBtn.removeEventListener('click', scrollToHeader);
        }
        else{
            topBtnGroup.style = `
                opacity: 1;
                z-index: 99;
            `;
            topBtn.addEventListener('click', scrollToHeader);
        }
    }
    else{
        topBtnGroup.style = `
            opacity: 0;
            z-index: -1;
        `;
        topBtn.removeEventListener('click', scrollToHeader);
    }
});

contentTextConteiner.addEventListener('click',()=>{
    topBtnRequest = true;

    WindowManager(true);
})
headerManager.addEventListener('click',()=>{
    topBtnRequest = false;
    
    WindowManager(false);
})

function scrollToHeader(){
    header.scrollIntoView({behavior:"smooth"});
}