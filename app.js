const body = document.querySelector("body")
const searchClick = document.querySelectorAll("#search-click")
const navClick = document.querySelector("#nav-click")

/*------------NAVIGATION DISPLAY------------*/
navClick.addEventListener("click", ()=>{
  body.classList.toggle("show-nav")
})

/*-----------SEAERCH BAR DISPLAY------------*/
searchClick.forEach(searchClicki =>{
  searchClicki.addEventListener("click", ()=>{
    body.classList.toggle("show-search")
  })
})

/*----------NAV DISPLAY SCRIPT--------------*/


function scroll(){
   var  scrollValue = window.scrollY;
   
   if(scrollValue--){
     body.classList.remove("show-nav")
     body.classList.remove("retweetpop")
   }
   if(scrollValue++){
     body.classList.remove("show-nav")
     body.classList.remove("retweetpop")
   }
   const btn = document.querySelector(".btn");
   if(scrollValue < 150){
       body.classList.remove("navdis")
   }
   else{
       body.classList.add("navdis")
   }
   if(scrollValue > 150){
     body.classList.add("shad")
   }
   else{
     body.classList.remove("shad")
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
    if(image.classList.contains("logoimg")){
      body.classList.remove('review-mag');
      body.classList.remove("stiff")
    }
  })
})

/*--------------MESSAGE OPEN---------------*/
const openMessage = document.querySelectorAll(".message-open")
openMessage.forEach(openMess =>{
  openMess.addEventListener("click", ()=>{
    if(body.classList.contains("open-notification")){
    body.classList.remove("open-notification")
    }
    if(body.classList.contains("open-trend")){
    body.classList.remove("open-trend")
    }
    body.classList.toggle("open-message")
    body.classList.add("change")
  })
})
/*--------------FOR YOU OPEN---------------*/
const openTrending = document.querySelectorAll(".trending-open")
openTrending.forEach(openTrend =>{
  openTrend.addEventListener("click", ()=>{
    if (body.classList.contains("open-notification")) {
      body.classList.remove("open-notification")
    }
    if (body.classList.contains("openMessage")) {
      body.classList.remove("openMessage")
    }
    body.classList.toggle("open-trend")
  })
})



/*------------NOTIFICATION OPEN-------------*/
const openNotification = document.querySelector(".notification-open")
openNotification.addEventListener("click", ()=>{
  if(body.classList.contains("open-message")){
    body.classList.remove("open-message")
  }
  if(body.classList.contains("open-trend")){
    body.classList.remove("open-trend")
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
   if(body.classList.contains("open-trend")){
    body.classList.remove("open-trend")
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


/*-------------SCROLL TO REMOVE THE SIDENAV----------------*/

const redi = document.querySelectorAll(".love");
const medi = document.querySelectorAll(".message");
const retwi = document.querySelectorAll(".retweet");
const shari = document.querySelectorAll(".share");

const rered = document.querySelectorAll(".fa-heart")
const reblue = document.querySelectorAll(".fa-message")
const regreen = document.querySelectorAll(".fa-retweet")
const repurple = document.querySelectorAll(".fa-share")



redi.forEach(redid =>{
  redid.addEventListener("click", (e)=>{
    e.target.classList.toggle("red")
    rered.forEach(reredi =>{
      reredi.classList.remove("red")
    })
    if(e.target.classList.contains("red")){
      e.target.classList.toggle("resize")
    }
    else{
      e.target.classList.remove("resize")
    }

  })
})
medi.forEach(medid =>{
  medid.addEventListener("click", (e)=>{
    e.target.classList.toggle("blue")
    reblue.forEach(rebluei =>{
      rebluei.classList.remove("blue")
    })
    if(e.target.classList.contains("blue")){
      e.target.classList.toggle("resize")
    }
    else{
      e.target.classList.remove("resize")
    }
  })
})

const retweetclick = document.querySelectorAll(".retweetclick")

retwi.forEach(retwid =>{
  retwid.addEventListener("click", (e)=>{
    e.target.classList.toggle("retclicked")
    
    regreen.forEach(regreeni =>{
      regreeni.classList.remove("green")
   
    /*--------------RETWEET POPUP BOX ---------------*/
    body.classList.toggle("retweetpop")
    regreeni.classList.remove("green")
    
    
    retweetclick.forEach(retweetclicki => {
      retweetclicki.addEventListener("click", () => {
        regreeni.classList.remove("green")
        e.target.classList.add("green")
      })
    })
    regreeni.classList.remove("green")
    if (e.target.classList.contains("green"))
    {
      regreeni.classList.remove("green")
      body.classList.remove("retweetpop")
      e.target.classList.remove("green")
    }
    else {
      regreeni.classList.remove("green")
      body.classList.add("retweetpop")
      e.target.classList.add("green")
    }
    
    regreeni.classList.remove("green")
    
    })
    if (e.target.classList.contains("retclicked")) {
      regreeni.classList.remove("green")
      if (e.target.classList.contains("green")) {
        e.target.classList.toggle("resize")
      }
      else {
        regreeni.classList.remove("green")
        e.target.classList.remove("resize")
      }
    }
    
    
    
  })
})
shari.forEach(sharid =>{
  sharid.addEventListener("click", (e)=>{
    e.target.classList.toggle("purple")
    repurple.forEach(reshari =>{
      reshari.classList.remove("purple")
    })
    if(e.target.classList.contains("purple")){
      e.target.classList.toggle("resize")
    }
    else{
      e.target.classList.remove("resize")
    }
  })
})




