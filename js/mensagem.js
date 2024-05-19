

const url = "https://mural-avisos-condominio-api-7ac88d72637c.herokuapp.com/mensagens";
const commentForm = document.querySelector("#comment-form");
const assuntoInput = document.querySelector("#assunto");
const mensagemInput = document.querySelector("#body");


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
        
        
        "data_hora_registro": "2024-05-06T10:15:30.000+00:00",
        "assunto": assuntoInput.value,
        "mensagem": mensagemInput.value,
        "usuario_id": 1,
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

    const response = await fetch('https://mural-avisos-condominio-api-7ac88d72637c.herokuapp.com/mensagens')
    const data = await response.json()
    console.log(data)
    data.reverse()

    data.forEach(element => {
        const commentsContainer = document.getElementById('comments-container')
        
        const template = document.getElementById('msg-template')
       
        const commentElement = document.importNode(template.content, true)
        
        const item_msg = commentElement.querySelectorAll('span')

        item_msg[0].innerText = element.id
        item_msg[1].innerText = element.assunto
        item_msg[2].innerText = element.mensagem

        commentsContainer.append(commentElement)
    });
} 


window.onload = () =>  {

       carregarMensagens()
   
}


