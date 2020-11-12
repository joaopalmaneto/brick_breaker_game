const pad = document.querySelector('#game .area:nth-child(1) div');
const area = document.querySelector('#game');

window.addEventListener('keydown', moverPad);

function moverPad(event){
    if(event.key === "ArrowUp"){
        event.preventDefault();
        moveUp();   
    } else if(event.key === "ArrowDown"){
        event.preventDefault();
        moveDown();
    } else if(event.key === "SpaceBar") {

    }
}

function moveUp(){
    let topPos = getComputedStyle(pad).getPropertyValue("top");
    if(topPos === "0px"){
        return
    } else {
        topPos = parseInt(topPos);
        topPos -= 10;
        pad.style.top = `${topPos}px`;
    }
}

function moveDown(){
    let topPos = getComputedStyle(pad).getPropertyValue("top");
    if(topPos === "360px"){
        return
    } else {
        topPos = parseInt(topPos);
        topPos += 10;
        pad.style.top = `${topPos}px`;
    }
}

function ballController(){
    ball = createBall();
    area.appendChild(ball);
    moveBall(ball);
}

function createBall(){
    let xPos = parseInt(getComputedStyle(pad).getPropertyValue("left"));
    let yPos = parseInt(getComputedStyle(pad).getPropertyValue("top"));
    let ball = document.createElement("div");

    ball.classList.add("ball");
    ball.style.top = `${yPos - 20}px`;
    ball.style.left = `${xPos}px`;

    return ball;
}

function moveBall(ball){
    let posSetter = setInterval(() => {
        let yPos = getComputedStyle(ball).getPropertyValue("top");
        let xPos = getComputedStyle(ball).getPropertyValue("left");
    }
    , 10)
}