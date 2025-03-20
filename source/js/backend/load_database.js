export function load_database(reader, file){
    fetch(`${window.location.protocol}/data/${file}`)
    .then(req => req.json())
    .then(data => reader(data))
    .catch(err => console.log(err));
}