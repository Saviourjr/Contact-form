
function contactName (){
  const Name =   document.getElementById('p-name');
  Name.innerHTML = "";
  let x = document.getElementById('firstName').value;

  const LName = document.getElementById('p-name2')
LName.innerHTML = "";
  let y = document.getElementById('lastName').value;

  const EName = document.getElementById('e-name')
  EName.innerHTML ="";
  let z = document.getElementById('email-').value;

 const Check = document.getElementById("check");
 Check.innerHTML = "";
 let c = document.getElementById("agree").value

  const Message = document.getElementById("message" )
  const Msgerr = document.getElementById("msgerr" )
  Message.innerHTML="";
  let M = document.getElementById('messg').value;

  try{
if (x.trim()=="") throw "is required";
if (y.trim()=="") throw "is required";
if (z.trim()=="");
if (M.trim()=="") throw "is required";
if (c.trim()=="");
  }


  catch(err){
    Name.innerHTML = "This field " + err;
    LName.innerHTML = "This field " + err;
    EName.innerHTML = "Please enter a valid email address" ; 
  Msgerr.innerHTML = "This field " + err;
  Check.innerHTML= "To submit this form please consent to being contacted";
  }
} 

