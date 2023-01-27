const ctx = new AudioContext();
const square = document.querySelector(".square")


const text = "He who fights with monsters should look to it that he himself does not become a monster."
const words = text.split(' ')
function randWord () {
    return words[Math.floor(Math.random()*words.length)];
}


square.addEventListener('click', playNote)

function getRndInteger(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 5) * 5;
  }

function playNote () {
    const size = getRndInteger(100, 500)
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.connect(gainNode);
    osc.frequency.setValueAtTime(size * 2, ctx.currentTime);

    osc.type = "triangle";
    gainNode.gain.value = 0.5;
    gainNode.gain.setTargetAtTime(0, ctx.currentTime, (100));
    gainNode.connect(ctx.destination);
    osc.start();
    
    setTimeout(() => osc.stop(), 100); 
    square.style.height = `${size}px`
    square.style.width = `${size /2}px`
    square.innerText = `${randWord()}`
}