// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKeyBoard)

// Funções callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value === '')) {
    alert(`Insira um valor para validar a tentativa!`)
  } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert(`Só é permitido números entre 0 e 10, o número ${inputNumber.value} é inválido!`)
  } else if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector('h2').innerText = `Você acertou em ${xAttempts} tentativas`
  } else {
    console.log(`Você errou, o número escolhido foi: ${randomNumber}`)
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleKeyBoard(event) {
  if (event.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}


