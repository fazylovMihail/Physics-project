// селекторы, классы и айди
const selectsBtnSelector = '.selects';
const selectclass = 'select-btn';
const headerWrapperSelector = '.header-wrapper';

// переменные
const headerSelectsBtn = document.querySelectorAll(selectsBtnSelector);
const headerWrapper = document.querySelector(headerWrapperSelector);
const aboutTextHeader = [
    '<div class="header-wrapper-downoald header-text">Этот проект был создан с целью упростить поиск формул по физике<br><span class="wrapper-smile">:)</span></div>',
    '<div class="header-wrapper-downoald"><div class="header-wrapper-downoald-btn">Скачать для андройд</div></div>',
];

// код для работы header
function Select(element){
    element.classList.add(selectclass);
}
Select(headerSelectsBtn[0]);
function Remove(element){
    element.classList.remove(selectclass);
}
function SelectManager(element, index){
    if(!element.classList.contains('select-btn')){
        Select(element);

        if(index<=0){
            Remove(headerSelectsBtn[index+1]);
        }
        else{
            Remove(headerSelectsBtn[index-1]);
        }
    }
    headerWrapper.innerHTML = aboutTextHeader[index];
}
SelectManager(headerSelectsBtn[0],0);

for(let i = 0;i<headerSelectsBtn.length;i++){
    headerSelectsBtn[i].addEventListener('click', ()=>{
        SelectManager(headerSelectsBtn[i], i);
    })
}
