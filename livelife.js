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

if (!choice) {
    alert ('Do you want to quit this game');
}

// let a ="Dalai Lama";
// let b ="Potential love of your life";
// let c ="Stray dog";
// let d ="Lost child";
// let e ="Hot dog vendor";
// let f ="Spiderman comicbook";

let characOne="Your challenge is to meet the Dalai Lama";
let characTwo="Your next challenge is that you bump into a stranger on the pavement while you have your head buried into your cellphone, this could be love of your life";
let characThree="You are taking a walk in the park when you notice a scraggly-looking stray dog in a quiet corner of the park ... you have just met your next life challenge";
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
        alert("Are you kidding me? There are only three reasonable explanations for your choice. \n You were born yesterday. \n You are suffering a severe concussion. \n Aliens kidnapped you for 84 years. If none of these are true statements, you should try again.")
    }
 
    if (choice !=="c"){
        choice = prompt("Try again: \na= " + chalOneIgnore + 
        " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront); 
        
    }
    } 
    if (choice ==="c"){
    alert("Yes! Regardless of what you believe - this is a great moment in your life. Consider what he said when awarderd of The Nobel Piece Prize in 1989 : I feel honored, humbled and deeply moved that you should give this important prize to a simple monk from Tibet I am no- one special. But I believe the prize is a recognition of the true value of altruism, love, compassion and non-violence which I try to practice, in accordance with the teachings of the Buddha and the great sages of India and Tibet. I accept the prize with profound gratitude on behalf of the oppressed everywhere and for all those who struggle for freedom and work for world peace. I accept it as a tribute to the man who founded the modern tradition of non-violent action for change Mahatma Gandhi whose life taught and inspired me. No matter what part of the world we come from, we are all basically the same human beings. We all seek happiness and try to avoid suffering. We have the same basic human needs and is concerns. All of us human beings want freedom and the right to determine our own destiny as individuals and as peoples.")
    }
    }

alert(characTwo);{
    let chalOneAvoid="Apologise profusely and keep moving";
    let chalOneIgnore="Snarl in irritation through your gritted teeth that they should watch where they walk!";
    let chalOneConfront="Smile while you continue to look in their eyes and start with a greeting";
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
    alert("Yes! You never know who you are going to bump into next and if you don't take the time to acknowledge new people, you may just be alone forever and ever and ever and ever and ever ... ad infinitum.")
    }
    }

    alert(characThree);{
        let chalOneAvoid="You are terrified of dogs so you run the other way";
        let chalOneIgnore="You have never owned a pet so you stand there looking at the dog for a really long time";
        let chalOneConfront="You are immediately concerned and slowly approach";
        choice = prompt("Three clear choices race through your mind in a nanosecond : \na= " + chalOneIgnore + " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront );
    
        while (choice !=="c") {
        
    
        if (choice === "b"){ 
            alert("we could assume that your amygdala function has kicked into frozen mode - but let's just hold that thought.  You can spend the rest of your life being a thinker or being a do'er. Start action now and try another answer.");
        }
    
        
        else if (choice ==="a") {
            alert("Unless you are training for a marathon, it may be time to face that fear.  There is a chance the dog might bite you and you die from rabies ... It's a low risk. There is a higher probability that you will get hit by a car running away ... Just saying ...")
        }
     
        if (choice !=="c"){
            choice = prompt("Try again: \na= " + chalOneIgnore + 
            " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront); 
            
        }
        } 
        if (choice ==="c"){
        alert("Yes! You are taking your first steps to understanding the phrase uttered by Frederick the Great of Prussia when he said dog is man's best friend.")
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
