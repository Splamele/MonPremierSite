// recupere le menue
let menu = document.getElementById('menu')

// ajouter un evenements au clic
menu.addEventListener('click', () => {
    menu.classList.toggle('open')
})