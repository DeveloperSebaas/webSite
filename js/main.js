 
const d = document,
  $containerMenu = d.querySelector(".menu"),
  $btnMenu = d.querySelector(".btn-menu"),
  $menu = d.querySelector(".list-container");

let activador = true;

// Menu de navegación 
$btnMenu.addEventListener("click", e => {
  d.querySelector(".btn-menu  i").classList.toggle("fa-times-circle");

  if (activador) {
    $menu.style.left = "0";
    $menu.style.transition = "0.5s ease-in-out";
    activador = false;
  } else {
    $menu.style.left = "-100%";
    $menu.style.transition = "0.5s ease-in-out";
    activador = true;
  }
});
 

// Intercalar clase "activo"
let enlaces = d.querySelectorAll(".lists li a");

enlaces.forEach((el) => {
  el.addEventListener("click", e => {
    enlaces.forEach((link) => {
      link.classList.remove("activo");
    });
    e.target.classList.add("activo");
  });
});


// Efectos Scroll
let prevScrollPos = window.pageYOffset;
const goUp = document.querySelector(".go-up");

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  //  console.log(`prevScrollPos: ${prevScrollPos} - currentScrollPos: ${currentScrollPos}`);

  //Mostrar y ocultar 
  if (prevScrollPos > currentScrollPos) {
    $containerMenu.style.top = "0";
    $containerMenu.style.transition = "0.5s ease";
  } else {
    $containerMenu.style.top = "-60px";
    $containerMenu.style.transition = "0.5s ease";
  }
  prevScrollPos = currentScrollPos;


  let arriba = window.pageYOffset;
  // console.log(`Arriba ${arriba}`);
  
  // Mostrar arriba
    if (arriba <= 600) {
      $containerMenu.style.borderBottom= "none";
      goUp.style.right = "-4rem";
    } else {
      $containerMenu.style.borderBottom = "2px solid #ff2e63";
      goUp.style.right = "1rem";
      goUp.style.transition = "0.5s ease";
    }
}

goUp.addEventListener("click", e => {
  // Navegador Safari
  d.body.scrollTop = 0;
  // Otros
  d.documentElement.scrollTop = 0;
});

const verAbajo = d.getElementById("abajo");

verAbajo.addEventListener("click", e => {
  // Navegador Safari
  d.body.scrollTop = 700;
  // Otros
  d.documentElement.scrollTop = 700;
});

