function randomNumber(){ 
    let a=Math.floor((Math.random()*6)+1);
    return a;
}
let randomNumber1=randomNumber();
let randomNumber2=randomNumber();
let images=[
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];
document.querySelector(".img1").setAttribute("src",images[randomNumber1-1]);
document.querySelector(".img2").setAttribute("src",images[randomNumber2-1]);
if(randomNumber1>randomNumber2){ 
    document.querySelector("h1").textContent="player1 won";
}else if(randomNumber2>randomNumber1){ 
    document.querySelector("h1").textContent="player 2 won";
}
else{ 
    document.querySelector("h1").textContent="Tie";
}



