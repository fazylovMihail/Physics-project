const keys = ['_id', 'title', 'desc', 'create_at'];

function to_file(file, value){
    location.href = `./${file}?${value}`;
}
function data_reader(reader){
    fetch(`${window.location.protocol}/data/arrays.json`)
    .then(response => response.json())
    .then(data => reader(data))
    .catch(err => console.log(err));
}
function get_substring(num){
    const reader = (data) => {
        const result = location.search.substring(num);
        
        for(let key of Object.values(data)){
            alert(key[result]);
        }
    }
    data_reader(reader);
}

export { keys, to_file, get_substring, data_reader }