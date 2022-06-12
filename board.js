const homeScoreBtnOne = document.getElementById("home-score-btn1")
const homeScoreCount = document.getElementById("home-score")
const homeSoreBtnTwo = document.getElementById("home-score-btn2")
const homeScoreBtnThree = document.getElementById("home-score-btn3")
let homeScore = 0;

const guestScoreBtnOne = document.getElementById("guest-score-btn1")
const guestScoreCount = document.getElementById("guest-score")
const guestScoreBtnTwo = document.getElementById("guest-score-btn2")
const guestScoreBtnThree = document.getElementById("guest-score-btn3")
let guestScore = 0;

homeScoreBtnOne.addEventListener("click", function() {
    homeScore += 1
    homeScoreCount.textContent = homeScore
})
homeSoreBtnTwo.addEventListener("click", function() {
    homeScore += 2
    homeScoreCount.textContent = homeScore
})
homeScoreBtnThree.addEventListener("click", function() {
    homeScore += 3
    homeScoreCount.textContent = homeScore
})

guestScoreBtnOne.addEventListener("click", function() {
    guestScore += 1
    guestScoreCount.textContent = guestScore
})
guestScoreBtnTwo.addEventListener("click", function() {
    guestScore += 2
    guestScoreCount.textContent = guestScore
})
guestScoreBtnThree.addEventListener("click", function() {
    guestScore += 3
    guestScoreCount.textContent = guestScore
})