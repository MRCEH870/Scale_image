const img = document.querySelector('.img');

document.addEventListener('mousemove',(e)=>{
    const x = (window.innerWidth / 2 - e.clientX ) /20
    const y = (window.innerHeight /2 - e.clientY ) /20
    img.style.transform=`translate(-50%,-50%) scale(1.1) translate(${x}px,${y}px)`
});