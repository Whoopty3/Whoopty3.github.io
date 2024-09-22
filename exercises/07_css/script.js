let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    document.getElementById("ball")
}

document.getElementById("btn-show-color").onclick = () => {
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = "";

    if(color == "red") {
        mood = "angry";
}
    else if(color == "blue") {
        mood = "moody";
}
    else{
        mood = "undefined";
    }
    messageP.innerHTML = `You chose ${color} so you are ${mood}`;
}

/* Donations */
/* Get the number 
-if it is not a number or it is negative, show an error in the error
Otherwise first show the percent out of 10000 towards goal
Next show a visual representation with a box and a gradient */
document.getElementById("btn-donate").onclick = () => {
    const donation = document.getElementById("txt-donations").value;
    const error = document.getElementById("error-donation");
    error.innerHTML = "";

    if(isNaN(donation) || donation < 0) {
        error.innerHTML = "*invalid";
        return;
    }

    const percentGoal = donation / goal * 100;
    console.log(percentGoal + "");
}