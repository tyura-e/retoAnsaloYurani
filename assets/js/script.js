// INICIO TEMAS

const temaOriginal = document.getElementById('original')

temaOriginal.addEventListener('click', () => {
    const container = document.getElementById('container')
    container.classList.remove('retro')
    container.classList.remove('dark')
    localStorage.setItem("fondo", "blanco")
})

const temaRetro = document.getElementById('retro')

temaRetro.addEventListener('click', () => {
    const container = document.getElementById('container')
    container.classList.remove('dark')
    container.classList.add('retro')
    localStorage.setItem("fondo", "retro")
})

const temaDark = document.getElementById('dark')

temaDark.addEventListener('click', () => {
    const container = document.getElementById('container')
    container.classList.remove('retro')
    container.classList.add('dark')
    localStorage.setItem("fondo", "dark")
})

const tema = () => {

    const fondo = localStorage.getItem('fondo')

    if (fondo == "retro") {
        const container = document.getElementById('container').classList.add('retro')
    } else if (fondo == "dark") {
        const container = document.getElementById('container').classList.add('dark')
    } else if (fondo == "blanco") {
        container = document.getElementById('container').classList.remove('retro')
        container = document.getElementById('container').classList.remove('dark')
    }
}

tema()

// FIN TEMAS