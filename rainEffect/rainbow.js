const body = document.body;
const count = 1000;
let i = 0;

while(i < count){
    const iel = document.createElement('i');

    let leftRandom = Math.floor(Math.random() * window.innerWidth);

    let widthLine = Math.random() * 8;
    let delayAnimation = Math.random() * (-10);
    let animationDur = Math.random() * 5;

    iel.style.animationDuration = 3 + animationDur + 's';
    iel.style.left = leftRandom + 'px';
    iel.style.width = widthLine + 'px';
    iel.style.animationDelay = delayAnimation + 's';

    body.appendChild(iel);
    i++;

}