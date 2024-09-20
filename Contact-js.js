
 const firstName = document.getElementById('fname').value;
const lastName = document.getElementById('lname').value;
const email = document.getElementById('email');
const query = document.getElementById('query');
const textarea = document.getElementById('message');
const checkbox= document.getElementById('check');
const error = document.getElementById('error')
const error2 = document.getElementById('error2');
const submit = document.getElementById('Submit')

submit.onclick = function (){

if (firstName.trim() == ""){
    error.innerHTML="This field is required";
    
}
else if(lastName.trim()=="") {
   error2.textContent = "This field is required";
}
else {
    error.innerHTML=="";
}
return false;
}