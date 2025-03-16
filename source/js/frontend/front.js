import { data_reader } from "../system/utilit.js";
import { to_file } from "../data/model.js";

// код для работы circle_btn и обработки нажатия на class_name

// для добавления класса элементу
function class_append(element, str){
    element.classList.add(str);
    console.log(true)
}
// для удаления класса элемента
function class_delete(arr, str){
    arr.forEach(el => {
        if(el.classList.contains(str)){
            el.classList.remove(str);
        }
    });
}
// Обработчик нажатий на circle_btn
export function product_manager(element, arr, str, index){
    if(!element.classList.contains(str)){
        class_delete(arr, str); // добавляет класс нажатой кнопке
        class_append(element, str); // удаляет класс той кнопке, к-я была до нажатой
    }

    // reader для data_reader обрабатывает данные из базы данных и выполняет с ними операции
    const reader = (data) => {
        const wrapper = document.querySelector('.class_name');
        for(let key of Object.values(data)){
            wrapper.innerHTML = key[index];
        }
    }; data_reader(reader, 'arrays.json');
    
    const product_to_btn = document.querySelector('.product_window');
    product_to_btn.addEventListener('click', () => to_file(index, 'school_classes', 'product.html'));
}