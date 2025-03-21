import { load_database } from "../backend/load_database.js";
import { to_file } from "../backend/model.js";

function add_class(element, str){
    if(!element.classList.contains(str)) element.classList.add(str)
}
function remove_class(arr, str){
    arr.forEach(el => {if(el.classList.contains(str)){
        el.classList.remove(str);
    }})
}

export function circle_btn_manager(element, arr, str, index){
    if(!element.classList.contains(str)){
        remove_class(arr, str);
        add_class(element, str);
    }

    const reader = (data) => {
        const wrapper = document.querySelector('.class_name');
        wrapper.innerHTML = data['data'][index]['name'];
    }; load_database(reader, 'data.json');

    const btn = document.querySelector('.product_window');
    btn.addEventListener('click', () => {to_file(index, 'product.html')});
}