const gameEl = ['✂️', '🪨', '📃']
const botEl = document.getElementById('bot')
const startEl = document.getElementById('start')
const paperEl = document.getElementById('paper')
const userEl = document.getElementById('user')
const rockEl = document.getElementById('rock')
const scissorEl = document.getElementById('scissor')
const winnerEl = document.getElementById('winner')
function getRandom() {
    let randomIndex = Math.floor(Math.random() * 3)
    botEl.textContent = gameEl[randomIndex]
    // console.log(gameEl[randomIndex])
    // botEl.textContent = '🪨'
}
function initailly() {
    userEl.textContent = "😑"
    botEl.textContent = "😑"
}
initailly()
startEl.addEventListener('click', function () {
    getRandom()
    result()
})
paperEl.addEventListener('click', function () {
    userEl.textContent = '📃'
})
rockEl.addEventListener('click', function () {
    userEl.textContent = '🪨'
})
scissorEl.addEventListener('click', function () {
    userEl.textContent = '✂️'
})
function result() {
    if ((botEl.textContent == '🪨' && userEl.textContent == '🪨') || (botEl.textContent == '📃' && userEl.textContent == '📃') || (botEl.textContent == '✂️' && userEl.textContent == '✂️')) {
        winnerEl.textContent = "Ooops!!! It's Draw 😐😐"
    }
    else if ((botEl.textContent == '🪨' && userEl.textContent == '📃') || (botEl.textContent == '📃' && userEl.textContent == '✂️') || (botEl.textContent == '✂️' && userEl.textContent == '🪨')) {
        winnerEl.textContent = "Hurrayyy !!! You're Winner 🤩🥳🥳'"
    } else if ((botEl.textContent == '✂️' && userEl.textContent == '📃') || (botEl.textContent == '🪨' && userEl.textContent == '✂️') || (botEl.textContent == '📃' && userEl.textContent == '🪨')) {
        winnerEl.textContent = "Hahaha !! You Lost 😂😂"
    }
}
// getRandom()