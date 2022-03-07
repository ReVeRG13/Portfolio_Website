function objForIn(){
    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;
    let phoneValue = document.getElementById("phone").value;
    let subjectValue = document.getElementById("subject").value;
    let messageValue = document.getElementById("message").value;
    let sendValue = document.getElementById("send").value;
    var obj = {name: nameValue, email: emailValue, phone: phoneValue, subject: subjectValue, message: messageValue, send: sendValue };
    for(key in obj){
        let value = obj[key];
        document.getElementById("contact").innerHTML += key + ' : ' + value + '<br>';
    }
}
