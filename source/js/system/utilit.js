const keys = ['_id', 'title', 'desc', 'create_at'];

function data_reader(reader){
    fetch(`${window.location.protocol}/data/arrays.json`)
    .then(response => response.json())
    .then(data => reader(data))
    .catch(err => console.log(err));
}

export { keys, data_reader }