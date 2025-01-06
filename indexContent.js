import { ContentManager, WindowManager } from "./js/windowManager.js";

ContentManager()

const backBtnSelector = '.back-btn';
const backBtn = document.querySelector(backBtnSelector);
let topBtnRequestLocal = localStorage.getItem('topBtnRequest')

backBtn.addEventListener('click',()=>{
    topBtnRequestLocal = false;
    localStorage.setItem('topBtnRequest', topBtnRequestLocal);
    
    WindowManager(false);
})