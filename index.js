//document.querySelector("h1").innerHTML="Player 2 Won";
var r1=Math.floor((Math.random()*6)+1);
var ranimg1="./imgs/dice"+ r1 +".png";
document.querySelector(".dice1 img").setAttribute("src",ranimg1);

var r2=Math.floor((Math.random()*6)+1);
var ranimg2="./imgs/dice"+ r2 +".png";
document.querySelector(".dice2 img").setAttribute("src",ranimg2);


/*if (r1===1){
    document.querySelector(".dice1 img").setAttribute("src","./imgs/dice1.png");
}
else if (r1===2){
    document.querySelector(".dice1 img").setAttribute("src","./imgs/dice2.png");
}
else if (r1===3){
    document.querySelector(".dice1 img").setAttribute("src","./imgs/dice3.png");
}
else if (r1===4){
    document.querySelector(".dice1 img").setAttribute("src","./imgs/dice4.png");
}
else if (r1===5){
    document.querySelector(".dice1 img").setAttribute("src","./imgs/dice5.png");
}
else{
    document.querySelector(".dice1 img").setAttribute("src","./imgs/dice6.png");
}


var r2=Math.floor((Math.random()*6)+1);
if (r2===1){
    document.querySelector(".dice2 img").setAttribute("src","./imgs/dice1.png");
}
else if (r2===2){
    document.querySelector(".dice2 img").setAttribute("src","./imgs/dice2.png");
}
else if (r2===3){
    document.querySelector(".dice2 img").setAttribute("src","./imgs/dice3.png");
}
else if (r2===4){
    document.querySelector(".dice2 img").setAttribute("src","./imgs/dice4.png");
}
else if (r2===5){
    document.querySelector(".dice2 img").setAttribute("src","./imgs/dice5.png");
}
else{
    document.querySelector(".dice2 img").setAttribute("src","./imgs/dice6.png");
}*/



if(r1>r2){document.querySelector("h1").innerHTML="🏆 Player 1 Won";}
else if(r2>r1){document.querySelector("h1").innerHTML="Player 2 Won 🏆";}
else{document.querySelector("h1").innerHTML="🤝 Draw! 🤝";}
