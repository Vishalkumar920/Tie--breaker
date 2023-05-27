function start(){ var x1=Math.floor(Math.random()*6+1);
var x2=Math.floor(Math.random()*6+1);
var sorc1="";
var sorc2="";
for(var i=1;i<7;i++){
if(x1==i){
    sorc1="images/dice"+i+".png"
}
if(x2==i){
    sorc2="images/dice"+i+".png"
}
}
document.querySelector('.img1').setAttribute("src",sorc1)
document.querySelector('.img2').setAttribute("src",sorc2)
if(x1>x2){
    document.querySelector("h1").textContent="Player 1 wins"
}else if(x2>x1){
    document.querySelector("h1").textContent="Player 2 wins"
}else{
    // document.querySelector("h1").textContent="Tie"
    start()
}
return
}