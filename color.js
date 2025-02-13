const body = document.querySelector("body")
const buttons = document.querySelectorAll(".btn")
const homebtn = document.querySelector(".home-btn")

buttons.forEach( btn => {
    btn.addEventListener('click', function (e) {
        if (e.target.id === "red") {
           body.style.backgroundColor = e.target.id 
        }
        else if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id 
         }
         else if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id 
         }
         else if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id 
         }
    })
})

homebtn.addEventListener('click', function(c) {
    body.style.backgroundColor = "#2c2829"
})