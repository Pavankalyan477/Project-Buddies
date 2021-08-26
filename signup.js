let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", function () {
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");

    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
  });
}
let userData = [];

//let value=userData;
localStorage.setItem("value", JSON.stringify([]));
if (localStorage.getItem("userData") === null) {
  localStorage.setItem("userData", JSON.stringify([]));
}

function data(e) {
  e.preventDefault();
  let inputs = {

    userfirst: document.getElementById("first").value,
    userlast: document.getElementById("last").value,
    useremail: document.getElementById("mail").value,
    userPassword: document.getElementById("pswd").value,
  }


  if (getData(inputs, userData)) {
    userData.push(inputs);
    console.log(userData)
    document.getElementById("signedup").innerText = "Congratulations! Account created"
    document.getElementById("signedup").style.color = "green"


    const input_json = JSON.stringify(userData);
    localStorage.setItem("userData", input_json);
    //  setTimeout(
    //  function () {
    //    window.location.href = "facebook.html"
    // }, 3000);


  }
}
let continues = document.getElementById("continue")

continues.addEventListener("click", data);

var emailkey = [];

function getData(inputs, userData) {

  let checker = localStorage.getItem("userData");


  checker = JSON.parse(checker)
  for (key in checker) {
    emailkey.push(checker[key].userfirst)
  }
  var validEmail = inputs.useremail.trim()
  var validPassword = inputs.userPassword.trim()
  var validfirst = inputs.userName
  var validlast = inputs.userphone
  if (validEmail == "") {
    var mess2=document.getElementById("mess2");
    mess2.innerText ="Please enter your email";
    mess2.style.color="red";
    return false;
  } else if (validPassword == "") {

    var mess3=document.getElementById("mess3");
    mess3.innerText ="Please enter your password";
    mess3.style.color="red";
    
   // alert("Please enter a valid password!")
    return false;

  } else if (validfirst == "") {
    var mess=document.getElementById("mess");
    mess.innerText ="Please enter your First name";
    mess.style.color="red";
    

   //alert("Please enter a valid firstName!")
    return false;

  } else if (validlast == "") {
    var mess1=document.getElementById("mess1");
    mess1.innerText ="Please enter your last name";
    mess1.style.color="red";
    

    //alert("Please enter a valid last name!")
    return false;

  } else if (emailkey.indexOf(inputs.userfirst) != -1) {
    document.getElementById("signedup").innerText = "user-id already exists!!"
    document.getElementById("signedup").style.color = "red"
    return false;
  } else {
    var mess2=document.getElementById("mess2");
    mess2.innerText="";
    var mess3=document.getElementById("mess3");
    mess3.innerText="";
    var mess=document.getElementById("mess");
    mess.innerText="";
    var mess1=document.getElementById("mess1");
    mess1.innerText="";
    return true;
  }
}


var emailkey = [];
var passkey = [];
function fom(e1) {
  e1.preventDefault();


  var login = {
    useremail: document.getElementById("email").value,
    userPassword: document.getElementById("pass").value,
  }

  var checker = JSON.parse(localStorage.getItem("userData"));
  console.log(userData)

  for (key in checker) {
    emailkey.push(checker[key].useremail)
  }

  console.log(emailkey)
  for (key in checker) {
    passkey.push(checker[key].userPassword)
  }
  console.log(passkey)
  console.log(login)

  if (login.useremail == "") {
    alert("Please enter valid email")

  } else if (login.userPassword == "") {

    alert("Please enter a valid password!")


  } else if (emailkey.indexOf(login.useremail) != -1) {
    if (passkey.indexOf(login.userPassword) != -1) {
      document.getElementById("signedin").innerText = "Successfully signed in"
      document.getElementById("signedin").style.color = "green"
      setTimeout(function () {
        window.location.href = "mail.html"
      }, 3000);
    } else {
      document.getElementById("signedin").innerText = "Invalid creditials"
      document.getElementById("signedin").style.color = "red"


    }
  }

}