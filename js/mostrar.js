function mostrar() {
    const dropbtn = document.querySelector(".drop_perfil")
    const dropbox = document.querySelector(".drop_options")
    const seta = document.querySelector(".seta")

    dropbox.style.display = 'none'

    dropbtn.addEventListener('mouseover', () => {
        dropbox.style.display = 'block'
        seta.style.transform = 'rotate(180deg)'
        seta.style.transition = '0.3s'

    })
    dropbtn.addEventListener('mouseout', () => {
        dropbox.style.display = 'none'
        seta.style.transform = 'rotate(0deg)'
        seta.style.transition = '0.3s'
    })
}
mostrar()

function mostrar_input() {
    const search = document.querySelector(".search")
    const input = document.querySelector(".input")

    input.style.display = 'none'

    search.addEventListener('mouseover', () => {
        search.classList.add('search_open')
        input.style.display = "block"
        search.style.transition = "1s"
    })
    search.addEventListener('mouseout', () => {
        search.classList.remove('search_open')
        input.style.display = "none"
        search.style.transition = "1s"
    })
}
mostrar_input()

function mostrar_notfication() {
    const notification = document.querySelector(".notification")
    const notification_options = document.querySelector(".notification_options")

    notification_options.style.display = "none"

    notification.addEventListener('mouseover', () => {
        notification_options.style.display = "grid"
    })
    notification.addEventListener('mouseout', () => {
        notification_options.style.display = "none"
    })
    notification_options.addEventListener('mouseout', () => {
        notification_options.style.display = "none"
    })
}
mostrar_notfication()