let container = document.querySelector('.container')

// create
let header = document.createElement('header')
let header__logo = document.createElement('div')
let img__logo = document.createElement('img')
let nav__wrapper = document.createElement('div')
let header__nav = document.createElement('nav')
let header__ul = document.createElement('ul')

let liOne = document.createElement('li')
let aOne = document.createElement('a')
let imgOne = document.createElement('img')
let spanOne = document.createElement('span')

let liTwo = document.createElement('li')
let aTwo = document.createElement('a')
let spanTwo = document.createElement('span')

let liThree = document.createElement('li')
let aThree = document.createElement('a')
let spanThree = document.createElement('span')

let liFour = document.createElement('li')
let aFour = document.createElement('a')
let spanFour = document.createElement('span')

let liFive = document.createElement('li')
let aFive = document.createElement('a')
let imgFive = document.createElement('img')
let spanFive = document.createElement('span')

let liSix = document.createElement('li')
let aSix = document.createElement('a')
let spanSix = document.createElement('span')

let liSeven = document.createElement('li')
let aSeven = document.createElement('a')
let imgSeven = document.createElement('img')
let spanSeven = document.createElement('span')

let section = document.createElement('section')
let section__title = document.createElement('h2')
let section__header = document.createElement('div')

let childOne = document.createElement('div')
let childImgOne = document.createElement('img')
let chil__titleOne = document.createElement('div')
let h3One = document.createElement('h3')
let pOne = document.createElement('p')

let childTwo = document.createElement('div')
let childImgTwo = document.createElement('img')
let chil__titleTwo = document.createElement('div')
let h3Two = document.createElement('h3')
let pTwo = document.createElement('p')

let childThree = document.createElement('div')
let childImgThree = document.createElement('img')
let chil__titleThree = document.createElement('div')
let h3Three = document.createElement('h3')
let pThree = document.createElement('p')
let section__hr = document.createElement('hr')

let glava = document.createElement('div')
let section__inps = document.createElement('div')
let inps__titleOne = document.createElement('h2')

let inp1 = document.createElement('div')
let inputOne = document.createElement('input')
let labelOne = document.createElement('label')

let inp2 = document.createElement('div')
let inputTwo = document.createElement('input')
let labelTwo = document.createElement('label')

let inp3 = document.createElement('div')
let inputThree = document.createElement('input')
let labelThree = document.createElement('label')

let inp4 = document.createElement('div')
let inputFour = document.createElement('input')
let labelFour = document.createElement('label')

let inps__hr = document.createElement('hr')
let inps__titleTwo = document.createElement('h2')

let inp5 = document.createElement('div')
let inputFive = document.createElement('input')
let labelFive = document.createElement('label')

let inp6 = document.createElement('div')
let inputSix = document.createElement('input')
let labelSix = document.createElement('label')

let inp7 = document.createElement('div')
let inputSeven = document.createElement('input')
let labelSeven = document.createElement('label')

let section__boxes = document.createElement('div')
let boxes__title = document.createElement('h3')
let blocks = document.createElement('div')
let block1 = document.createElement('div')
let block2 = document.createElement('div')
let block3 = document.createElement('div')
let block4 = document.createElement('div')
let block5 = document.createElement('div')
let block6 = document.createElement('div')
let block7 = document.createElement('div')
let block8 = document.createElement('div')
let block9 = document.createElement('div')
let cards = document.createElement('div')



