const subscribe = document.querySelector("#btn");
const message =  document.querySelector("#message");
const msg = document.querySelector("#msg")
const email = document.querySelector("#eminp");

subscribe.addEventListener('click', subscribeMsg);

function subscribeMsg() {
    let content = msg.value;
    let emcont = email.value;


   
    if(emcont==="" && content==="") {
        alert("Enter Your details");
    }

    else if(emcont==="") {
        alert("Enter Your E-Mail");
        msg.value = "";             
    }



    else if(content===""){
        alert("Enter Your Name");
        email.value = ""; 
    }

    
    else if(!email.value.includes("@")){
        alert(`"@" missing in E-Mail`);
        email.value = "";
        msg.value = ""; 
    
    }
    else {
        message.innerHTML = "Thanks For Subscribing :)";
        msg.value = "";
        email.value = "";
        message.style.animation = "fade 2s ease"

    }    
    
}

function disappear() {
    
}
