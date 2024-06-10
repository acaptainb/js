


HomeScore = 0
GuestScore = 0

function resetScore() {

    let userCodeElement = document.getElementById('home-score')
    userCodeElement.innerText = HomeScore
    userCodeElement = document.getElementById('guest-score')
    userCodeElement.innerText = GuestScore
    HomeScore = 0
    GuestScore = 0
}


function homePlusOne() {
    HomeScore += 1
    const userCodeElement = document.getElementById('home-score')
    console.log('Home score is ', HomeScore)
    userCodeElement.innerHTML = HomeScore
}

function homePlusThree() {
    HomeScore += 3
    const userCodeElement = document.getElementById('home-score')
    console.log('Home score is ', HomeScore)
    userCodeElement.innerText = HomeScore
}

function guestPlusOne() {
    GuestScore += 1
    const userCodeElement = document.getElementById('guest-score')
    console.log('Guest score is ', GuestScore)
    userCodeElement.innerText = GuestScore
}

function guestPlusThree() {
    GuestScore += 3
    const userCodeElement = document.getElementById('guest-score')
    console.log('Guest score is ', GuestScore)
    userCodeElement.innerText = GuestScore
}