// class
header.classList.add('header')
header__logo.classList.add('header__logo')
nav__wrapper.classList.add('nav__wrapper')
header__nav.classList.add('header__nav')
header__ul.classList.add('header__ul')
section.classList.add('section')
section__title.classList.add('section__title')
section__header.classList.add('section__header')
childOne.classList.add('child')
childTwo.classList.add('child')
childThree.classList.add('child')
chil__titleOne.classList.add('chil__title')
chil__titleTwo.classList.add('chil__title')
chil__titleThree.classList.add('chil__title')
section__hr.classList.add('section__hr')
inp1.classList.add('inp')
inp2.classList.add('inp')
inp3.classList.add('inp')
inp4.classList.add('inp')
inp5.classList.add('inp')
inp6.classList.add('inp')
inp7.classList.add('inp')
inps__hr.classList.add('inps__hr')
inps__titleOne.classList.add('inps__title')
inps__titleTwo.classList.add('inps__title')
glava.classList.add('glava')
section__inps.classList.add('section__inps')
section__boxes.classList.add('section__boxes')
boxes__title.classList.add('boxes__title')
blocks.classList.add('blocks')
block1.classList.add('block')
block2.classList.add('block')
block3.classList.add('block')
block4.classList.add('block')
block5.classList.add('block')
block6.classList.add('block')
block7.classList.add('block')
block8.classList.add('block')
block9.classList.add('block')
cards.classList.add('cards')


// text
spanOne.innerHTML = '?????? ??????????'
spanTwo.innerHTML = '??????????????????????'
spanThree.innerHTML = '???????? ????????????'
spanFour.innerHTML = '??????????????'
spanFive.innerHTML = '???????????? ????????????????'
spanSix.innerHTML = '8 800 950-33-98'
spanSeven.innerHTML = '??????????'
h3One.innerHTML = '????????'
pOne.innerHTML = '8 ??? 14 ??????'
h3Two.innerHTML = '??????????????????'
pTwo.innerHTML = '14 ??? 18 ??????'
h3Three.innerHTML = '????????????????'
pThree.innerHTML = '18 ??? ???'
inps__titleOne.innerHTML = '?????????????? ??????????????????'
inps__titleTwo.innerHTML = '?????? ????????????????'
labelOne.innerHTML = '??????????????'
labelTwo.innerHTML = '????????????????????????'
labelThree.innerHTML = '????????????????????????'
labelFour.innerHTML = '??????????'
labelFive.innerHTML = '??????????'
labelSix.innerHTML = '??????????????????'
labelSeven.innerHTML = '????????'
boxes__title.innerHTML = '??????????????????????'
block1.innerHTML = '??????????????????????????'
block2.innerHTML = '???????????????? ??????'
block3.innerHTML = 'Web-????????????????????'
block4.innerHTML = '??????????????????????'
block5.innerHTML = '??????????????'
block6.innerHTML = '3D-?????????????????????????? ?? ????????????'
block7.innerHTML = '???????????????????? ????????'
block8.innerHTML = '??????????????'
block9.innerHTML = 'Soft skills'
// attribute
img__logo.setAttribute('src', './assets/icons/header_logo.svg')
imgOne.setAttribute('src', './assets/icons/header-icon1.svg')
imgFive.setAttribute('src', './assets/icons/header-icon2.svg')
imgSeven.setAttribute('src', './assets/icons/header-icon3.svg')
childImgOne.setAttribute('src', './assets/img/children.png')
childImgOne.setAttribute('width', '49px')
childImgOne.setAttribute('height', '49px')
childImgTwo.setAttribute('src', './assets/img/teenagers.png')
childImgTwo.setAttribute('width', '49px')
childImgTwo.setAttribute('height', '49px')
childImgThree.setAttribute('src', './assets/img/children.png')
childImgThree.setAttribute('width', '49px')
childImgThree.setAttribute('height', '49px')

inputOne.setAttribute('type', 'radio')
inputOne.setAttribute('id', 'new')
inputOne.setAttribute('value', 'name')
inputOne.setAttribute('name', 'contact')

inputTwo.setAttribute('type', 'radio')
inputTwo.setAttribute('id', 'user')
inputTwo.setAttribute('value', 'user')
inputTwo.setAttribute('name', 'contact')

inputThree.setAttribute('type', 'radio')
inputThree.setAttribute('id', 'pro')
inputThree.setAttribute('value', 'pro')
inputThree.setAttribute('name', 'contact')

inputFour.setAttribute('type', 'radio')
inputFour.setAttribute('id', 'chiter')
inputFour.setAttribute('value', 'chiter')
inputFour.setAttribute('name', 'contact')

inputFive.setAttribute('type', 'radio')
inputFive.setAttribute('id', 'different')
inputFive.setAttribute('value', 'different')
inputFive.setAttribute('name', 'contact2')

