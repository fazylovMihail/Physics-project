// для работы с карточками
class Product{
    constructor(
        name,
        title,
        fontSize,
        // classCountGlobal, //Когда тыкаешь на любую из кнопок в в product-card-conteiner
        // classCount //Когда тыкаешь на любую из кнопок в в choose-window
    ){
        this.name = name
        this.title = title
        this.fontSize = fontSize
        // this.classCountGlobal = classCountGlobal
        // this.classCount = classCount
    }
    ToHtml(){
        return `<div style="font-size:${this.fontSize}" title="${this.title}" class="product-card">${this.name}</div>`
    }
    ToProductName(){
        return `${this.title}`
    }
    DrowProductContentName(){
        return `<div class="choose-window-btn">${this.name}</div>`
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
// Контрейнер для выбора формулы
let chooseWindow = document.querySelector('.choose-window')

let productWindowNameContent = [
    ['Скорость','Плотность','Сила тяжести','Сила упругости','Вес тела','Давление в твердых телах','Давление в жидкости (газе)','Архимедова сила','Сила трения','Механическая работа','Мощность','Кинетическая энергия','Потенциальная энергия','Момент силы','КПД']
    ['Количество теплоты при нагревании','Количество теплоты при охлаждении','Теплота сгорания','Теплота плавления','Теплота парообразования','Закон Кулона','Сила электрического тока','Сопротивление проводника','Электрическое напряжение','Последовательное соединение проводников','Параллельное соединение проводников','Работа тока','Мощность тока','Закон Джоуля-Ленца']
]

for(let i = 0;i<productWindowChooseBtn.length;i++){
    productWindowChooseBtn[i].addEventListener('click',()=>{
        for(let g=0;g<choose[productCount][i].length;g++){
            chooseWindow.innerHTML = null
            setTimeout(()=>{
                chooseWindow.innerHTML += choose[productCount][i][g].DrowProductContentName()
            },0.3)
        }
    })
}

let choose = []

let chooseProducts1 = []
choose.push(chooseProducts1)
let chooseProducts2 = []
choose.push(chooseProducts2)
let chooseProducts3 = []
choose.push(chooseProducts3)

let chooseProductCards1 = []
chooseProducts1.push(chooseProductCards1)
let chooseProductCards2 = []
chooseProducts1.push(chooseProductCards2)
let chooseProductCards3 = []
chooseProducts1.push(chooseProductCards3)

let chooseProductCards4 = []
chooseProducts2.push(chooseProductCards4)
let chooseProductCards5 = []
chooseProducts2.push(chooseProductCards5)
let chooseProductCards6 = []
chooseProducts2.push(chooseProductCards6)

let chooseProductCards7 = []
chooseProducts3.push(chooseProductCards7)
let chooseProductCards8 = []
chooseProducts3.push(chooseProductCards8)
let chooseProductCards9 = []
chooseProducts3.push(chooseProductCards9)

let chooseProductCard1 = new Product(
    'Скорость',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard1)
let chooseProductCard2 = new Product(
    'Плотность',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard2)
let chooseProductCard3 = new Product(
    'Сила тяжести',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard3)
let chooseProductCard4 = new Product(
    'Сила упругости',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard4)
let chooseProductCard5 = new Product(
    'Вес тела',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard5)
let chooseProductCard6 = new Product(
    'Давление в твердых телах',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard6)
let chooseProductCard7 = new Product(
    'Давление в жидкости (газе)',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard7)
let chooseProductCard8 = new Product(
    'Архимедова сила',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard8)
let chooseProductCard9 = new Product(
    'Сила трения',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard9)
let chooseProductCard10 = new Product(
    'Механическая работа',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard10)
let chooseProductCard11 = new Product(
    'Мощность',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard11)
let chooseProductCard12 = new Product(
    'Кинетическая энергия',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard12)
let chooseProductCard13 = new Product(
    'Потенциальная энергия',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard13)
let chooseProductCard14 = new Product(
    'Потенциальная энергия',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard14)
let chooseProductCard15 = new Product(
    'Момент силы',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard15)
let chooseProductCard16 = new Product(
    'КПД',
    null,
    null,
)
chooseProductCards1.push(chooseProductCard16)

let chooseProductCard17 = new Product(
    'Количество теплоты при нагревании',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard17)
let chooseProductCard18 = new Product(
    'Количество теплоты при охлаждении',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard18)
let chooseProductCard19 = new Product(
    'Теплота сгорания',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard19)
let chooseProductCard20 = new Product(
    'Теплота плавления',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard20)
let chooseProductCard21 = new Product(
    'Теплота парообразования',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard21)
let chooseProductCard22 = new Product(
    'Закон Кулона',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard22)
let chooseProductCard23 = new Product(
    'Сила электрического тока',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard23)
let chooseProductCard24 = new Product(
    'Сопротивление проводника',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard24)
let chooseProductCard25 = new Product(
    'Электрическое напряжение',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard25)
let chooseProductCard26 = new Product(
    'Электрическое напряжение',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard26)
let chooseProductCard27 = new Product(
    'Последовательное соединение проводников',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard27)
let chooseProductCard28 = new Product(
    'Параллельное соединение проводников',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard28)
let chooseProductCard29 = new Product(
    'Работа тока',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard29)
let chooseProductCard30 = new Product(
    'Мощность тока',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard30)
let chooseProductCard31 = new Product(
    'Закон Джоуля-Ленца',
    null,
    null,
)
chooseProductCards2.push(chooseProductCard31)