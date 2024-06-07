/* Aplicação da funcionalidade do JavaScript*/
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        document.body.className = button.id
    })
})
