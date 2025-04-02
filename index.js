import { load_database } from "./source/js/backend/load_database.js";
import { circle_btn_manager } from "./source/js/frontend/front.js";
import { load_question } from "./source/js/frontend/trainer.js";
import { get_cookie } from "./source/js/system/cookie.js";

const index = get_cookie('Class_Name'),
circle_btn = document.querySelectorAll('.circle_btn'), select_class_str = 'select_circle_btn';

(index)? circle_btn_manager(circle_btn[index], circle_btn, select_class_str, index): circle_btn_manager(circle_btn[0], circle_btn, select_class_str, 0);
for(let i=0;i<circle_btn.length;i++){
    circle_btn[i].addEventListener('click', () => {circle_btn_manager(circle_btn[i], circle_btn, select_class_str, i)})
}

let cur_question = 0, counter = {true: 0, false: 0}, result = 'А теперь время проверить свои знания, нажмите<br>начать, чтобы пройти тренировку';
load_database((data) => load_question(data, cur_question, false, counter, result), 'data.json');