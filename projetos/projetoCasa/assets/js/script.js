let nome = document.querySelector('#inome')
let sobrenome = document.querySelector('#isobrenome')
let email = document.querySelector('#iemail')
let celular = document.querySelector('#icelular')

let senha = document.querySelector('#isenha')
senha = senha.split('')
let confSenha = document.querySelector('#iisenha')

document.getElementById('enviar').addEventListener('click', Enviar)

let verificadorSenha = 0

function Enviar(){
    window.alert('Funciona')
}

let caracEspeciais = '!@#$%&*()-{}|?/'
caracEspeciais = caracEspeciais.split(' ')




