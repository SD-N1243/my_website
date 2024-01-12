function changeColor() {
    var button = document.getElementById("interactiveButton");
    var randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function button() {
    var the_cube = document.getElementById("cube");
    var the_button = document.getElementById("the-button");
    var randomColor = getRandomColor();
    the_cube.style.backgroundColor = randomColor;
    for (var i = 0; i < 10; i++) {
        
    }
}