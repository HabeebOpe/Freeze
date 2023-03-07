const body = document.querySelector("body")
const searchClick = document.querySelector("#search-click")
const navClick = document.querySelector("#nav-click")

/*------------NAVIGATION DISPLAY------------*/
navClick.addEventListener("click", ()=>{
  body.classList.toggle("show-nav")
})

/*-----------SEAERCH BAR DISPLAY------------*/
searchClick.addEventListener("click", ()=>{
  body.classList.toggle("show-search")
})

/*----------NAV DISPLAY SCRIPT--------------*/
function scroll(){
   var  scrollValue = window.scrollY;
   const btn = document.querySelector(".btn");
   if(scrollValue < 150){
       body.classList.remove("navdis")
   }
   else{
       body.classList.add("navdis")
   }
}
window.addEventListener("scroll", scroll)


/*------------IMAGE REVIEW SCRIPT-----------*/
const img = document.querySelectorAll("img")
const imgrev = document.querySelector(".img-review-flex")
const ingre = document.querySelector(".img-review-bak")
const mage = document.querySelector(".mage")

img.forEach(image =>{
  image.addEventListener("click", ()=>{
    var cla = image.src
    body.classList.toggle('review-mag');
    body.classList.toggle("stiff")
    mage.src = cla
  })
})

/*--------------MESSAGE OPEN---------------*/
const openMessage = document.querySelectorAll(".message-open")
openMessage.forEach(openMess =>{
  openMess.addEventListener("click", ()=>{
    if(body.classList.contains("open-notification")){
    body.classList.remove("open-notification")
    }
    body.classList.toggle("open-message")
    body.classList.add("change")
  })
})

/*------------NOTIFICATION OPEN-------------*/
const openNotification = document.querySelector(".notification-open")
openNotification.addEventListener("click", ()=>{
  if(body.classList.contains("open-message")){
    body.classList.remove("open-message")
  }
  body.classList.toggle("open-notification")
})

/*------------HOME CLICK FUNCTION-------------*/
const homeClick = document.querySelector(".home-click")
homeClick.addEventListener("click", ()=>{
  if(body.classList.contains("open-message")){
    body.classList.remove("open-message")
  }
  if(body.classList.contains("open-notification")){
    body.classList.remove("open-notification")
   }
})




/*-------------THEME SWITH----------------*/
const themeOpen = document.querySelectorAll(".theme-open")
const themeClose = document.querySelector(".theme-close")
const theme = document.querySelectorAll(".theme")

themeOpen.forEach(themeOpenc =>{
  themeOpenc.addEventListener("click", ()=>{
  body.classList.add("open-theme")
  })
})

themeClose.addEventListener("click", ()=>{
  body.classList.remove("open-theme")
})

theme.forEach(themeBtn =>{
  themeBtn.addEventListener("click", ()=>{
    if(themeBtn.classList.contains("dark")){
      body.classList.remove("dim")
      body.classList.add("dark")
    }
    else if(themeBtn.classList.contains("dim")){
      body.classList.remove("dark")
      body.classList.add("dim")
    }
    else if(themeBtn.classList.contains("light")){
      body.classList.remove("dark")
      body.classList.remove("dim")
    }
  })
})









