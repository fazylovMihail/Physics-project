const keys = ['_id', 'title', 'desc', 'create_at']; // ключи для объекта data.json

// ф-я получающая базу данных
function data_reader(reader, file){
    fetch(`${window.location.protocol}/data/${file}`)
    .then(response => response.json())
    .then(data => reader(data))
    .catch(err => console.log(err));
}

export { keys, data_reader }