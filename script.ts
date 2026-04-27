const main = document.querySelector<HTMLDivElement>('.container')!
const removeCirclesBtn = document.getElementById('circrmv')!
const regenBtn = document.getElementById('regenBtn')!
const continuousBtn = document.getElementById('continuousBtn')!

let continuousGenerationActive = false;
let continuousGenerationInterval: number;


function getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function genCircle(){
    const circ = document.createElement('div');
    circ.addEventListener('click',()=>{circ.remove()})
    const width = Math.random()*200+5
    const height = Math.random()*200+5
    const[top,lft] = [Math.random()*1700-110,Math.random()*2700-110]
    const borderRadius = Math.random()*100
    circ.style.backgroundColor = getRandomColor();
    circ.style.width = `${width}px`;
    circ.style.height = `${height}px`;
    circ.style.left = `${top}px`;
    circ.style.top = `${lft}px`;
    circ.style.borderRadius = `${borderRadius}%`;
    circ.classList.add('circle');
    main.appendChild(circ);
}

function generateAllCircles() {
    for(let i = 0; i < 5000; i++){
        genCircle();
    }
}
generateAllCircles();

removeCirclesBtn.addEventListener('click', () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => circle.remove());
});

regenBtn.addEventListener('click', () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => circle.remove());
    generateAllCircles();
});

continuousBtn.addEventListener('click', () => {
    continuousGenerationActive = !continuousGenerationActive;
    
    if(continuousGenerationActive) {
        continuousBtn.textContent = 'Stop Continuous Generation';
        continuousGenerationInterval = setInterval(() => {
            genCircle();
        }, 10);
    } else {
        continuousBtn.textContent = 'Start Continuous Generation';
        clearInterval(continuousGenerationInterval);
    }
});
