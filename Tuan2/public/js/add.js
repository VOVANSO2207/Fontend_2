"use strict";
const addSnow=document.querySelector(".addSnow");
const container = document.querySelector(".container");
addSnow.addEventListener("click",createSnow);
function createSnow() {
    const createSnow = () => {
        const snow = document.createElement("span");
        snow.className = "snow";
        
        const minSize = 5;
        const maxSize = 10;
        let snowSize = Math.random() * (maxSize - minSize) + minSize;
    
        snow.style.width = snowSize + "px";
        snow.style.height = snowSize + "px";
        snow.style.right = Math.random() * 100+"%";
        let blur= Math.random() * 2;
        snow.style.filter=`blur(${blur}px)`;; 

        
        container.appendChild(snow);
        
        setTimeout(() => {
            snow.remove();
        }, 10000);
    };
    setInterval(createSnow, 100);    
}


