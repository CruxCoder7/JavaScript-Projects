const bckBtn = document.querySelector("button");
const bckColor = document.querySelector("body");
const colours = ['yellow','pink','red','#12b4f5','skyblue'];



function changeColor() {
    const random = Math.floor(Math.random()*colours.length);
    bckColor.style.backgroundColor = colours[random];
    
}

bckBtn.addEventListener('click', changeColor);
