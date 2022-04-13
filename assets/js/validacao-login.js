const form = document.querySelector('#form-login')
let formCorreto = true

form.addEventListener('submit', () => {
    
    const todosOsCampos = document.querySelectorAll('[data-campo-login]')
    formCorreto = true

    for (i = 0; i < todosOsCampos.length; i++) {
        const mensagemDeErro = todosOsCampos[i].nextElementSibling

        if (todosOsCampos[i].value == '') {
            mensagemDeErro.style.display = 'block'
            todosOsCampos[i].setAttribute('style', 'border-color: red')
            formCorreto = false 
        } 

        if (todosOsCampos[i].value != '') {  
            todosOsCampos[i].setAttribute('style', 'border-color: black')
            mensagemDeErro.style.display = 'none'
        }

    }

    if (!formCorreto) {
        event.preventDefault()
    }

    if (formCorreto) {
        form.reset()
        alert('Correto!')
    }
    
})

