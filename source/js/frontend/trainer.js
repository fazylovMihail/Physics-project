export function load_question(data, cur_questions, true_index){
    const trainer_label_paragraf = document.querySelector('.trainer_label_paragraf'),
    trainer_option_btns = document.querySelectorAll('.trainer_option_btn');

    const checker = (event) => {
        const check = check_answer(data, cur_questions, true_index, trainer_option_btns, event);
        if(check) trainer_option_btns.forEach(el => el.removeEventListener('click', checker));
    }

    const [formuls, directory] = random_fomuls(data['data']);

    for(let i=formuls.length-1;i>0;i--){
        const g = Math.floor(Math.random() * (i+1));
        [formuls[i], formuls[g]] = [formuls[g], formuls[i]];
    }
    console.log(formuls);

    for(let i=0;i<formuls.length;i++){
        trainer_option_btns[i].innerHTML = formuls[i]['value']['desc'];
        if(formuls[i].correct) true_index = i;
    }

    trainer_option_btns.forEach(el => el.addEventListener('click', checker));
}

function check_answer(data, cur, true_index, arr, event){
    const ans_index = Array.prototype.indexOf.call(arr, event.target);
    if(ans_index === true_index){
        console.log(true);
        load_question(data, cur, true_index);

        return true;
    }
}

function randomizer(arr){return Math.floor(Math.random() * arr.length)}
function random_fomuls(data){
    const start_index = randomizer(data),
    finish_data = data[start_index]['data'], 
    true_index = randomizer(finish_data), true_formul = finish_data[true_index]; finish_data.splice(true_index, 1);

    return [[{value: true_formul, correct: true}, {value: finish_data[randomizer(finish_data)], correct: false}], finish_data];
}