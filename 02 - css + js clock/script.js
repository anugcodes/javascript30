const sechand = document.querySelector(".second-hand");
const minHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");


function setDate(){
    const now = new Date();
    const seconds = ( now.getSeconds() /60 ) *360;
    const minutes = ( now.getMinutes() /60) *360;
    const hours = (now.getHours() /12) * 360;

    console.log(now.getSeconds(),now.getMinutes(),now.getHours());
    sechand.style.transform = `rotate(${seconds}deg)`;
    minHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;
}
setInterval(setDate,1000);
