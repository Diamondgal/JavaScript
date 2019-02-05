"use strict"

document.getElementById("Gamename").innerHTML = "Live Life Game"
function checkPermission(returningPrompt) {
    let message = "Do you give yourself permission to have some fun? - hint - press the button";
    let message1 ="are you sure?";
    let message2="Good lets go";
    
    if (returningPrompt == "firstRun") {
        console.log (returningPrompt);
        // let fun = document.createElement("input");
        // document.body.appendChild(fun);
        document.getElementById("introduction").innerHTML = message; 
        
        document.body.addEventListener("click", function(event) {
        
            let mainButton = document.getElementById("mainButton")
            
        checkPermission("secondRun")
        })


}

    
    
    else if (returningPrompt == "secondRun" ) {
        console.log (returningPrompt);
        document.getElementById("introduction").innerHTML = message1;
    }
    

    // if (fun === "yes") {
    //     console.log(fun);
    
    // return document.getElementById("introduction").innerHTML = message2;
    // }
    
    // else {
    //     return checkPermission("this could be any message but lets go with i've got dejavu");
    // }
}

checkPermission("firstRun");


let choice = prompt("Hey Player! This is the beginning of your self-improvement journey to Enlightenment. To get started, hit the letter a.")


// let a ="Dalai Lama";
// let b ="Potential love of your life";
// let c ="Stray dog";
// let d ="Lost child";
// let e ="Hot dog vendor";
// let f ="Spiderman comicbook";

let characOne = "YOUR CHALLENGE : Meet the Dalai Lama";
let characTwo = "YOUR NEXT CHALLENGE: You bump into a stranger on the pavement while you have your head buried into your cellphone, this could be love of your life";
let characThree = "NEW CHALLENGE : You are taking a walk in the park when you notice a scraggly-looking stray dog in a quiet corner of the park ...";
let characFour = "CHALLENGE AHEAD! It's summertime in Paris, you are enjoying your favourite gellato at the foot of the Eiffel Tower when you notice a crying child all alone.";
let characFive = "HUNGRY FOR A NEW CHALLENGE! In New York City, you spot a hot dog vendor.  You are starving and haven't eaten anything all day long.";
let gameOver = "AND SO ENDETH THE JOURNEY OF THIS GAME.  \n Leave with these wise words from Theodore Roosevelt : \nIt is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat."
let final = "Thank-you for playing"




