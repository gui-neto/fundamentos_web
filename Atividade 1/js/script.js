let nome = window.document.getElementById("nome")
let cartao = document.querySelector("#cartaocredito")
let senha = document.querySelector("#senhacredito")

nome.style.width = '18%'    
cartao.style.width = '18%'
senha.style.width = '18%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txt.innerHTML = 'Nome Invalido'
        txt.style.color = 'red'
    } else{
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}

function validaCredito(){
    let txt = document.querySelector("#txtCredito")
    if (cartao.value.length != 8){
        txt.innerHTML = "O cartão deve conter 8 digitos"
        txt.style.color = 'red'
    } else{
        txt.innerHTML = "Cartão válido"
        txt.style.color = 'green'
    }
}

function validaSenha(){
    let txt = document.querySelector("#txtSenha")
    if (senha.value.length < 4){
        txt.innerHTML = 'A senha deve conter no minimo 4 caracteres'
        txt.style.color = 'red'
    } else{
        txt.innerHTML = 'Senha válida'
        txt.style.color = 'green'
    }
}