function checkForm(){
    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let email = document.getElementById('email')
    let phonenumber = document.getElementById('phonenumber')
    let natureofinquiry = document.getElementById('natureofinquiry')
    let message = document.getElementById('message')

    if(firstname.value == ""){
        document.getElementById('errorlbl').innerHTML = "First name must not be empty!!!"
    }
    else if(lastname.value == ""){
        document.getElementById('errorlbl').innerHTML = "Last name must not be empty!!!"
    }
    else if(email.value == ""){
        document.getElementById('errorlbl').innerHTML = "Email must not be empty!!!"
    }
    else if(!email.value.endsWith('@gmail.com')){
        document.getElementById('errorlbl').innerHTML = "Email must end with '@gmail.com'!!!"
    }
    else if(phonenumber.value == ""){
        document.getElementById('errorlbl').innerHTML = "Phone number must not be empty!!!"
    }
    else if(isNaN(phonenumber.value)){
        document.getElementById('errorlbl').innerHTML = "Phone number must be numbers!!!"
    }
    else if(natureofinquiry.value == "select"){
        document.getElementById('errorlbl').innerHTML = "Select the nature of inquiry!!!"       
    }
    else if(message.value == ""){
        document.getElementById('errorlbl').innerHTML = "Message must not be empty!!!"
    }
    else if(message.value.length < 10){
        document.getElementById('errorlbl').innerHTML = "Message is too short!!!"
    }
    else{
        alert('Your message has been sent!\nThank you for contacting us!')

        return true;
    }
    
    return false;
}