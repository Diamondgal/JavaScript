alert ("Live Life Game");
function checkPermission(returningPrompt) {
    let message = "Do you give yourself permission to have some fun? - hint - yes or no";

    if (returningPrompt) {
        message = "Are you sure?";
    }
    let fun = prompt(message);

    if(fun ==="yes"){
        return alert("Good Lets go");
    }
    else {
        return checkPermission("this could be any message but lets go with i've got dejavu");
    }
}

checkPermission();

let choice=prompt("Hey Player! This is the beginning of your self-improvement journey to Enlightenment. To get started, hit the letter a.")


// let a ="Dalai Lama";
// let b ="Potential love of your life";
// let c ="Stray dog";
// let d ="Lost child";
// let e ="Hot dog vendor";
// let f ="Spiderman comicbook";

let characOne="Your challenge is to meet the Dalai Lama";
let characTwo="Your next challenge is that you bump into a stranger on the pavement while you have your head buried into your cellphone, this could be love of your life";
// let characThree="Stray dog";
// let characFour="Lost child";
// let characFive="Hot dog vendor";
// let characSix="Spiderman comicbook";




if (choice === "a") { 
    alert(characOne);
    let chalOneAvoid="Smile and wave";
    let chalOneIgnore="Walk on by";
    let chalOneConfront="Stop and say hi";
    choice = prompt("Welcome to your challenge, you are with the Dalai Lama in a Zen Garden. You can make one of three choices: \na= " + chalOneIgnore + " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront );

    while (choice !=="c") {
    

    if (choice === "b"){ 
        alert("Did you really think you would get enlightened through the power of osmosis?");
    }

    
    else if (choice ==="a") {
        alert("blah blah")
    }
 
    if (choice !=="c"){
        choice = prompt("Try again: \na= " + chalOneIgnore + 
        " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront); 
        
    }
    } 
    if (choice ==="c"){
    alert("Yes! Regardless of what you believe the quote about his Nobel Piece Prize Win")
    }
    }

alert(characTwo);{
    let chalOneAvoid="Apologise profusely and keep moving";
    let chalOneIgnore="Snarl in irritation, $`watch where you walk!`a";
    let chalOneConfront="Smile and say hi";
    choice = prompt("You look up into their eyes and can make one of three choices: \na= " + chalOneIgnore + " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront );

    while (choice !=="c") {
    

    if (choice === "b"){ 
        alert("hey Grumpy - what's the rush?  Ever stopped to ask yourself how many new friends you made in a day?  Guess you keep having the same answer, right? None!");
    }

    
    else if (choice ==="a") {
        alert("Sure you can keep on walking for the rest of your life and apologise for bumping into strangers, keep waling to your grave, old and lonely")
    }
 
    if (choice !=="c"){
        choice = prompt("Try again: \na= " + chalOneIgnore + 
        " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront); 
        
    }
    } 
    if (choice ==="c"){
    alert("Yes! Regardless of what you believe the quote about his Nobel Piece Prize Win")
    }
    }




// }
// else if (choice ==="b") {
//     alert(characTwo);
// }















// if (choice === b ){
//     console.log (characTwo)
// }
// if (choice === c){
//     console.log (characThree)
// }
// if (choice === d){
//     console.log (characFour)
// }
// if (choice === e){
//     console.log (characFive)
// }
// if (choice === f){
//     console.log (characSix)
// }
// else if ((choice !=a) || (choice !=b) || (choice !=c) || (choice !=d) || (choice !=e) || (choice !=f))
// choice=prompt (a,b,c,d,e,f) 



// choice =prompt



// let settingOne="Zen Garden";
// let challengeOne="Welcome to your first challenge, you are about to meet the Dalai Lama in a Zen Garden. You can make one of three choices";
// let chalOneAvoid="Smile and wave";
// let chalOneIgnore="Walk on by";
// let chalOneConfront="Stop and say hi";

// choice=prompt(challengeOne);
// choice
// if (choice === characOne) {
// console.log (chalOne)
// }


// if (characOne + settingOne + challengeOne === challengeOneAvoid) {
//     console.log ("Did you really think you would get enlightened through the power of osmosis?")
// }
