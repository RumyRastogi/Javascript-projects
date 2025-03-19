const allbutton = document.querySelectorAll(".button");
const body = document.querySelector("body");

allbutton.forEach(function(button) {
    button.addEventListener("click",function(event){
        if(event.target.id === "grey"){
            body.style.backgroundColor = "grey";
        }
        else if(event.target.id === "blue"){    
            body.style.backgroundColor = "blue";
        }   
        else if(event.target.id === "yellow"){
            body.style.backgroundColor = "yellow";
        }   
        else if(event.target.id === "white"){
            body.style.backgroundColor = "white";
        }   
                
    })

});
