import { ContentManager, WindowManager } from "./js/windowManager.js";

ContentManager()

const backBtnSelector = '.back-btn';
const backBtn = document.querySelector(backBtnSelector);

backBtn.addEventListener('click',()=>{
    WindowManager(false);
})