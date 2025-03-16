import { set_cookie } from "../system/cookie.js";
import { data_reader } from "../system/utilit.js";

export function to_file(index, str){
    const reader = (data) => {set_cookie('Class_Name', data[str][index])}; data_reader(reader);
    location.href = './product.html';
}