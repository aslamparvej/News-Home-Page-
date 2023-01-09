const hamburgerElement = document.getElementById("hamburger");
const asideElement = document.getElementById("aside");
var openMenu = true;

function menuOpen(){
    if(openMenu){
        hamburgerElement.classList.add("active");
        asideElement.style.right = "0";
        openMenu = false;
    }
    else{
        hamburgerElement.classList.remove("active");
        asideElement.style.right = "-300px";
        openMenu = true;
    }
}