inputSix.setAttribute('type', 'radio')
inputSix.setAttribute('id', 'job')
inputSix.setAttribute('value', 'job')
inputSix.setAttribute('name', 'contact2')

inputSeven.setAttribute('type', 'radio')
inputSeven.setAttribute('id', 'curs')
inputSeven.setAttribute('value', 'curs')
inputSeven.setAttribute('name', 'contact2')

labelOne.setAttribute('for', 'new')
labelTwo.setAttribute('for', 'user')
labelThree.setAttribute('for', 'pro')
labelFour.setAttribute('for', 'chiter')
labelFive.setAttribute('for', 'different')
labelSix.setAttribute('for', 'job')
labelSeven.setAttribute('for', 'curs')

aOne.href = '/'
aTwo.href = '/'
aThree.href = '/'
aFour.href = '/'
aFive.href = '/'
aSix.href = '/'
aSeven.href = '/'

// append 
blocks.append(block1, block2, block3, block4, block5, block6, block7, block8, block9)
section__boxes.append(boxes__title, blocks, cards)
inp7.append(inputSeven, labelSeven)
inp6.append(inputSix, labelSix)
inp5.append(inputFive, labelFive)
inp4.append(inputFour, labelFour)
inp3.append(inputThree, labelThree)
inp2.append(inputTwo, labelTwo)
inp1.append(inputOne, labelOne)
section__inps.append(inps__titleOne, inp1, inp2, inp3, inp4, inps__hr, inps__titleTwo, inp5, inp6, inp7)
glava.append(section__inps, section__boxes)
chil__titleThree.append(h3Three, pThree)
chil__titleTwo.append(h3Two, pTwo)
chil__titleOne.append(h3One, pOne)
childThree.append(childImgThree, chil__titleThree)
childTwo.append(childImgTwo, chil__titleTwo)
childOne.append(childImgOne, chil__titleOne)
section__header.append(childOne, childTwo, childThree)
section.append(section__title, section__header, section__hr, glava)
aSeven.append(imgSeven, spanSeven)
aSix.append(spanSix)
aFive.append(imgFive, spanFive)
aFour.append(spanFour)
aThree.append(spanThree)
aTwo.append(spanTwo)
aOne.append(imgOne, spanOne)
liSeven.append(aSeven)
liSix.append(aSix)
liFive.append(aFive)
liFour.append(aFour)
liThree.append(aThree)
liTwo.append(aTwo)
liOne.append(aOne)
header__ul.append(liOne, liTwo, liThree, liFour, liFive, liSix, liSeven)
header__nav.append(header__ul)
nav__wrapper.append(header__nav)
header__logo.append(img__logo)
header.append(header__logo, nav__wrapper)
container.append(header, section)


const cardCreat = () => {
    for (let i = 0; i < 10; i++) {
        // create
        let card = document.createElement('div')
        let card__title = document.createElement('h2')
        let card__img = document.createElement('div')
        let img = document.createElement('img')
        let card__type = document.createElement('p')
        let card__desc = document.createElement('p')
        let card__foot = document.createElement('span')

        // class 
        card.classList.add('card')
        card__title.classList.add('card__title')
        card__img.classList.add('card__img')
        card__type.classList.add('card__type')
        card__foot.classList.add('card__foot')
        cards.classList.add('cards')

        // text 
        card__title.innerHTML = '??????????????????'
        card__type.innerHTML = '?????????????????????? ?????????????????? ??????????????????????'
        card__desc.innerHTML = '?????????????????????? ?????????????????? ???????????????????? ?????????????? ????????????????????, ???????????????? ???????? ?????????????????? ???????????????????? ???? ????????????????????, ?????????? ?????????? ?? ??????????????????.'
        card__foot.innerHTML = '24 ????????????'


        // atribute
        img.setAttribute('src', './assets/img/phone.png')
        img.setAttribute('width', '26px')
        img.setAttribute('height', '42px')

        // append 
        card__img.append(img, card__type)
        card.append(card__title, card__img, card__desc, card__foot)
        cards.append(card)
    }
}

cardCreat()




