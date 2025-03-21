import { get_cookie } from "./source/js/system/cookie.js";
import { load_database } from "./source/js/backend/load_database.js";

const index = get_cookie('Class_Name'), body = document.querySelector('body'),
reader = (data) => {
    const database = data['data'][index]['data'];
    for(let i=0;i<database.length;i++){
        const {title, desc} = database[i];
        body.innerHTML += `${title}</br>${desc}<br><br>`;
    }
}; load_database(reader, 'data.json');