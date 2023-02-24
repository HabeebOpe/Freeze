const body = document.querySelector("body")
const searchClick = document.querySelector("#search-click")
const navClick = document.querySelector("#nav-click")

navClick.addEventListener("click", ()=>{
  body.classList.toggle("show-nav")
})

searchClick.addEventListener("click", ()=>{
  body.classList.toggle("show-search")
})


function scroll(){
  
   var  scrollValue = window.scrollY;
   
   const btn = document.querySelector(".btn");
   if(scrollValue < 150){
       body.classList.remove("navdis")
   }else{
       body.classList.add("navdis")
   }
    
}
window.addEventListener("scroll", scroll)
