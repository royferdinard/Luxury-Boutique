function displaylaguagelist(){
    document.querySelector(".mylaguages-container").classList.toggle("show");

    if(document.querySelector(".mylaguages-container").classList.contains("show")){
        document.querySelector(".language").innerHTML = '<i class="fas fa-times"></i>';
          document.querySelector(".language").style.backgroundColor = "white";
    } else{
          document.querySelector(".language").innerHTML = '<i class="fas fa-globe"></i>';
           document.querySelector(".language").style.backgroundColor = "antiquewhite";
    }
}
document.querySelector(".language").addEventListener("click", displaylaguagelist);


function displaylink(){
    document.querySelector(".sublinks").classList.toggle("show");

    if(document.querySelector(".sublinks").classList.contains("show")){
        document.querySelector(".link-button").innerHTML = '<i class="fas fa-times"></i>';
          document.querySelector(".link-button").style.backgroundColor = "darkgreen";
    } else{
          document.querySelector(".link-button").innerHTML = '<i class="fas fa-bars"></i>';
           document.querySelector(".link-button").style.backgroundColor = "darkgreen";
    }
}
document.querySelector(".link-button").addEventListener("click", displaylink);




function addtocart(){
    document.querySelector(".add-button").textContent="Added";
}
 document.querySelector(".add-button").addEventListener("click", addtocart);