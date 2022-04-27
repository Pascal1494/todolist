const createImg = document.querySelector(".spider");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    createImg.classList.add("active");
  } else {
    createImg.classList.remove("active");
    
  } 
});
