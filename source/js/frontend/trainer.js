import { load_database } from "../backend/load_database.js";

function to_up(){
    window.scrollTo({top: 0, behavior: "smooth"});
}
function rand_manager(data){
    const database = data['data'], rand_class = Math.floor(Math.random() * database.length),
    finish_data = data['data'][rand_class]['data'], true_index = Math.floor(Math.random() * finish_data.length),
    true_formul = finish_data[true_index];
    
    const false_index = Math.floor(Math.random() * finish_data.length), false_formul = finish_data[false_index];

    return [true_formul, false_formul];
}
function go_forward(){trainer_window_switch(true)}
function rand_order_manager(arr){
    const orders = []; for(let i=0;i<arr.length;i++){
        orders.push(Math.floor(Math.random() * arr.length));
    }
    for(let i=0;i<arr.length;i++){arr[i].style.order = orders[i]}
}

function true_manager(el, ok){(ok)? el.classList.add('true_option'): el.classList.remove('true_option')}
function false_manager(el, ok){(ok)? el.classList.add('left_option'): el.classList.remove('left_option')}

export function trainer_window_switch(ok, count=0){
    const trainer_label_p = document.querySelector('.trainer_label_paragraf'),
    trainer_option_btns = document.querySelectorAll('.trainer_option_btn'),
    [start, up] = trainer_option_btns;

    trainer_option_btns.forEach(el => {el.classList.remove('un_click')});

    const true_for_listener = () => {
        true_manager(start, true); 
        trainer_option_btns.forEach(el => {el.classList.add('un_click')});
        setTimeout(() => {up.removeEventListener('click', false_for_listener); start.removeEventListener('click', true_for_listener); trainer_window_switch(true, count)}, 500); return},
    false_for_listener = () => {false_manager(up, true); true_for_listener()};
    
    if(!ok){
        trainer_label_p.innerHTML = 'А теперь время проверить свои знания, нажми<br>начать, чтобы пройти тренировку'
        start.innerHTML = 'Начать'; up.innerHTML = 'Наверх';
        start.style.order = 1; up.style.order = 2;
        start.classList.add('left_option');

        true_manager(start, false); false_manager(up, false);
        start.addEventListener('click', go_forward);
        start.removeEventListener('click', true_for_listener); up.removeEventListener('clicl', false_for_listener);
        up.addEventListener('click', to_up);
    }
    else{
        count++;
        
        if(count > 5){trainer_window_switch(false, count); return}

        const reader = (data) => {
            const [true_formul, false_formul] = rand_manager(data); console.log(true_formul, false_formul);
            trainer_label_p.innerHTML = true_formul.title;

            rand_order_manager(trainer_option_btns);
            start.innerHTML = true_formul.desc; up.innerHTML = false_formul.desc;
            start.classList.remove('left_option');
            trainer_option_btns.forEach(el => {true_manager(el, false); false_manager(el, false)});
            start.removeEventListener('click', go_forward); up.removeEventListener('click', to_up);
            start.addEventListener('click', true_for_listener); up.addEventListener('click', false_for_listener);
        }; load_database(reader, 'data.json');
        console.log(count);
    }
}