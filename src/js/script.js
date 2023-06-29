var nome= document.getElementById("email");

function validar() {

    if(email.value == "") {
        alert ("Please enter a valid email adress");
        document.getElementById('validate').style.display='block';
        email.focus();
    } else {
        mensagem.style.display = 'none';
    }
}