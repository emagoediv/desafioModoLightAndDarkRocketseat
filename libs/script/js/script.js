const ball = document.getElementById('ball')
const divBall = document.getElementById('divBall')
const body = document.getElementById('body')
let left = true
ball.addEventListener('click', () => {
    if(left == true){
    divBall.classList.add("ball-right")
    body.style.backgroundColor = "#444"
    left = false
    }else if(left == false){
        divBall.classList.remove("ball-right")
        body.style.backgroundColor = "#eee"
        left = true
    }
})