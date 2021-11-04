let buttomMenu = document.getElementById('buttom_menu')
let buttomContact = document.getElementById('buttom_contact')
let menuItens = document.getElementById('menu_itens')
let contactInformations = document.getElementById('contact_informations')
let buttonTheme = document.getElementById('theme')
let circleTheme = document.querySelector('.circle_theme')

buttonTheme.addEventListener('click', changeThemeBlack)

function changeThemeBlack() {
    circleTheme.classList.add('left')
    window.setTimeout(loadHTML, 500)
 }
 
 function loadHTML() {
     window.location.href = 'index.html'
 }

contactInformations.style.display = 'none'

buttomMenu.onclick = function () {
    contactInformations.style.display = 'none'
    menuItens.style.display = 'block'
}

buttomContact.onclick = function () {
    menuItens.style.display = 'none'
    contactInformations.style.display = 'block'
}

let address = document.getElementById('contact_address')
address.onclick = function () {
    open('https://www.google.com/maps/search/Algum+lugar/@-20.0306152,-48.9317634,15z')
}

let email = document.getElementById('contact_email')
email.onclick = function () {
    open('mailto:jkitchen@gmail.com')
}

let twitter = document.getElementById('twitter_icon')
twitter.onclick = function () {
    open('https://twitter.com/juliocesar2491')
}

let facebook = document.getElementById('facebook_icon')
facebook.onclick = function () {
    open('https://pt-br.facebook.com/public/Pesquisa-Perfil-Perfil')
}

let instagram = document.getElementById('instagram_icon')
instagram.onclick = function () {
    open('https://www.instagram.com/juliocesar_amarals/')
}

let paymentForms = document.querySelectorAll('.forms')
console.log(paymentForms)

let formResult;

function clickadd(form) {
    form.addEventListener('click', select)
    function select() {
        if(form == paymentForms[0]) {
            form.classList.add('selected')
            form.classList.remove('forms')
            paymentForms[1].classList.add('forms')
            paymentForms[1].classList.remove('selected')
        }
        if(form == paymentForms[1]) {
            form.classList.add('selected')
            form.classList.remove('forms')
            paymentForms[0].classList.add('forms')
            paymentForms[0].classList.remove('selected')
        }
        formResult = form
        console.log(formResult)
    }
}

paymentForms.forEach(clickadd)


let checkBoxes = document.querySelectorAll('.menu_item_checkbox')

let itemPriceString = document.querySelectorAll('.price')
let price = {
    arrozPrice: Number(itemPriceString[0].outerText.slice(2, -3)),
    feijaoPrice: Number(itemPriceString[1].outerText.slice(2, -3)),
    lasanhaPrice: Number(itemPriceString[2].outerText.slice(2, -3)),
    strogonoffPrice: Number(itemPriceString[3].outerText.slice(2, -3)),
    costDePorcoPrice: Number(itemPriceString[4].outerText.slice(2, -3)),
    amondegaPrice: Number(itemPriceString[5].outerText.slice(2, -3))
}

let totPrice = 0

function confirmPurchase() {
    function tot() {
        if(checkBoxes[0].checked){
            totPrice += price['arrozPrice']
        }
        if(checkBoxes[1].checked) {
            totPrice += price['feijaoPrice']
        }
        if(checkBoxes[2].checked) {
            totPrice += price['lasanhaPrice']
        }
        if(checkBoxes[3].checked) {
            totPrice += price['strogonoffPrice']
        }
        if(checkBoxes[4].checked) {
            totPrice += price['costDePorcoPrice']
        }
        if(checkBoxes[5].checked) {
            totPrice += price['amondegaPrice']
        }
    }
    tot()
    
    let totSum = document.getElementById('totPrice')
    totSum.innerText = 'R$'+totPrice+',00'
}

function notSelect(form) {
    form.classList.remove('selected')
    form.classList.add('forms')
}


function cancelPurchase() {
    totPrice = 0
    paymentForms.forEach(notSelect)
}

let modalWindow2 = document.getElementById('modalWindow2')
modalWindow2.style.display = 'none'
let textarea = document.querySelector('#obs')

function payPurchase() {
    
    if (totPrice == 0 || formResult === undefined) {
        alert('Erro ao realizar o pagamento')
        totPrice = 0
        paymentForms.forEach(notSelect)
    } else {
        totPrice = 0
        modalWindow2.style.display = ''
        modalWindow2.classList.add('fade-in-out')
        window.setTimeout(makeChanges, 3000)
    }
}

function makeChanges() {
    modalWindow2.classList.remove('fade-in-out')
    modalWindow2.style.display = ''
    window.location.reload(true)
}
