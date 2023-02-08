// const ctx = new AudioContext();
const one = document.querySelector(".one")
const two = document.querySelector(".two")


const text = "He who fights with monsters should look to it that he himself does not become a monster."
const textTwo = "Be careful, lest in casting out your demon you exorcise the best thing in you."

console.log(text)
console.log(textTwo)

function randWord (text) {
    const words = text.split(' ')
    return words[Math.floor(Math.random()*words.length)];
}

one.addEventListener('click', playOne)
two.addEventListener('click', playTwo)

function getRndInteger(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 5) * 5;
  }

function playOne () {
    const size = getRndInteger(100, 500)
    // const osc = ctx.createOscillator();
    // const gainNode = ctx.createGain();
    // osc.connect(gainNode);
    // osc.frequency.setValueAtTime(size * 2, ctx.currentTime);
    // gainNode.gain.setTargetAtTime(0, ctx.currentTime, .02);

    // osc.type = "triangle";
    // gainNode.gain.value = 0.5;
    // gainNode.connect(ctx.destination);
    // osc.start();
    
    // setTimeout(() => osc.stop(),100); 
    one.style.height = `${size}px`
    one.style.width = `${size /2}px`
    one.innerText = `${randWord(text)}`
}
function playTwo () {
    const size = getRndInteger(100, 500)
    // const osc = ctx.createOscillator();
    // const gainNode = ctx.createGain();
    // osc.connect(gainNode);
    // osc.frequency.setValueAtTime(size, ctx.currentTime);
    // gainNode.gain.setTargetAtTime(0, ctx.currentTime, .05);
    // osc.type = "triangle";
    // gainNode.gain.value = 0.5;
    // gainNode.connect(ctx.destination);
    // osc.start();
    
    // setTimeout(() => osc.stop(), 100); 
    two.style.height = `${size}px`
    two.style.width = `${size /2}px`
    two.innerText = `${randWord(textTwo)}`
}

setInterval(playOne, 1500)
setInterval(playTwo, 1100)