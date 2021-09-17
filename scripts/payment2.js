if(JSON.parse(localStorage.getItem('buy1'))===null){
    localStorage.setItem('buy1',JSON.stringify([]));
}

function fun(e1) {

var x=document.getElementById('a').innerHTML;
 var y=JSON.parse(localStorage.getItem('buy1'));
 if(!(y.includes(x))){
     y.push(x);
    
     localStorage.setItem('buy1',JSON.stringify(y));
 }





e1.preventDefault();
    var d=document.getElementById("nam").value;
    var n=document.getElementById("nam1").value;
   
    if(n==""){
        var n1=document.getElementById("nan");
       
        n1.innerText="Enter valid name";
        n1.style.color="red";
        n1.style.fontFamily="san-serif"
        return false;
      
    }
    else if(d.length<16 || d.length>16){
        var n1=document.getElementById("nan");
        n1.innerText="";
        var msg=document.getElementById("err");
        msg.innerText="Enter valid card details";
        msg.style.color="red"
        msg.style.fontFamily="san-serif"
        return false;
    }else{
       
        var msg=document.getElementById("err");
        msg.innerText="";
        



        document.querySelector("#funbtn")
        .addEventListener('click', () => {
            window.location.href="main.html"
        alert("Payment Successful")
    })
    return true;
    }



}


/*document.querySelector("#funbtn")
    .addEventListener('click', () => {
        alert("Payment Successful")
    })*/