import { get_cookie } from "./source/js/system/cookie.js";
import { load_database } from "./source/js/backend/load_database.js";
import { Product } from "./source/js/frontend/class.js";

const index = get_cookie('Class_Name'), body = document.querySelector('body'),
reader = (data) => {
    const database = data['data'][index]['data'], right_content_wrapper = document.querySelector('.right_content_wrapper');
    for(let i=0;i<database.length;i++){
        const card = new Product(database[i]);
        right_content_wrapper.innerHTML += card.Drow_Card();
    }
}; load_database(reader, 'data.json');