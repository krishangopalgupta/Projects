const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click",()=>{
    // console.log(hamburger.classList.toggle);
    // console.log(navItems.classList.toggle)
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
})

const navItem = document.querySelectorAll(".nav-item");
navItem.forEach((element)=>{
    element.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navItems.classList.remove("active");
    })
})