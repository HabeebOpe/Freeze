const body = document.querySelector("body")
const profileDisplay = document.querySelector(".side-profile")
const profileClose = document.querySelector(".close-profile")
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
const mage = document.querySelector(".mage")

img.forEach(image =>{
  image.addEventListener("click", ()=>{
    
    var cla = image.src
    body.classList.add('review-mag');
    mage.src = cla
    body.classList.add("fix")
    if(image.classList.contains("logoimg")){
      body.classList.remove('review-mag')
      body.classList.remove("fix")
    }
  })
})

const reviewClose = document.querySelector(".img-review-flex")
reviewClose.addEventListener("click", ()=>{
  body.classList.toggle("show-back")
})
const reviewClosebtn = document.querySelector(".review-close")
setInterval(()=>{
  if(body.classList.contains("show-back")){
    body.classList.remove("show-back")
  }
}, 3000)
reviewClosebtn.addEventListener("click", ()=>{
  if(body.classList.contains("fix")){
    body.classList.toggle("fix")
  }
  body.classList.remove("review-mag")
})




/*--------------MESSAGE OPEN---------------*/
const openMessage = document.querySelectorAll(".message-open")
openMessage.forEach(openMess =>{
  openMess.addEventListener("click", ()=>{
    if(body.classList.contains("open-notification")){
    body.classList.remove("open-notification")
    body.classList.remove("fix")
    }
    if(body.classList.contains("open-trend")){
    body.classList.remove("open-trend")
    body.classList.remove("fix")
    }
    
    body.classList.toggle("open-message")
    body.classList.remove("show-nav")
    body.classList.toggle("message-active")
    body.classList.remove("notification-active")
    body.classList.remove("trend-active")
    body.classList.toggle("fix")
  })
})
/*--------------FOR YOU OPEN---------------*/
const openTrending = document.querySelectorAll(".trending-open")
openTrending.forEach(openTrend =>{
  openTrend.addEventListener("click", ()=>{
    if (body.classList.contains("open-notification")) {
      body.classList.remove("open-notification")
      body.classList.remove("fix")
    }
    if (body.classList.contains("open-message")) {
      body.classList.remove("open-message")
      body.classList.remove("fix")
    }
    
    body.classList.toggle("open-trend")
    body.classList.remove("show-nav")
    body.classList.toggle("trend-active")
    body.classList.remove("notification-active")
    body.classList.remove("message-active")
    body.classList.toggle("fix")
  })
})



/*------------NOTIFICATION OPEN-------------*/
const openNotification = document.querySelectorAll(".notification-open")
openNotification.forEach(openNotif =>{
  openNotif.addEventListener("click", ()=>{
  if(body.classList.contains("open-message")){
    body.classList.remove("open-message")
    body.classList.remove("fix")
  }
  if(body.classList.contains("open-trend")){
    body.classList.remove("open-trend")
    body.classList.remove("fix")
  }
  
  body.classList.toggle("open-notification")
  body.classList.remove("show-nav")
  body.classList.toggle("notification-active")
  body.classList.remove("trend-active")
  body.classList.remove("message-active")
  body.classList.toggle("fix")
})

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
   body.classList.remove("show-nav")
   body.classList.remove("message-active")
   body.classList.remove("notification-active")
   body.classList.remove("trend-active")
   body.classList.remove("fix")
})




/*-------------THEME SWITH----------------*/
const themeOpen = document.querySelectorAll(".theme-open")
const themeClose = document.querySelector(".theme-close")
const theme = document.querySelectorAll(".theme")

themeOpen.forEach(themeOpenc =>{
  themeOpenc.addEventListener("click", ()=>{
  body.classList.add("open-theme")
  body.classList.add("fix")
  })
})

themeClose.addEventListener("click", ()=>{
  body.classList.remove("open-theme")
  body.classList.remove("fix")
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


/*const openEditProfile = document.querySelector(".open-edit-profile")
const closeEditProfile = document.querySelector(".edit-close-profile")
*/

const userName = document.getElementById("user-name")
const userBio = document.getElementById("user-bio")
const userLocation = document.getElementById("user-location")
const userInterest = document.getElementById("user-interest")
const userLink = document.getElementById("user-link")
const userContact = document.getElementById("user-contact")

const userNameedit = document.getElementById("userName")
const userBioedit = document.getElementById("userBio")
const userLocationedit = document.getElementById("userLocation")
const userInterestedit = document.getElementById("userInterest")
const userLinkedit = document.getElementById("userLink")








profileDisplay.addEventListener("click", ()=>{
  body.classList.remove("show-nav")
  body.classList.add("fix")
  body.classList.add('profile-display')
})
profileClose.addEventListener("click", ()=>{
  body.classList.remove("fix")
  body.classList.remove('profile-display')
})

const openEdit = document.querySelector("#open-edit")
const editSpace = document.querySelector(".edit-user-profile")

openEdit.addEventListener("click", ()=>{
  body.classList.remove("fix")
  body.classList.remove('profile-display')
  body.classList.add("show-edit")
})
const saveChanges = document.querySelector(".saveEdit")

saveChanges.addEventListener("click", ()=>{
  console.log("money")
  userNameedit.innerHTML = userName.value
  userBioedit.innerHTML = userBio.value
  userLinkedit.href = userLink.value
  userLinkedit.innerHTML = userLink.value
  userInterestedit.innerHTML = userInterest.value
  userLocationedit.innerHTML = userLocation.value
  
  
  body.classList.remove("fix")
  body.classList.add('profile-display')
  body.classList.remove("show-edit")
  
  if(userName.value = null){
    body.classList.add("fix")
    body.classList.remove('profile-display')
    body.classList.add("show-edit")
  }
  
})

/*
openEditProfile.addEventListener("click", ()=>{
  console.log("money")
  body.classList.add("fix")
  body.classList.remove('profile-display')
  body.classList.add('edit-profile-display')
})


const saveChanges = document.querySelector(".saveEdit")

saveChanges.addEventListener("click", ()=>{
  console.log("money")
  
  userNameedit.innerHTML = userName.value
  userBioedit.innerHTML = userBio.value
  userLinkedit.innerHTML = userLink.value
  userInterestedit.innerHTML = userInterest.value
  userLocationedit.innerHTML = userLocation.value
  body.classList.remove("fix")
  body.classList.remove('edit-profile')
})


/*
const openEditProfile = document.querySelector(".open-edit-profile")
const closeEditProfile = document.querySelector(".edit-close-profile")

openEditProfile.addEventListener("click", ()=>{
  console.log("money")
  body.classList.add("fix")
  body.classList.remove('profile-display')
  body.classList.add('edit-profile-display')
})

closeEditProfile.addEventListener("click", ()=>{
  body.classList.remove("fix")
  body.classList.remove('edit-profile-display')
})
*/


/*--------------AUTO RESIZE BIO---------------*/
const textarea = document.querySelector(".bioinput");

textarea.addEventListener("keyup", e=>{
   
   textarea.style.height = "auto";
   
   let height = e.target.scrollHeight;
   
   textarea.style.height = ` ${height}px `;
})
