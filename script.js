let buttomMenu = document.getElementById('buttom_menu')
let buttomContact = document.getElementById('buttom_contact')
let menuItens = document.getElementById('menu_itens')
let contactInformations = document.getElementById('contact_informations')

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
    open('https://twitter.com/search?q=Algum%20Perfil&src=typeahead_click')
}

let facebook = document.getElementById('facebook_icon')
facebook.onclick = function () {
    open('https://pt-br.facebook.com/public/Pesquisa-Perfil-Perfil')
}

let instagram = document.getElementById('instagram_icon')
instagram.onclick = function () {
    open('https://www.instagram.com/algum_perfil.ae/?hl=pt-br')
}
