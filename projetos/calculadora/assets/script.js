let result = document.getElementById('result')

let zero = document.getElementById('zero').addEventListener('click', buttonZero)


let one = document.getElementById('one').addEventListener('click', buttonOne)


let two = document.getElementById('two').addEventListener('click', buttonTwo)


let three = document.getElementById('three').addEventListener('click', buttonThree)


let four = document.getElementById('four').addEventListener('click', buttonFour)


let five = document.getElementById('five').addEventListener('click', buttonFive)


let six = document.getElementById('six').addEventListener('click', buttonSix)


let seven = document.getElementById('seven').addEventListener('click', buttonSeven)


let eight = document.getElementById('eight').addEventListener('click', buttonEight)


let nine = document.getElementById('nine').addEventListener('click', buttonNine)


let c = document.getElementById('c').addEventListener('click', C)
let ce = document.getElementById('ce').addEventListener('click', CE)
let divisao = document.getElementById('divisao').addEventListener('click', Divisao)
let mult = document.getElementById('multi').addEventListener('click', Multiplicacao)
let sub = document.getElementById('sub').addEventListener('click', Subtracao)
let soma = document.getElementById('som').addEventListener('click', Soma)
let igual = document.getElementById('igual').addEventListener('click', Igual)


let newResult = 0
newResult = parseFloat(newResult)
function buttonZero(){
    zero = '0'
    result.innerHTML += zero
    newResult += zero
    console.log(newResult)
}
function buttonOne(){
    one = '1'
    result.innerHTML += one
    newResult += one
    console.log(newResult)
}
function buttonTwo(){
    two = '2'
    result.innerHTML += two
    newResult += two
    console.log(newResult)
}
function buttonThree(){
    three = '3'
    result.innerHTML += three
    newResult += three
    console.log(newResult)
}
function buttonFour(){
    four = '4'
    result.innerHTML += four
    newResult += four
    console.log(newResult)
}
function buttonFive(){
    five = '5'
    result.innerHTML += five
    newResult += five
    console.log(newResult)
}
function buttonSix(){
    six = '6'
    result.innerHTML += six
    newResult += six
    console.log(newResult)
}
function buttonSeven(){
    seven = '7'
    result.innerHTML += seven
    newResult += seven
    console.log(newResult)
}
function buttonEight(){
    eight = '8'
    result.innerHTML += eight
    newResult += eight
    console.log(newResult)
}
function buttonNine(){
    nine = '9'
    result.innerHTML += nine
    newResult += nine
    console.log(newResult)
}


function C(){
    result.innerHTML = ''
    newResult = 0
}
function CE(){
    result.innerHTML = ''
}
function Divisao(){
    result.innerHTML = ''
}
function Multiplicacao(){
    result.innerHTML = ''
}
function Subtracao(){
    result.innerHTML = ''
}

let secondResult
secondResult = parseFloat(secondResult)
function Soma(){
    secondResult = newResult
    newResult = 0
    console.log('O valor do novo valor é: '+secondResult)
    result.innerHTML = ``
}
function Igual(){
    console.log(`Primeira remessa ${typeof secondResult}`)
    console.log(`Segunda remessa: ${typeof newResult}`)
    let valor = secondResult + newResult
    valor = parseFloat(valor)
    console.log(valor)
    result.innerHTML = valor
}