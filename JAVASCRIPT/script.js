//Typewriter effect
const textElement = document.getElementsByClassName("typewriter")[0];
console.log(textElement);
const fullText = "Hello!, I am Anup, a Full Stack web developer and student of B.Sc CSIT";

let index = 0;
const typingSpeed = 50;
const pauseTime = 2000;
function typewriter() {
    if (index < fullText.length) {
        textElement.innerHTML = fullText.substring(0, index + 1); //- takes the string from the beginning (0) up to the character at position index + 1
        index++;
        setTimeout(typewriter, typingSpeed); //schadule the typewriter function every typingspeed
    }
    else {
        // when finished, wait and restart
        setTimeout(() => {
            index = 0;
            textElement.innerHTML = ""; // clear text before restarting
            typewriter();
        }, pauseTime);
    }
}
typewriter();

//To show progress bar
let value = [80,70,65,60,50,80,90,70,95] // target percentage
let progressBar = document.querySelectorAll('.prg-value');
let perValue = document.querySelectorAll('.percentage')

console.log(perValue)
// console.log(perValue.lastElementChild)
console.log(progressBar)
//For HTML
value.forEach((target,index)=>{
    let current = 0;
let interval = setInterval(() => {
    //For HTML
    if (current >= target) {
        clearInterval(interval);
    } else {
        current++;
        progressBar[index].style.width = current + "%";
        perValue[index].lastElementChild.innerHTML=`${current}%`
    }
    
}, 20); // speed (ms)
})