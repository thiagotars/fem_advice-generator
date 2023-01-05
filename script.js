const API_LINK = "https://api.adviceslip.com/advice"

const button = document.getElementById('button')
const quote = document.getElementById('advice-quote')
const adviceId = document.getElementById('advice-number')


// USING ASYNC -> AWAIT

const fetchNewAdvice = async () => {
    let response = await fetch(API_LINK, {cache: "no-store"})
    let data = await response.json()
    renderAdvice(data)
}

const renderAdvice = (advice) => {
    adviceId.textContent = `advice # ${advice.slip.id}`
    quote.textContent = `"${advice.slip.advice}"`
}

button.addEventListener('click', () => {
    fetchNewAdvice()
})



// USING FETCH -> THEN

// button.addEventListener('click', () => {
//     fetch(API_LINK, {cache: "no-store"})
//     .then(response => response.json())
//     .then(data => {
//         quote.textContent = `"${data.slip.advice}"`
//         adviceId.textContent = `advice # ${data.slip.id}`
//     })
// })


