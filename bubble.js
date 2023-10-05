
var timer = 60;
var score = 0;
var hitrn ;
function makebubble() {
    var a ="";
for(i=1; i<97; i++){
    var b = Math.floor(Math.random()*10);
   a += `<div class="bubble">${b}</div> `;

}
document.querySelector("#pbtm").innerHTML = a;

}
function runtimer(){
    var timeint = setInterval(function() {
        if(timer>0){
            timer--;
        document.querySelector("#timerval").textContent = timer;

        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over! </h1>`
        }

    }, 1000);
}
function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}  
function scoreinc() {
    score+=10;
    document.querySelector("#scoreval").textContent = score;

}
document.querySelector("#pbtm")
.addEventListener("click",function(details){
var click =  Number(details.target.textContent);
if(click == hitrn){
    scoreinc();
    makebubble();
    getnewhit();
}

});


makebubble();
runtimer();
getnewhit();
scoreinc();