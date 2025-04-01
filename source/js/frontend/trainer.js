import { Product } from "./class.js";

export function load_question(data, cur_question, bool, counter){
    let true_index;

    const formuls = random_formul(data['data']),
    card = new Product(formuls[0]['value']['title']),
    trainer_window = document.querySelector('.trainer_window');

    trainer_window.innerHTML = card.Drow_Start_Window();

    const trainer_option_btns = document.querySelectorAll('.trainer_option_btn');

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
                    load_question(data, cur_question, true, counter);
                } else{
                    counter['false']++;
                    load_question(data, cur_question, true, counter);
                }

                if(cur_question >= 5){
                    cur_question = 0;
                    load_question(data, cur_question, false, counter);
                    alert(`Правильные: ${counter['true']} / Неправильные: ${counter['false']}`);
                    for(let key of Object.keys(counter)){counter[key] = 0};
                }
            });
        });
    
        cur_question++; console.log(counter);
    }
    else{
        const [start, up] = trainer_option_btns, trainer_label_paragraf = document.querySelector('.trainer_label_paragraf');
        trainer_label_paragraf.innerHTML = 'А теперь время проверить свои знания, нажмите<br>начать, чтобы пройти тренировку';

        start.classList.add('left_option'); start.addEventListener('click', () => {load_question(data, cur_question, true, counter)})
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