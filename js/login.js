
function onChangeEmail() {

    toggleButtonDisable();
    toggleEmailErrors();
    
}
 
function onChangePassword() {

    toggleButtonDisable();
    togglePasswordErrors();
 }
 

 function login() {
 window.location.href = "home.html";
}
function register() {
 window.location.href = "register.html";

}

 function isEmailValid(){
     const email = document.getElementById("email").value;
     if (!email) {
         return false;
     }
     return validateEmail(email);
 }

 function toggleEmailErrors() {
    const email = document.getElementById('email').value;
    if (!email) {
        document.getElementById('email-required-error').style.display = "block";
    } else {
        document.getElementById('email-required-error').style.display = "none";
    }
    
    if (validateEmail(email)) {
        document.getElementById('email-invalid-error').style.display = "none";
    } else {
        document.getElementById('email-invalid-error').style.display = "block";
    }

 }

 function toggleButtonDisable(){
    const emailValid = isEmailValid();
    document.getElementById('recover-password-buton').disabled = !emailValid;
   
    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;

 }

 function isPasswordValid() {
     const password = document.getElementById('password').value;
     if(!password){
         return false;
     }
     return true;
    }

function togglePasswordErrors() {
    const password = document.getElementById('password').value;
     if (!password) {
         document.getElementById('password-required-error').style.display = "block";
      } else {
         document.getElementById('password-required-error').style.display = "none";
      }   
}
    
 function validateEmail(email) {
     return /\S+@\S+\.\S+/.test(email);

 }

 function register(){
    window.location.href = "cadastro.html";
 }
    
 carregarUsuarios = async () => { 

    const response = await fetch('https://mural-avisos-condominio-api-7ac88d72637c.herokuapp.com/usuarios')
    const data = await response.json()
    console.log(data)

    let usuario = document.querySelector('#email')
    let senha = document.querySelector('#password')

    let listUser = []

    let userValid = {
        usuario: '',
        senha: ''

    }

    data.forEach((element) => {
        if(usuario.value == element.email && senha.value == element.senha){
    
           userValid = {
            nome: element.email,
            senha: element.senha
         }
        }
        
    
})

console.log(userValid)

if(usuario.value == userValid.nome && senha.value == userValid.senha){
    
    window.location.href = "index.html";

}
 else{
    alert('Usuario Invalido');
}

 }
