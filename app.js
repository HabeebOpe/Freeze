const body = document.querySelector("body")
const searchClick = document.querySelector("#search-click")
const navClick = document.querySelector("#nav-click")

navClick.addEventListener("click", ()=>{
  body.classList.toggle("show-nav")
})

searchClick.addEventListener("click", ()=>{
  body.classList.toggle("show-search")
})