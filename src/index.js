import './scss/index.scss'


const button = document.getElementById('rotateButton')
const roateText = document.getElementById('roateText')
const coin = document.getElementById('coin')

const rotateN = n => {
    let rotateY = 0

    for (let i = 0; i < n; i++) {
        rotateY += 180
        coin.style.transform = `rotateY(${rotateY}deg)`
    }
}

const randomRotate = () => {
    const randomNumber = Math.floor(Math.random() * 10)
    roateText.innerHTML = `Монет переворачиваеться ${randomNumber} раз`
    rotateN(randomNumber)
}

button.addEventListener('click', randomRotate)