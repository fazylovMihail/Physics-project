import { set_cookie } from "../system/cookie.js";
import { load_database } from "./load_database.js";

export function to_file(index, file){
    const reader = (data) => {
        set_cookie('Class_Name', index);
        location.href = `./${file}`;
    }; load_database(reader, 'data.json');
}