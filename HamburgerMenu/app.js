const hamburger = document.querySelector(".hamburger-menu");
const menuItem = document.querySelector(".menu-item");

console.log(hamburger);
console.log(menuItem);

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    menuItem.classList.toggle("active");
})

document.querySelectorAll("li").forEach(n => n.addEventListener('click',()=>{
    hamburger.classList.remove("active");
    menuItem.classList.remove("active");
}))

menuItem.addEventListener('click',()=>{
    menuItem.classList.remove("active");
})