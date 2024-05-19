

const url = "https://mural-avisos-condominio-api-7ac88d72637c.herokuapp.com/usuarios";
const commentForm = document.querySelector("#comment-form");
//const perfilInput = document.querySelector("#perfil");
const nomeInput = document.querySelector("#nome");
const cpfInput = document.querySelector("#cpf");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");
const apartamentoInput = document.querySelector("#apartamento");
const blocoInput = document.querySelector("#bloco");
const passwordInput = document.querySelector("#password");


function pglogin(){
   window.location.href = "login.html";
}






async function postComment(comment) {
    const response = await fetch(url, {
      method: "POST",
      body: comment,
     headers: {
        "Content-type": "application/json",
     },
    });
  
    const data = await response.json();
    
    if(response.status == 200){
      pglogin()
      alert('Cadastrado com sucesso!!')
      

    } else{
      alert('Não foi possivel cadastrar')
    }
    
    
    console.log(data)

   }

commentForm.addEventListener("submit", (e) => {
    
    e.preventDefault();

    let comment = {
        
       
    "data_hora_registro": "2024-05-06T10:15:30.000+00:00",
    "CPF": cpfInput.value,
    "nome_usuario": nomeInput.value,
    "bloco": blocoInput.value,
    "apto": apartamentoInput.value,
    "telefone": telefoneInput.value,
    "email": emailInput.value,
    "perfil": "morador",
    "status_usuario": true,
    "senha": passwordInput.value
      
    };

    comment = JSON.stringify(comment);
    console.log(comment)
    

    postComment(comment);

    //location.reload()
     
    setTimeout(function() {
        location.reload()
      // carregarMensagens()
    
    },1000);
    
   
    
  });










const carregarMensagens = async () => {

    const response = await fetch('https://mural-avisos-condominio-api-7ac88d72637c.herokuapp.com/usuarios')
    const data = await response.json()
    console.log(data)
    data.reverse()

    data.forEach(element => {
        const commentsContainer = document.getElementById('comments-container')
        
        const template = document.getElementById('msg-template')
       
        const commentElement = document.importNode(template.content, true)
        
        const item_msg = commentElement.querySelectorAll('span')

        item_msg[0].innerText = element.nome_usuario
        item_msg[1].innerText = element.apto
        item_msg[2].innerText = element.bloco

        commentsContainer.append(commentElement)
    });
} 
//const envioMensagem  = async () => {
    
 //   const form = document.querySelector('#comment-form')
//    const inputAssunto = document.querySelector('.tema')
 //   const inputMensagem = document.querySelector('.corpo')
    
 //   form.addEventListener('submit', function(event){
 //       event.preventDefault()
 //       var campoAssunto = inputAssunto.value
  //      var campoMensagem = inputMensagem.value
  //      console.log(campoAssunto)
  //      console.log(campoMensagem)
 //   } )

    
    //const postAssunto = document.getElementById('assunto')
    //const postMensagem = document.getElementById('body')

    
    
 //   const menssagem = {

        

 //       "data_hora_registro": "2024-05-14T10:15:30.000+00:00",
 //       "assunto": campoAssunto.value,
 //       "mensagem": campoMensagem.value,
 //       "usuario_id": 4,
 //       "exibir": true

  //  }
 

  //  const init ={
 //       method: 'POST',
  //      headers: {
  //          "content-type": 'application/json'
  //      },
   //     body: JSON.stringify(menssagem)
   // }

   // const response = await fetch('https://mural-avisos-condominio-api-7ac88d72637c.herokuapp.com/mensagens', init)
//    const data = await response.json()
 
   
   


//}

window.onload = () =>  {
   // setTimeout(function() {
   //    carregarMensagens()
    
   // },5000);
 
   //    carregarMensagens()
   

  //  const btn_Enviarmsg = document.getElementById('btnenviarmsg')
 
    
   // btn_Enviarmsg.onclick = carregarMensagens

}


