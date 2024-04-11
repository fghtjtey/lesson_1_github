const darkBtn = document.querySelector(".header_dark_btn")
const lightBtn = document.querySelector(".header_light_btn ")

darkBtn.addEventListener("click",function(){
    document.querySelector("body").classList.add("dark-mode")
    darkBtn.classList.add("hidden")
    lightBtn.classList.remove("hidden")
})
lightBtn.addEventListener("click",function() {
    document.querySelector("body").classList.remove("dark-mode")
    darkBtn.classList.remove("hidden")
    lightBtn.classList.add("hidden")
})