var name2=document.getElementById('name-error');
var phone=document.getElementById('phone-error');
var email=document.getElementById('email-error');
var submit=document.getElementById('submit-error');
var messenger=document.getElementById('message-error');


function validatename(){
    var namer=document.getElementById('contact-name').value;

    if(namer.length==0){
        name2.innerHTML='Name is required';
        return false;
    }

    if(!namer.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name2.innerHTML='Write full name';
        return false
    }
    name2.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatenumber(){
    var num=document.getElementById('number').value;

    if(num.length===0){
        phone.innerHTML='Enter valid Phone number';
        return false;
    }

    if(num.length!==10){
        phone.innerHTML='Phone no should be 10 digits!';
        return false;
    }

    if(!num.match(/^[0-9]{10}$/)){
        phone.innerHTML='Only digits please';
        return false;
    }

        phone.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
   
}

function validateemail(){
    var mail=document.getElementById('email').value;

    if(mail.length==0){
        email.innerHTML='Email is required';
        return false;
    }

    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.innerHTML='Invalid Email';
        return false;
    }

    email.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatemessage(){
    var mess=document.getElementById('message').value;
    var required=30;
    var left=required-mess.length;

    if(left>0){
        messenger.innerHTML=left+ ' more characters required';
        return false;
    }

    messenger.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

const popup = document.querySelector('.popup');

function openpopup() {    
    popup.classList.add('openpopup');   
}

function closepopup() {
    popup.classList.remove('openpopup');   
}

function validateform(event) {
    // Prevent form submission to allow JavaScript to control the behavior
    event.preventDefault();

    if (!validatename() || !validateemail() || !validatenumber() || !validatemessage()) {
        submit.style.display = 'block';
        submit.innerHTML = 'Please fix error to submit';
        setTimeout(function () { submit.style.display = 'none'; }, 3000);
        return false;
    }

    // If form is valid, open the popup
    openpopup();
    return false;
}


