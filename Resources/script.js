let button = document.getElementById('color-change');

function colorValue() {
    return Math.floor(Math.random() * 256);
}

function changeColor(event) {
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style,backgroundColor = randomColor;
} 

button.addEventListener('click', colorChange);

