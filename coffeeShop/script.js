// logica de program
/*
    [1]saber quando cliclou no botao
    [2] Mudar o posicionamento do MODAL
    [3] fazer a mascara ficar visivel
    [4] quando clicar na macsara fechar o modal
*/

const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

//1 e 2
function mostrarModal() {
   modal.style.left = '50%'
   mascara.style.visibility = 'visible'
}

function esconderModal(){
    modal.style.left = '-30%'
    mascara.style.visibility = 'hidden'
    mascara.style.cursor = 'pointer'
}