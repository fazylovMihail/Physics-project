// для работы с карточками
class Product{
    constructor(
        name,
        title,
        fontSize,
        productText
    ){
        this.name = name
        this.title = title
        this.fontSize = fontSize
        this.productText = productText
    }
    ToHtml(){
        return `<div style="font-size:${this.fontSize}" title="${this.title}" class="product-card">${this.name}</div>`
    }
    ToProductName(){
        return `${this.title}`
    }
    ToProductWindow(){
        return `${this.productText}`
    }
}

let cards=[]

let card1 = new Product(
    '7-9',
    '7-9 класс',
    "2.5vw"
)
cards.push(card1)
let card2 = new Product(
    '10-11',
    '10-11 класс',
    '2.5vw'
)
cards.push(card2)
let card3 = new Product(
    'Величины',
    'Обозначения величин',
    '2vw'
)
cards.push(card3)

let productCardConteiner = document.querySelector('.product-card-conteiner')

for(let i = 0;i<cards.length;i++){
    productCardConteiner.innerHTML += cards[i].ToHtml()
}

// для открытия окна product-window

let productCards = document.querySelectorAll('.product-card')
let productWindow = document.querySelector('.product-window')
let argumentsWindowGroup = document.querySelector('.arguments-window-group')
let adWindowGroup = document.querySelector('.ad-window-group')
let iconHrefWindow = document.querySelector('.icon-href-window')
let productWindowCount = 0

for(let i = 0;i<productCards.length;i++){
    productCards[i].addEventListener('click',()=>{
        setTimeout(()=>{
            header.style.display = 'none'
            main.style.display = 'none'
            footer.style.display = 'none'
            productWindow.style.display = 'block'
            iconHrefWindow.style.display= 'none'
            argumentsWindowGroup.style.display = 'none'
            window.scrollTo(0,0)
            productWindowCount = i
        },500)
    })
}

let adHeaderImges = document.querySelectorAll('.ad-header-img')

for(let i = 0;i<adHeaderImges.length;i++){
    adHeaderImges[i].addEventListener('click',()=>{
        header.style.display = 'flex'
        main.style.display = 'block'
        footer.style.display = 'flex'
        productWindow.style.display = 'none'
        argumentsWindowGroup.style.display = 'none'
        adWindowGroup.style.display = 'none'
        iconHrefWindow.style.display= 'none'
        window.scrollTo(0,0)
    })
}

let adBtn = document.querySelector('.ad-btn')

adBtn.addEventListener('click',()=>{
    header.style.display = 'none'
    main.style.display = 'none'
    footer.style.display = 'none'
    productWindow.style.display = 'none'
    argumentsWindowGroup.style.display = 'none'
    adWindowGroup.style.display = 'block'
    iconHrefWindow.style.display= 'none'
    window.scrollTo(0,0)
})

let criteriaBtn = document.querySelectorAll('.criteria-btn')

for(let i = 0;i<criteriaBtn.length;i++){
    criteriaBtn[i].addEventListener('click',()=>{
        header.style.display = 'none'
        main.style.display = 'none'
        footer.style.display = 'none'
        productWindow.style.display = 'none'
        argumentsWindowGroup.style.display = 'block'
        adWindowGroup.style.display = 'none'
        iconHrefWindow.style.display= 'none'
        window.scrollTo(0,0)
    })
}

// логика product-window

let productName = document.querySelector('.product-name')
let productCount = null

for(let i = 0;i<cards.length;i++){
    productCards[i].addEventListener('click',()=>{
        productName.innerHTML = cards[i].ToProductName()
        productCount = i
        console.log(productCount)
    })
}

function OpenIconHrefWindow(){
    header.style.display = 'none'
    main.style.display = 'none'
    footer.style.display = 'none'
    productWindow.style.display = 'none'
    argumentsWindowGroup.style.display = 'none'
    adWindowGroup.style.display = 'none'
    iconHrefWindow.style.display= 'block'
    window.scrollTo(0,0)
}

let imgBackgroundMassive = document.querySelectorAll('.img-background')
let imgLocator = document.querySelector('.img-locator')
let activeAnim = false

imgLocator.addEventListener('mouseenter',()=>{
    anime({
        duration:1500,
        targets:imgBackgroundMassive[0],
        marginRight:'20vw',
        loop:false
    })
    anime({
        duration:1500,
        targets:imgBackgroundMassive[1],
        marginLeft:'20vw',
        loop:false
    })
    anime({
        duration:200,
        targets:'.welcome-text',
        opacity:1,
        loop:false,
        easing:'linear'
    })
})
imgLocator.addEventListener('mouseout',()=>{
    anime({
        targets:imgBackgroundMassive[0],
        marginRight:'0vw',
        duration:1500,
        loop:false
    })
    anime({
        targets:imgBackgroundMassive[1],
        marginLeft:'0vw',
        duration:1500,
        loop:false
    })
    anime({
        duration:300,
        targets:'.welcome-text',
        opacity:0,
        loop:false,
        easing:'linear'
    })
})

// Выбор блока
let productWindowChooseBtn = document.querySelectorAll('.choose-btn')
// Выбор формулы
let productWindowBtn = document.querySelectorAll('.choose-window-btn')

let productTextCards = []

let productTextCards1 = []
productTextCards.push(productTextCards1)
let productTextCards2 = []
productTextCards.push(productTextCards2)
let productTextCards3 = []
productTextCards.push(productTextCards3)

let productTextCard1 = new Product(
    null,
    null,
    null,
    'q'
)
productTextCards1.push(productTextCard1)
let productTextCard2 = new Product(
    null,
    null,
    null,
    'w'
)
productTextCards1.push(productTextCard2)
let productTextCard3 = new Product(
    null,
    null,
    null,
    'e'
)
productTextCards1.push(productTextCard3)
let productTextCard4 = new Product(
    null,
    null,
    null,
    'r'
)
productTextCards2.push(productTextCard4)
let productTextCard5 = new Product(
    null,
    null,
    null,
    't'
)
productTextCards2.push(productTextCard5)
let productTextCard6 = new Product(
    null,
    null,
    null,
    'y'
)
productTextCards2.push(productTextCard6)
let productTextCard7 = new Product(
    null,
    null,
    null,
    'u'
)
productTextCards3.push(productTextCard7)
productTextCards1.push(productTextCard1)
let productTextCard8 = new Product(
    null,
    null,
    null,
    'i'
)
productTextCards3.push(productTextCard8)
let productTextCard9 = new Product(
    null,
    null,
    null,
    'o'
)
productTextCards3.push(productTextCard9)

for(let i=0;i<productWindowChooseBtn.length;i++){
    productWindowChooseBtn[i].addEventListener('click',()=>{
        for(let g=0;g<productWindowBtn.length;g++){
            productWindowBtn[g].innerHTML = productTextCards[productWindowCount][g].ToProductWindow()
        }
    })
}