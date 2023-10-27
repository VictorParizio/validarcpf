document.getElementById('cpf').focus()
const mensagem = document.getElementById('submit')
const modal = document.getElementById('modal')
const closeModalBtn = document.getElementById('closeModalBtn')
const modalMessage = document.getElementById('modalMessage')

function openModalWithMessage(message) {
  modalMessage.textContent = message
  modal.style.display = 'block'
}

mensagem.addEventListener('click', function () {
  openModalWithMessage('Digite um CPF')
})

closeModalBtn.addEventListener('click', function () {
  modal.style.display = 'none'
})

addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
})

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault()

  const cpf = document.getElementById('cpf').value
  const stringCPF = cpf.replace(/\D/g, '')

  if (stringCPF.length !== 11) {
    return openModalWithMessage('CPF deve conter 11 números')
  }

  let digitos = stringCPF.split('').map(Number)
  let soma1 = 0

  for (let i = 10; i > 1; i--) {
    soma1 += i * digitos[10 - i]
  }

  let digito10 = soma1 % 11

  if (digito10 < 2) {
    digito10 = 0
  } else {
    digito10 = 11 - digito10
  }

  if (digito10 !== digitos[9]) {
    openModalWithMessage('Inválido')
  } else {
    let soma2 = 0

    for (let i = 11; i > 1; i--) {
      soma2 += i * digitos[11 - i]
    }

    let digito11 = soma2 % 11

    if (digito11 < 2) {
      digito11 = 0
    } else {
      digito11 = 11 - digito11
    }

    if (digito11 !== digitos[10]) {
      openModalWithMessage('Inválido')
    } else {
      openModalWithMessage('Válido')
    }
  }
})
