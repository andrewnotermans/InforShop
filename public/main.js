// récupération du dom
const menuHamDom = document.getElementById("menu-btn");
const menuMainDom = document.getElementsByClassName("nav-header-desktop-menu");

// ajout/suppression class au click
if(menuHamDom !== null && menuMainDom !== null)
{
    menuHamDom.addEventListener('click', function(){
        menuMainDom.classList.toggle("is-active");
    });
}
else
{
    console.log("Regarde tes ID!!");
}