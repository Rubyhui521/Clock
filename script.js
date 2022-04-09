// clock
function timer() {
    let timer
    timer = setTimeout('clock()', 1000)
}

function clock() {
    const d = new Date().toLocaleString()
    document.getElementById('clock').innerHTML = d
    timer()  
}

document.addEventListener('onload', clock())


// APOD
async function getApod() {
    const apod = await fetch('https://api.nasa.gov/planetary/apod?api_key=eASb8Gy01DHbJOfDmEAQrOF1DhlacGjUK0DkZ5Mm')
    const getApod = await apod.json()
    document.body.style.backgroundImage = `url("${getApod.url}")`
}

getApod()


// greeting
const now = new Date()
const noon = new Date (new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 12)
const afternoon = new Date (new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 18)

if (now.getTime() < noon.getTime()) {
    document.querySelector('h1').textContent = 'Good Morning'
}
else if (now.getTime() > afternoon.getTime()){
    document.querySelector('h1').textContent = 'Good Evening'
}
else {
    document.querySelector('h1').textContent = 'Good Afternoon'
}


// more info
function toDays(ms) {
    return Math.floor(ms/ 1000 / 60 / 60 / 24)
}
function toHours(ms) {
    return Math.floor(ms/ 1000 / 60 / 60)
}

const begin = new Date(new Date().getFullYear(), 0, 0)
const end = new Date(new Date().getFullYear(), 11, 30)
const dayOfTheYear  = toDays(now.getTime()) - toDays(begin.getTime()) - 1
const remainHours = toHours(end.getTime()) - toHours(now.getTime()) + 48

document.getElementById('dayOfTheYear').textContent = dayOfTheYear
document.getElementById('remainHours').textContent = remainHours


// toggle settings
document.querySelector('i').addEventListener ('click', function() {
    document.querySelector('form').classList.toggle('show')
})


// toggle more
document.getElementById('button').addEventListener ('click', function() {
    document.getElementById('more').classList.toggle('showMore')
})


// local storage & customize settings
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault()

    if (document.querySelector('form').elements['colorMode'].value === 'Dark Mode') {
        document.querySelector('.settings').style.backgroundColor = 'rgba(2, 62, 115, 0.5)'
        document.querySelector('.settings').style.color = 'aliceblue'
        document.querySelector('.more').style.backgroundColor = 'rgba(2, 62, 115, 0.5)'
        document.querySelector('.more').style.color = 'aliceblue'
        localStorage.setItem('colorMode', 'Dark Mode')
    }
    
    if (document.querySelector('form').elements['colorMode'].value === 'Light Mode') {
        document.querySelector('.settings').style.backgroundColor = '#fff'
        document.querySelector('.settings').style.color = '#000'
        document.querySelector('.more').style.backgroundColor = '#fff'
        document.querySelector('.more').style.color = '#000'
        localStorage.setItem('colorMode', 'Light Mode')
    }

    if (document.querySelector('form').elements['showDate'].value === 'Yes') {
        localStorage.setItem('showDate', 'Yes')
    }
    
    if(document.querySelector('form').elements['showDate'].value === 'No') {
        function timer() {
            let timer
            timer = setTimeout('clock()', 10000)
        }
        
        function clock() {
            const noDate = new Date().toLocaleTimeString()
            document.getElementById('clock').innerHTML = noDate
            timer()  
        }
        
        document.addEventListener('onload', clock())

        localStorage.setItem('showDate', 'no')
    }

})
























