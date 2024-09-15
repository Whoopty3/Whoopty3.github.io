let count = 0;

function increaseCount() {
    count += 1;
    document.getElementById('count').innerText = count;
}

function refreshImage() {
    document.getElementById('randomImage').src = "https://picsum.photos/200?random=" + new Date().getTime();
}

function moveSquare() {
    let sliderValue = document.getElementById("slider").value;
    let square = document.getElementById("square");
    square.style.left = sliderValue + "px";
}
