

const url = "https://mural-avisos-condominio-api-7ac88d72637c.herokuapp.com/problemas-elevadores";
const commentForm = document.querySelector("#comment-form");
const elevadorInput = document.querySelector("#elevador");
const blocoInput = document.querySelector("#bloco");
const andarInput = document.querySelector("#andar");
const registroInput = document.querySelector("#registro");
const defeitoInput = document.querySelector("#defeito");
const dataInput = document.querySelector("#txtdata");

const dat = new Date()
const dia = String(dat.getDate()).padStart(2, '0')
const mes = String(dat.getMonth() + 1).padStart(2, '0')
const ano = dat.getFullYear()
const hora = String(dat.getHours()).padStart(2, '0')
const min = String(dat.getMinutes()).padStart(2, '0')
const sec = String(dat.getSeconds()).padStart(2, '0')
const horadataAtual = ano + "-" + mes + "-" + ano + "T" + hora + ":" + min + ":" + sec + "00..000+00:00"


async function postComment(comment) {
    const response = await fetch(url, {
      method: "POST",
      body: comment,
     headers: {
        "Content-type": "application/json",
     },
    });
  
    const data = await response.json();

 }

commentForm.addEventListener("submit", (e) => {
    
    e.preventDefault();
    let comment = {
        
      "usuario_id": 2,
      "data_hora_registro": horadataAtual.value,
      "bloco": blocoInput.value,
      "andar": andarInput.value,
      "tipo_elevador": elevadorInput.value,
      "descricao_problema": defeitoInput.value,
      "problema_solucionado": false,
      "exibir": true
  
    };

    comment = JSON.stringify(comment);
    console.log(comment)

    postComment(comment);

    setTimeout(function() {
        location.reload()

    },1000);
    
  });
  

const carregarMensagens = async () => {

    const response = await fetch('https://mural-avisos-condominio-api-7ac88d72637c.herokuapp.com/problemas-elevadores')
    const data = await response.json()
    console.log(data)
    data.reverse()

    data.forEach(element => {
        const commentsContainer = document.getElementById('comments-container')
        
        const template = document.getElementById('msg-template')
       
        const commentElement = document.importNode(template.content, true)
        
        const item_msg = commentElement.querySelectorAll('span')

        item_msg[0].innerText = element.tipo_elevador
        item_msg[1].innerText = element.bloco
        item_msg[2].innerText = element.andar
        item_msg[3].innerText = element.data_hora_registro
        item_msg[4].innerText = element.descricao_problema
      
        commentsContainer.append(commentElement)
    });
} 


window.onload = () =>  {
 
  carregarMensagens()
   
}


