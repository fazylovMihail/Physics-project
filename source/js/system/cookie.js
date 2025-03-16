export function set_cookie(name, value){
    document.cookie = `${name}=${encodeURI(value)};`;
}
export function get_cookie(name){
    if(document.cookie){
        const cookie = decodeURI(document.cookie).split(';');
        let i, key, total;
        for(i=0;i<cookie.length;i++){
            key = (cookie[i].split('=')[0]).trim();
            if(name==key) total = cookie[i].split('=')[1];
        }
        return total;
    }
}