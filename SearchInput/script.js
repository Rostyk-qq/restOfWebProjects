const input = document.querySelector('.input');
const list = document.querySelectorAll('.list .list__item');

input.addEventListener('input', e => {
    const inputText = e.target.value.trim();

    if(inputText.length !== 0 || inputText !== ''){
        list.forEach(listElement => {
            if(listElement.textContent.search(inputText) !== -1){
                listElement.classList.remove('hide')
            }
            else{
                listElement.classList.add('hide')
            }
        })
    }
    else{
        list.forEach(listElement => {
            if(listElement.classList.contains('hide')){
                listElement.classList.remove('hide')
            }
        })
    }
})