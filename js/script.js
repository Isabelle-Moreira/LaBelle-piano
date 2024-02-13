const keys = document.querySelectorAll('.key')

const checkbox = document.querySelector('.checkbox-keys')
const switcher = document.querySelector('.switcher')
const keysSec = document.querySelector('.piano-keys')

const playNota = (note) => {
    const audio = new Audio(`notes/${note}.wav`)
    audio.play()
}

const actionmousedown = (key) => {
    playNota(key.getAttribute('data-nota'))
    if(key.className.includes('black')){
      key.classList.add('black-pressed')
    }else{
        key.style.background = '#ddd'
    }
    
}
const actionmouseup = (key) => {
    if(key.className.includes('black')){
        key.classList.remove('black-pressed') 
    }else{
        key.style.background = 'white'
    }

}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => actionmousedown(key))
    key.addEventListener('mouseup', () =>  actionmouseup(key))
})

checkbox.addEventListener('change',({target})=>{
    if(target.checked){
        switcher.classList.add('switcher-active')
        keysSec.classList.remove('disabled-keys')
    } else{
        switcher.classList.remove('switcher-active')
        keysSec.classList.add('disabled-keys')
    }
})
