const boxContainer = document.querySelector('.box-container')


for(i=0;i<=29;i++){
    let div = document.createElement('div');
    div.classList.add('box');
    boxContainer.appendChild(div);
}
const boxes = document.querySelectorAll('.box');

boxes.forEach(box=>{
    box.style.backgroundColor = randomColors();
    box.innerHTML = randomColors(); 
})

function randomColors(){
    let hex = "#";
    for(i=0;i<6;i++){
        let colorvalue = "0123456789ABCEDF"
        hex += colorvalue[Math.floor(Math.random() * colorvalue.length)];
    }
    console.log(hex);
    
    return hex;
}