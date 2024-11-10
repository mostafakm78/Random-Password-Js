const passwordBox = document.getElementById('Password')
const EyeIcon = document.querySelector('#Eye')
const Passstrenght = document.querySelector('#strenght')
const lenght = 12;

const display = document.querySelector('.display')
const dark = document.getElementById('dark-mode')
const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowercase = "qwertyuiopasdfghjklzxcvbnm"
const number = "0123456789"
const symbol = "!@#-$&"

const darkBody = document.querySelector('#body')
const darkText1 = document.querySelector('.text-1')
const darkText2 = document.querySelector('.text-2')
const darkBtn = document.querySelector('.btndark')
const darkIcon = document.querySelector('.fa-moon-o')
const darkBtn2 = document.querySelector('#btn')
const passMsg = document.querySelector('.pass-msg')


const AllChar = uppercase + lowercase + number + symbol

function createPass() {
    let password = ''
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (lenght > password.length) {
        password += AllChar[Math.floor(Math.random() * AllChar.length)]
    }
    passwordBox.value = password
    passMsg.style.display = 'block'
    Passstrenght.innerHTML = 'قوی است'
    Passstrenght.style.color = '#15B392'
    display.style.border = '2px solid #15B392'
}

function copyPass() {
    passwordBox.select()
    document.execCommand('copy');
}


dark.addEventListener('click' , () => {
    darkBody.classList.toggle('toggle')
    darkBtn.classList.toggle('toggle')
    darkIcon.classList.toggle('toggle')
    darkText1.classList.toggle('toggle')
    darkText2.classList.toggle('toggle')
    darkBtn2.classList.toggle('toggle')
    passMsg.classList.toggle('toggle')
    if (dark.classList.contains('toggle')) {
        darkIcon.classList.add('fa-sun-o')
        darkIcon.classList.remove('fa-moon-o')
    } else {
        darkIcon.classList.remove('fa-sun-o')
        darkIcon.classList.add('fa-moon-o')
    }
})


function setAppliedMode(mode) {
    document.documentElement.dataset.appliedMode = mode;
  }

  console.log(EyeIcon)

  EyeIcon.addEventListener('click' , () => {
    if (passwordBox.type == 'password') {
        EyeIcon.src = "./eye-open.png"
        passwordBox.type = "text"
    } else if (passwordBox.type == 'text') {
        EyeIcon.src = "./eye-close.png"
        passwordBox.type = "password"
    }
  })

  passwordBox.addEventListener('input' , () => {
    if(passwordBox.value.length > 0) {
        passMsg.style.display = 'block'
    } else {
        passMsg.style.display = 'none'
    }
    if (passwordBox.value.length < 4) {
        Passstrenght.innerHTML = 'ضعیف است'
        Passstrenght.style.color = '#FF4191'
        display.style.border = '2px solid #FF4191'
    } else if (passwordBox.value.length >= 5 && passwordBox.value.length < 9) {
        Passstrenght.innerHTML = 'متوسط است'
        Passstrenght.style.color = 'yellow'
        display.style.border = '2px solid yellow'
    } else if (passwordBox.value.length > 9) {
        Passstrenght.innerHTML = 'قوی است'
        Passstrenght.style.color = '#15B392'
        display.style.border = '2px solid #15B392'
    }
  })
