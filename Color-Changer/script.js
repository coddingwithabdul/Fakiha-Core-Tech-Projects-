function changeColor(color) {
    document.body.style.backgroundColor = color;
    document.getElementById('colorName').innerText = color;
}
function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let number = Math.floor(Math.random() * 16);
        color = color + letters[number]
    }
    document.body.style.backgroundColor = color; 
    document.getElementById('colorName').innerText = color;
}
function resetColor(){
    document.body.style.backgroundColor = "transparent"; 
    document.getElementById('colorName').innerText  = color; 
}
