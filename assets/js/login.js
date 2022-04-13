const btnLogin = document.querySelector('[data-login]')
const modalLogin = document.querySelector('[data-modal]')
const iconeSetaLogin = document.querySelector('[data-icon-seta]')

btnLogin.addEventListener('click', () => {
    if (modalLogin.style.display != 'block') {
        modalLogin.style.display = 'block'
        iconeSetaLogin.classList.add('icon-angle-login-rotate')
    } else {
        modalLogin.style.display = 'none'
        iconeSetaLogin.classList.remove('icon-angle-login-rotate')
    }
})
