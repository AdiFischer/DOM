function displayDate() {
    document.getElementById('demo').innerHTML = Date()
}

document.getElementsByTagName('button')[0]
.addEventListener("click",() => {
    alert('U click the button')
 })

window.addEventListener('resize', () => {
    document.getElementById('demo').innerHTML = "U resize!"
})
window.removeEventListener('resize', () => {
    document.getElementById('demo').innerHTML = "U resize!"
})
window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'v':
        document.body.style.backgroundColor = 'violet'
        break
        case 'w':
        document.body.style.backgroundColor = 'red'
        break
        case 's':
        document.body.style.backgroundColor = 'blue'
        break
        case 'o':
        document.body.style.backgroundColor = 'orange'
        break
        case 'g':
        document.body.style.backgroundColor = 'gray'
        break
    }
})

