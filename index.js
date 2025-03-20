import { circle_btn_manager } from "./source/js/frontend/front.js";

const circle_btn = document.querySelectorAll('.circle_btn'), select_class_str = 'select_circle_btn';
circle_btn_manager(circle_btn[0], circle_btn, select_class_str, 0)
for(let i=0;i<circle_btn.length;i++){
    circle_btn[i].addEventListener('click', () => {circle_btn_manager(circle_btn[i], circle_btn, select_class_str, i)})
}