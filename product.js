import { get_cookie } from "./source/js/system/cookie.js";
import { load_database } from "./source/js/backend/load_database.js";
import { Product } from "./source/js/frontend/class.js";

const index = get_cookie('Class_Name'), body = document.querySelector('body'),
reader = (data) => {
    const database = data['data'][index]['data'], cards = [],
    right_content_wrapper = document.querySelector('.right_content_wrapper'), left_wrapper = document.querySelector('.left_wrapper');

    for(let i=0;i<database.length;i++){
        const {title, desc} = database[i], card = new Product(title, desc); cards.push(card);
        right_content_wrapper.innerHTML += cards[i].Drow_Card();
    }

    const content_card = document.querySelectorAll('.content_card');
    for(let i=0;i<content_card.length;i++) content_card[i].addEventListener('click', () => {
        left_wrapper.innerHTML = cards[i].Drow_Window();
    });
}; load_database(reader, 'data.json');