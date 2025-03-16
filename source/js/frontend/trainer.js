function re_past_text(ok){
    const trainer_label_paragraf = document.querySelector('.trainer_label_paragraf'),
    trainer_option_btn = document.querySelectorAll('.trainer_option_btn'), [left, right] = trainer_option_btn;

    if(ok){
        trainer_label_paragraf.innerHTML = '';
        right.classList.remove('to_header');
    }
    else{
        trainer_label_paragraf.innerHTML = 'А теперь время проверить свои знания, нажми<br>начать, чтобы пройти тренировку';
        right.classList.add('to_header'), right.innerHTML = 'Наверх';
        left.innerHTML = 'Начать';
    }
}

function random_formul(){
    
}