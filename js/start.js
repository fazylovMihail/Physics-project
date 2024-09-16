let startGroup = document.querySelector('.start-group')
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')

setTimeout(()=>{
    startGroup.style.display = 'none'
    header.style.display = 'flex'
    main.style.display = 'block'
    footer.style.display = 'flex'
}, 3000)