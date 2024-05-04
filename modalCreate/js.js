const buttonOn = document.querySelector('.btn-open-popup')
const buttonOff = document.querySelector('.btn-close-popup')
const closeArea = document.querySelector('.popup-area-close')
const body = document.body

buttonOn.addEventListener('click', ()=>{
    body.classList.add('scroll')
})
buttonOff.addEventListener('click', ()=>{
    setTimeout(()=> {
        body.classList.remove('scroll')
    }, 700)
})
closeArea.addEventListener('click', ()=>{
    setTimeout(()=> {
        body.classList.remove('scroll')

    }, 700)
})


