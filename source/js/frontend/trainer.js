import { load_database } from "../backend/load_database.js";

function to_up(){
    window.scrollTo({top: 0, behavior: "smooth"});
}
function rand_manager(data){
    const database = data['data'], rand_class = Math.floor(Math.random() * database.length),
    finish_data = data['data'][rand_class]['data'], true_index = Math.floor(Math.random() * finish_data.length),
    true_formul = finish_data[true_index]; finish_data.slice(true_formul);
    
    const false_index = Math.floor(Math.random() * finish_data.length), false_formul = finish_data[false_index];

    return [true_formul, false_formul]
}
function go_forward(){trainer_window_switch(true)}
function rand_order_manager(arr){
    const orders = []; for(let i=0;i<arr.length;i++){
        orders.push(Math.floor(Math.random() * arr.length));
    }
    for(let i=0;i<arr.length;i++){arr[i].style.order = orders[i]}
}
export function trainer_window_switch(ok){
    const trainer_label_p = document.querySelector('.trainer_label_paragraf'),
    trainer_option_btns = document.querySelectorAll('.trainer_option_btn'),
    [start, up] = trainer_option_btns;
    
    if(!ok){
        trainer_label_p.innerHTML = 'А теперь время проверить свои знания, нажми<br>начать, чтобы пройти тренировку'
        start.innerHTML = 'Начать'; up.innerHTML = 'Наверх';
        start.style.order = 1; up.style.order = 2;
        start.addEventListener('click', go_forward);
        up.addEventListener('click', to_up);
    }
    else{
        const reader = (data) => {
            const [true_formul, false_formul] = rand_manager(data); console.log(true_formul, false_formul);
            trainer_label_p.innerHTML = true_formul.title;

            rand_order_manager(trainer_option_btns);
            start.innerHTML = true_formul.desc; up.innerHTML = false_formul.desc;
            start.removeEventListener('click', go_forward); up.removeEventListener('click', to_up);
        }; load_database(reader, 'data.json');
    }
}