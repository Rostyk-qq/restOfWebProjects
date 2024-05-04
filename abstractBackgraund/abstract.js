const allRounds = 500
let counter = 0

const body = document.body

while(counter < allRounds){
    const elementI = document.createElement('i')
    let leftSize = Math.floor(Math.random() * window.innerWidth)

    let animationDuration = Math.random() * 7
    let animationDelay = Math.random() * -20

    elementI.style.left = leftSize + 'px'

    elementI.style.animationDelay = animationDelay + 's'
    elementI.style.animationDuration = 5 + animationDuration + 's'

    body.append(elementI)
    counter++;
}