alert("Live Life Game");
document.getElementById("Gamename").innerHTML = "Live Life Game"
// document.getElementsByIdName("Gamename").style.backgroundColor = "tomato"
document.getElementById("UI-text").style.backgroundColor = "aquamarine"
let UI_text = document.getElementById("UI-text")

// document.getElementById("Stages").style.backgroundColor = "tomato"
// document.getElementById("Stages").style.width = "30px"

function checkPermission(returningPrompt) {
    let message = "Do you give yourself permission to have some fun? - hint - yes or no";

    if (returningPrompt) {
        message = "Are you sure?";
    }
    let fun = prompt(message);

    if (fun === "yes") {
        // return alert("Good Lets go");
        UI_text.innerHTML = "blah blach";
    }
    else {
        return checkPermission("this could be any message but lets go with i've got dejavu");
    }
}

checkPermission();

