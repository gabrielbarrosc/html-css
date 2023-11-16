function Calcular(imc){
const alt = document.getElementById('imc-altura')
const pes = document.getElementById('imc-peso')
const altura = Number(alt.value)
const peso = Number(pes.value)

const valorResult = document.querySelector('.valor-resultado')
const textoResult = document.querySelector('.texto-resultado')

imc = peso/(altura*altura)

if(altura == 0 || peso == 0){
    window.alert('[ERROR] VALOR INVÁLIDO OU NÃO INFORMADO')
}
else if(imc < 18.5){
    valorResult.innerHTML = `${imc.toFixed(1)}`
    textoResult.style.display = 'block'
    textoResult.innerHTML = `Você está abaixo do peso`
}
else if(imc >= 18.5 && imc <= 24.9){
    valorResult.innerHTML = `${imc.toFixed(1)}`
    textoResult.style.display = 'block'
    textoResult.innerHTML = `Você está no peso ideal`
}
else if(imc >= 25 && imc <= 29.9){
    valorResult.innerHTML = `${imc.toFixed(1)}`
    textoResult.style.display = 'block'
    textoResult.innerHTML = `Você está um pouco acima do peso`
}
else if(imc >= 30 && imc <= 34.9){
    valorResult.innerHTML = `${imc.toFixed(1)}`
    textoResult.style.display = 'block'
    textoResult.innerHTML = `Você está em obesidade de grau I`
}
else if(imc >= 35){
    valorResult.innerHTML = `${imc.toFixed(1)}`
    textoResult.style.display = 'block'
    textoResult.innerHTML = `Você está em obesidade de grau II`
}
}