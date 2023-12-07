let senha = 'BieBarsc'
let caracEspeciais = '!@#$%&*()-{}|?/'
caracEspeciais = caracEspeciais.split('')
senha = senha.split('')

let contador = 0
for(let s = 0; s < senha.length ; s++){
    for(let c = 0 ; c < caracEspeciais.length ; c++ ){
        if(senha[s] == caracEspeciais[c]){
            contador++
        }
    }
}
if(contador < 1){
    console.log(`Senha deve conter pelo menos um caractere especial`)
}else{
    console.log(`Senha registrada com sucesso!`)
}