const mainContainer = document.getElementById("main")
const thankyouContainer = document.querySelector(".thankyou-container") 
const submitButton = document.getElementById("btn-submit")
const rateAgain = document.getElementById("btn-reset")

submitButton.addEventListener("click", () => {
    thankyouContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thankyouContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})

const rates = document.querySelectorAll(".btn")
const rating = document.getElementById("rating")

rates.forEach((rates) => {
    rates.addEventListener("click", () => {
    rating.innerHTML = rates.innerHTML
    })
})