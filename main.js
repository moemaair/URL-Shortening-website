const img= document.querySelector('.hero-img');
const menu= document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger').addEventListener('click', ()=>{
 if (img.style.display === "block"){
    img.style.display="none";
 }else {
  img.style.display = "block";
}
  

  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
})