if (choice === "a") {
    alert(characOne);
    let chalOneAvoid = "Smile and wave";
    let chalOneIgnore = "Walk on by";
    let chalOneConfront = "Stop and say hi";
    choice = prompt("Welcome to your challenge, you are with the Dalai Lama in a Zen Garden. You can make one of three choices: \na= " + chalOneIgnore + " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront);


    while (choice !== "c") {


        if (choice === "b") {
            alert("Did you really think you would get enlightened through the power of osmosis?");
        }


        else if (choice === "a") {
            alert("Are you kidding me? There are only three reasonable explanations for this choice. \n 1. You were born yesterday. \n 2. You are suffering a severe concussion. \n 3. Aliens kidnapped you for 84 years. If none of these are true statements, you should try again.")
        }

        if (choice !== "c") {
            choice = prompt("Try again: \na= " + chalOneIgnore +
                " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront);

        }
    }
    if (choice === "c") {
        alert("Yes! Regardless of what you believe - this is a great moment in your life. Consider what his words when awarderd The Nobel Piece Prize in 1989: \nI feel honored, humbled and deeply moved that you should give this important prize to a simple monk from Tibet I am no- one special. But I believe the prize is a recognition of the true value of altruism, love, compassion and non-violence which I try to practice, in accordance with the teachings of the Buddha and the great sages of India and Tibet. I accept the prize with profound gratitude on behalf of the oppressed everywhere and for all those who struggle for freedom and work for world peace. I accept it as a tribute to the man who founded the modern tradition of non-violent action for change Mahatma Gandhi whose life taught and inspired me. No matter what part of the world we come from, we are all basically the same human beings. We all seek happiness and try to avoid suffering. We have the same basic human needs and is concerns. All of us human beings want freedom and the right to determine our own destiny as individuals and as people.")
    }
}

alert(characTwo); {
    let chalOneAvoid = "Apologise profusely and keep moving";
    let chalOneIgnore = "Snarl in irritation through your gritted teeth that they should watch where they walk!";
    let chalOneConfront = "Smile while you continue to look in their eyes and start with a greeting";
    choice = prompt("You look up into their eyes and can make one of three choices: \na= " + chalOneIgnore + " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront);

    // // { 

    // // function playOn(continuePlay) {
    // //     let message = "Do you really want to stop your journey of self-discovery? - hint yes or no";

    // //     if (continuePlay) {
    // //         message = "Nobofy likes a quitter. Are you sure?";
    // //     }
    // //     let selfDisc = prompt(message);

    // //     if(selfDisc ==="yes"){
    // //         return alert("You've got this! Let's go");
    // //     }
    // //     else {
    // //         return continuePlay("this could be any message but lets go with i've got dejavu");
    // //     }
    // // }

    // continuePlay();

    while (choice !== "c") {


        if (choice === "b") {
            alert("hey Grumpy - what's the rush?  Ever stopped to ask yourself how many new friends you made in a day?  Guess you keep having the same answer, right? None!");
        }


        else if (choice === "a") {
            alert("Sure you can keep on walking for the rest of your life and apologise for bumping into strangers, keep waling to your grave, old and lonely")
        }

        if (choice !== "c") {
            choice = prompt("Try again: \na= " + chalOneIgnore +
                " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront);

        }
    }
    if (choice === "c") {
        alert("Yes! You never know who you are going to bump into next and if you don't take the time to acknowledge new people, you may just be alone forever and ever and ever and ever and ever ... ad infinitum.")
    }
}

alert(characThree); {
    let chalOneAvoid = "You are terrified of dogs so you run the other way";
    let chalOneIgnore = "You have never owned a pet so you stand there looking at the dog for a really long time";
    let chalOneConfront = "You are immediately concerned and slowly approach";
    choice = prompt("Three clear choices race through your mind in a nanosecond : \na= " + chalOneIgnore + " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront);

    while (choice !== "c") {


        if (choice === "b") {
            alert("Unless you are training for a marathon, it may be time to face that fear.  There is a chance the dog might bite you and you die from rabies ... It's a low risk. There is a higher probability that you will get hit by a car running away ... Just saying ...");
        }


        else if (choice === "a") {
            alert(" We could assume that your amygdala function has kicked into frozen mode - but let's just hold that thought.  You can spend the rest of your life being a thinker or being a do'er. Start action now and try another answer.")
        }

        if (choice !== "c") {
            choice = prompt("Try again: \na= " + chalOneIgnore +
                " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront);

        }
    }
    if (choice === "c") {
        alert("Yes! You are taking your first steps to understanding the phrase uttered by Frederick the Great of Prussia when he said dog is man's best friend. Eckhart Tolle believes that dogs teach us how to discover joy and wonder in the present moment and that ultimately, they are the guardians of 'being present'.")
    }
}


alert(characFour); {
    let chalOneAvoid = "You immediately leap forward and race to the kid, splashing ice-cream everywhere and grab the kid by his arm";
    let chalOneIgnore = "Your ice-cream is so good and you don't really want to share, so you turn around and praetend you haven't seen the kid";
    let chalOneConfront = "You start walking over to the kid whilst at the same time look around for an obviously distressed adult and a figure of authority like a policeman, you want to help";
    choice = prompt("Three things race through your mind in an instant: \na= " + chalOneIgnore + " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront);


    while (choice !== "c") {


        if (choice === "b") {
            alert("No! Seriously! - you need to spend more time with kids. An already distressed kid is going to shout like a wild banshee when you grab their arm. And did you wonder how you are going to look if others are watching you? Grabbing a crying kid while holding an ice-cream looks mighty suspicious!");
        }


        else if (choice === "a") {
            alert("This lesson is not about sharing.")
        }

        if (choice !== "c") {
            choice = prompt("Try again: \na= " + chalOneIgnore +
                " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront);

        }
    }
    if (choice === "c") {
        alert("This is a good approach. You want to help the kid and you want to make sure that other adults can see your willingness to help.  The enlightenment in this challenge is about being willing to help others and also making your intentions of helping responsibly clear. In a world where human trafficking is a real thing - you want to be alert to help the meek and you don't want to look the other way.  Good job.")
    }
}

alert(characFive); {
    let chalOneAvoid = "You order 4 hotdogs with the works. You are STARVING!";
    let chalOneIgnore = "You look at the menu for a really long time and remind yourself that hotdogs are not a nutrional food choice. You walk away.";
    let chalOneConfront = "You order your favorite hotdog";
    choice = prompt("You head on over and while you look at this menu, these are your thoughts : \na= " + chalOneIgnore + " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront);

    while (choice !== "c") {


        if (choice === "b") {
            alert("It's not possible to hold three hotdogs in one hand and eat the forth. What are you thinking?");
        }


        else if (choice === "a") {
            alert("Hmmmm .... whilst this is noble and admirable.  it's not really 'joie de vivre'. The French phrase literally means the joy of living. Lighten up")
        }

        if (choice !== "c") {
            choice = prompt("Try again: \na= " + chalOneIgnore +
                " \nb =" + chalOneAvoid + "  \nc=" + chalOneConfront);

        }
    }
    if (choice === "c") {
        alert("Yes! Eating a hot dog in NYC is embracing the moment and taking care of short-term nutrician at the same time! Excellent choice")
    }
}

alert(gameOver);
alert(final)


// document.createElement("div");

// if (characOne + settingOne + challengeOne === challengeOneAvoid) {
//     console.log ("Did you really think you would get enlightened through the power of osmosis?")
// }
