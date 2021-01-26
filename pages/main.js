const audio = document.querySelector('#audio')
const test = document.querySelector('h1')

function moveAudio () {
    audio.style.padding.left = Math.random() * innerWidth + 'px'
    audio.style.left = Math.random() * innerWidth + 'px'
}

function waitAsec() {
    setTimeout(moveAudio, 5000)
}

audio.addEventListener('mouseover', moveAudio)

