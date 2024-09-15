const myButton = document.getElementById("btn-click1");
//myButton.onclick = doStuff;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello everyone";
    document.getElementById("Stuff").classList.add("special"); 
};
    document.getElementById("btn-click1").onlclick () => {
        document.getElementById("message").innerHTML = "goodbye everyone";
        document.getElementById("btn-click1").classList.remove("special");
    }

//showing data from an input field
document.getElementById("txt-first-name").onkeyup = (event) => {
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;
}
//Add a second button, called say goodbye
//When clicked change the text to "goodbye everyone", and remove the special styles