const profileScroll = document.querySelector(".user-profile-sec")

profileScroll.addEventListener("click", ()=>{
  body.classList.toggle("show-back")
})

setInterval(()=>{
  if(body.classList.contains("show-back")){
    body.classList.remove("show-back")
  }
}, 3000)
