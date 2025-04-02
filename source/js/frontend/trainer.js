import { load_database } from "../backend/load_database.js";
import { Product } from "./class.js";

export function load_question(data, cur_question, bool, counter, result){
    let true_index;

    const formuls = random_formul(data['data']),
    card = new Product(formuls[0]['value']['title']),
    trainer_window = document.querySelector('.trainer_window');

    trainer_window.innerHTML = card.Drow_Start_Window();

    const trainer_option_btns = document.querySelectorAll('.trainer_option_btn'), trainer_label_paragraf = document.querySelector('.trainer_label_paragraf');

    if(bool){
        for(let i=formuls.length-1;i>0;i--){
            const g = Math.floor(Math.random() * (i+1));
            [formuls[i], formuls[g]] = [formuls[g], formuls[i]];
        }
        console.log(formuls);
    
        formuls.forEach((el, index) => {
            if(el['correct']) true_index = index;
            
            trainer_option_btns[index].innerHTML = el['value']['desc'];
            trainer_option_btns[index].style.fontFamily = 'Prosto One';
            trainer_option_btns[index].addEventListener('click', (event) => {
                const check = check_answer(trainer_option_btns, true_index, event);
                if(check) {
                    if(cur_question > 5) return;

                    counter['true']++;
                    trainer_anim_manager(true, trainer_option_btns, true_index);
                } else{
                    counter['false']++;
                    trainer_anim_manager(false, trainer_option_btns, true_index);
                }

                setTimeout(() => {
                    load_question(data, cur_question, true, counter, result);
                    if(cur_question >= 5){
                        cur_question = 0;
                        result = `Правильные: ${counter['true']} / Неправильные: ${counter['false']}`
                        load_database((data) => {load_question(data, cur_question, false, counter, result)}, 'data.json');
                        for(let key of Object.keys(counter)){counter[key] = 0};
                    }
                }, 1300);
            });
        });
    
        cur_question++; console.log(counter);
    }
    else{
        const [start, up] = trainer_option_btns;
        trainer_label_paragraf.innerHTML = result;

        start.classList.add('left_option'); start.addEventListener('click', () => {load_question(data, cur_question, true, counter, result)})
        up.addEventListener('click', to_up);
    }
}

function randomize(arr){return Math.floor(Math.random() * arr.length)}
function random_formul(data){
    const database = data[randomize(data)]['data'], true_index = randomize(database),
    true_formul = database[true_index]; database.splice(true_index, 1); console.log(database.length);

    return [{value: true_formul, correct: true}, {value: database[randomize(database)], correct: false}];
}

function check_answer(arr, true_index, event){
    const asnwer_index = Array.prototype.indexOf.call(arr, event.target);
    if(asnwer_index===true_index) return true;
}

function to_up(){window.scrollTo({top: 0, behavior: "smooth"})}

function trainer_anim_manager(bool, arr, true_index){
    arr.forEach(el => el.classList.add('un_click'));
    
    const arr_clone = [...arr], true_btn = arr_clone[true_index]; arr_clone.splice(true_index, 1);
    const [false_btn] = arr_clone;

    if(bool){
        true_btn.classList.add('true_option');
        setTimeout(() => {false_btn.classList.add('left_option')}, 700);
    }
    else{
        false_btn.classList.add('left_option');
        setTimeout(() => {true_btn.classList.add('true_option')}, 700);
    }
}