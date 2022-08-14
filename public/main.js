// récupération du dom
const menuHamDom = document.getElementById("burgerMenu");
const menuMainDom = document.getElementById("menuMain");

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