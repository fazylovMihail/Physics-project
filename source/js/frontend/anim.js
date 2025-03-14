import { to_file, data_reader } from "../system/utilit.js";

function class_append(element, str){
    element.classList.add(str);
    console.log(true)
}
function class_delete(arr, str){
    arr.forEach(el => {
        if(el.classList.contains(str)){
            el.classList.remove(str);
        }
    });
}
export function product_manager(element, arr, str, index){
    if(!element.classList.contains(str)){
        class_delete(arr, str);
        class_append(element, str);
    }

    const reader = (data) => {
        const wrapper = document.querySelector('.class_name');
        for(let key of Object.values(data)){
            wrapper.innerHTML = key[index];
        }
    }
    data_reader(reader);
    
    const product_to_btn = document.querySelector('.product_window');
    product_to_btn.addEventListener('click', () => to_file('product.html', index));
}