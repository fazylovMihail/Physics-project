import { set_cookie } from "../system/cookie.js";
import { data_reader } from "../system/utilit.js";

// для перехода на другой файл html и получения массивов из arrays.json 
export function to_file(index, str, file){
    // reader для data_reader обрабатывает данные из базы данных и выполняет с ними операции
    const reader = (data) => {
        set_cookie('Class_Name', data[str][index]);
        location.href = `./${file}`;
    }; data_reader(reader, 'arrays.json');
}