/* Constantes para Form */
const   loginForm = document.getElementById('loginForm'),
        registerForm = document.getElementById('registroForm'),
        indicatorForm = document.getElementById('indicadorForm'),
        login = document.getElementById('login'),
        register = document.getElementById('register')

/* Mostrar Form en pantalla */
const registerShow = () => {
    registerForm.style.transform = "translateX(0px)"
    loginForm.style.transform = "translateX(0px)"
    indicatorForm.style.transform = "translateX(105px)"
}
register.addEventListener('click', registerShow)

const loginShow = () => {
    registerForm.style.transform = "translateX(300px)"
    loginForm.style.transform = "translateX(300px)"
    indicatorForm.style.transform = "translateX(-10px)"
}
login.addEventListener('click', loginShow)