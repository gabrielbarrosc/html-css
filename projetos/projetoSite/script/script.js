function Calcular(imc){
let p = document.getElementById('peso')
let al = document.getElementById('altura')
let peso = Number(p.value)
let altura = Number(al.value)
let resultado = document.getElementById('resultado')

imc = peso/(altura*altura)
    if(peso == 0 || altura == 0){
        window.alert('[ERROR] DADOS INVÁLIDOS OU NÃO INFORMADOS!')
    }
    else if(imc <= 18.5){
        resultado.innerHTML = `Você está abaixo do peso, seu IMC é de: ${imc.toFixed(2)}`
        resultado.style.display = 'block'
    }
    else if(imc > 18.5 && imc <=24.9){
        resultado.innerHTML = `Você está no peso ideal, seu IMC é de: ${imc.toFixed(2)}`
        resultado.style.display = 'block'
    }
    else if(imc > 24.9 && imc <=29.9){
        resultado.innerHTML = `Você está um pouco acima do peso, seu IMC é de: ${imc.toFixed(2)}`
        resultado.style.display = 'block'
    }
    else{
        resultado.innerHTML = `Você está obeso, seu IMC é de: ${imc.toFixed(2)}`
        resultado.style.display = 'block'
    }
}
