import { set_cookie } from "../system/cookie.js";
import { load_database } from "./load_database.js";

export function to_file(index, str, file){
    const reader = (data) => {
        set_cookie('Class_Name', data[str][index]);
        location.href = `./${file}`;
    }; load_database(reader, 'arrays.json');
}