/* Constantes para menu responsive */
const   menuIcon = document.getElementById('menuResponsive'),
        menuItems = document.getElementById('menuItems')

menuItems.style.maxHeight = '0px'

/* Constantes para select items */
// const   selected = document.querySelector('.selected'),
//         optionContainer = document.querySelector('.options-container'),
//         optionsList = document.querySelectorAll('.option')
const   selected = document.getElementById('selected'),
        optionContainer = document.getElementById('optionsContainer'),
        optionsList = document.querySelectorAll('.option')

/* Constantes para galeria producto detalle */
const productImgBig = document.getElementById('productDetailBig')
const productImgSmall = document.getElementsByClassName('small-img') 


/* Menu responsive */
const menuToggle = () => {
    if(menuItems.style.maxHeight === '0px'){
        menuItems.style.maxHeight = '200px'
    }else{
        menuItems.style.maxHeight = '0px'
    }
}
menuIcon.addEventListener('click',  menuToggle)

/* Select items */
const selectToggle = () => {
    optionContainer.classList.toggle('active')
}
const selectItem = e => {
    selected.innerHTML = e.querySelector('label').innerHTML
    optionContainer.classList.remove('active')
}
selected.addEventListener('click',  selectToggle)
optionsList.forEach( e => {
    e.addEventListener('click', () => {
        selected.innerHTML = e.querySelector('label').innerHTML
        optionContainer.classList.remove('active')
    })
})

/* Galería Detalle Producto */
for(let i = 0; i<= productImgSmall.length; i++){
    productImgSmall[i].addEventListener('click', () => {
        productImgBig.src = productImgSmall[i].src
    })
}

