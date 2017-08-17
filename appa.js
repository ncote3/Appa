var state = 1, relaxed = 1, happy = 2, sad = 3, crying = 4,  hungry = 5,  tired = 6, sleeping = 7, woke = 0, energy = 0, hunger = 0;
setInterval(hungertime, 5000);
function hungertime() {
    hunger += 10;
    if (hunger >= 100){
        document.getElementById("hlevel").innerHTML = "Yeah, just starve the flying bison...";
        state = 5;
        document.getElementById("mood").innerHTML = "Hungry";
        document.getElementById("picture").src = "assets/hungry.png";
        document.getElementById("hint").innerHTML = "You should feed him.!";
    }
    else if (hunger >= 50 ){
        document.getElementById("hlevel").innerHTML = "He's really hungry.";
        state = 5;
        document.getElementById("mood").innerHTML = "Hungry";
        document.getElementById("picture").src = "assets/hungry.png";
        document.getElementById("hint").innerHTML = "You should feed him.!";
    }
    else if (hunger >= 30){
        document.getElementById("hlevel").innerHTML= "He's hungry, you may want to feed him.";
        document.getElementById("mood").innerHTML = "Hungry";
        document.getElementById("picture").src = "assets/hungry.png";
        document.getElementById("hint").innerHTML = "You should feed him.!";
    }
    else if (hunger >= 20){
        document.getElementById("hlevel").innerHTML= "He's getting hungry.";
    }
    else{
        hunger = hunger + 1;
    }
}
function feed() {
    if (state == hungry){
        document.getElementById("mood").innerHTML = "Relaxed";
        document.getElementById("picture").src = "assets/relaxed.png";
        document.getElementById("hint").innerHTML = "Maybe try playing with him!";
        state = 1;
        hunger =0;
        document.getElementById("hlevel").innerHTML= "He's fed.";
    }
    else {
        document.getElementById("hint").innerHTML = "Looks like he wasn't hungry but he still ate.";
        hunger = 0;
        state = 1;
        document.getElementById("hlevel").innerHTML= "He's fed.";
        document.getElementById("picture").src = "assets/relaxed.png";
    }
}
function pet() {
    if (state == sad){
        document.getElementById("mood").innerHTML = "Relaxed";
        document.getElementById("picture").src = "assets/relaxed.png";
        document.getElementById("hint").innerHTML = "Maybe try playing with him!";
        state = 1;
    }
    else if (state == happy || state == relaxed){
        document.getElementById("mood").innerHTML = "Happy";
        document.getElementById("picture").src = "assets/happy.png";
        document.getElementById("hint").innerHTML = "Let's not make him sad!";
        state = 2;
    }
    else if (state == crying){
        document.getElementById("mood").innerHTML = "Sad";
        document.getElementById("picture").src = "assets/sad.png";
        document.getElementById("hint").innerHTML = "He seemed to like that.";
        state = 3;
    }
    else if (state == tired){
        document.getElementById("mood").innerHTML = "Sleeping";
        document.getElementById("picture").src = "assets/sleeping.png";
        document.getElementById("hint").innerHTML = "Try waking him up.";
        state = 7;
    }
    else if (state == sleeping){
        woke = Math.floor(Math.random() * 2);
        if (woke === 0){
            document.getElementById("mood").innerHTML = "Relaxed";
            document.getElementById("picture").src = "assets/relaxed.png";
            document.getElementById("hint").innerHTML = "Let's not put him back to sleep!";
            state = 1;
        }
        else {
            document.getElementById("mood").innerHTML = "Sleeping";
            document.getElementById("picture").src = "assets/sleeping.png";
            document.getElementById("hint").innerHTML = "Try waking him up.";
            state = 7;
        }
    }
    else {
        document.getElementById("hint").innerHTML = "It wasn't very effective...";
    }
}
function cuddle() {
    if (state == sad || state == happy || state == relaxed){
        document.getElementById("mood").innerHTML = "Happy";
        document.getElementById("picture").src = "assets/happy.png";
        document.getElementById("hint").innerHTML = "Let's not make him sad!";
        state = 2;
    }
    else if (state == crying){
        document.getElementById("mood").innerHTML = "Happy";
        document.getElementById("picture").src = "assets/happy.png";
        document.getElementById("hint").innerHTML = "He seemed to really like that.";
        state = 2;
    }
    else if (state == tired || state == sleeping){
        document.getElementById("mood").innerHTML = "Sleeping";
        document.getElementById("picture").src = "assets/sleeping.png";
        document.getElementById("hint").innerHTML = "Try waking him up, that just put him to sleep.";
        state = 7;
    }
    else {
        document.getElementById("hint").innerHTML = "It wasn't very effective...";
    }
}
function coax() {
    if (state == sad || state == crying){
        document.getElementById("mood").innerHTML = "Happy";
        document.getElementById("picture").src = "assets/happy.png";
        document.getElementById("hint").innerHTML = "He seemed to really like that.";
        state = 2;
    }
    else {
        document.getElementById("hint").innerHTML = "It wasn't very effective...";
    }
}
function wake() {
    if (state == sleeping || state == tired){
        document.getElementById("mood").innerHTML = "Relaxed";
        document.getElementById("picture").src = "assets/relaxed.png";
        document.getElementById("hint").innerHTML = "Maybe try playing with him now that he's up!";
        state = 1;
    }
    else {
        document.getElementById("hint").innerHTML = "It wasn't very effective...";
    }
}
function sleep() {
    if(state == tired || state == sleeping || state == relaxed){
        document.getElementById("mood").innerHTML = "Sleeping";
        document.getElementById("picture").src = "assets/sleeping.png";
        document.getElementById("hint").innerHTML = "He's fast asleep, maybe try waking him up.";
        state = 7;
    }
    else{
        document.getElementById("mood").innerHTML = "Sleeping";
        document.getElementById("picture").src = "assets/sleeping.png";
        document.getElementById("hint").innerHTML = "You put him asleep, maybe try waking him up.";
        state = 7;
    }
}
function berries() {
    if (state == sad){
        document.getElementById("mood").innerHTML = "Relaxed";
        document.getElementById("picture").src = "assets/relaxed.png";
        document.getElementById("hint").innerHTML = "Maybe try playing with him!";
        state = 1;
        hunger -= 5;
    }
    else if (state == happy || state == relaxed){
        document.getElementById("mood").innerHTML = "Happy";
        document.getElementById("picture").src = "assets/happy.png";
        document.getElementById("hint").innerHTML = "Let's not make him sad!";
        state = 2;
        hunger -= 5;
    }
    else if (state == crying){
        document.getElementById("mood").innerHTML = "Sad";
        document.getElementById("picture").src = "assets/sad.png";
        document.getElementById("hint").innerHTML = "He seemed to like that.";
        state = 3;
        hunger -= 5;
    }
    else if (state == tired){
        document.getElementById("mood").innerHTML = "Relaxed";
        document.getElementById("picture").src = "assets/relaxed.png";
        document.getElementById("hint").innerHTML = "Looks like he has some energy now, try playing with him!";
        state = 1;
        hunger -= 5;
    }
    else if (state == sleeping){
        document.getElementById("hint").innerHTML = "A sleeping air bison can't eat...";
        hunger -= 5;
    }
    else{
        document.getElementById("mood").innerHTML = "Happy";
        document.getElementById("picture").src = "assets/happy.png";
        document.getElementById("hint").innerHTML = "Let's not make him sad!";
        state = 2;
        hunger -= 5;
    }
}
function playwith() {
    if (state == relaxed || state == happy || state == sad) {
        energy = Math.floor(Math.random() * 2);
        if (energy === 0) {
            document.getElementById("mood").innerHTML = "Happy";
            document.getElementById("picture").src = "assets/happy.png";
            document.getElementById("hint").innerHTML = "Let's not make him sad!";
            state = 2;
        }
        else {
            document.getElementById("mood").innerHTML = "Sleeping";
            document.getElementById("picture").src = "assets/sleeping.png";
            document.getElementById("hint").innerHTML = "Try waking him up.";
            state = 7;
        }
    }
    else if (state == crying){
        document.getElementById("hint").innerHTML = "He may not want to play right now.";
    }
    else if (state == tired){
        document.getElementById("hint").innerHTML = "He's too tired right now.";
    }
    else if (state == sleeping){
        document.getElementById("hint").innerHTML = "Try waking him up first.";
    }
    else if (state == hungry){
        document.getElementById("hint").innerHTML = "He probably needs to be fed first.";
    }
    else {
        document.getElementById("hint").innerHTML = "Try something else.";
    }
}
function ignore() {
    if (state == relaxed || state == happy){
        state = 3;
        document.getElementById("mood").innerHTML = "Sad";
        document.getElementById("picture").src = "assets/sad.png";
        document.getElementById("hint").innerHTML = "That's not good, cheer him up!";
    }
    else if (state == sad || state == crying || state == tired){
        state = 4;
        document.getElementById("mood").innerHTML = "Crying";
        document.getElementById("picture").src = "assets/crying.png";
        document.getElementById("hint").innerHTML = "That's really not good, cheer him up!";
    }
    else if (state == hungry){
        document.getElementById("hint").innerHTML = "You might want to feed him!";
    }
    else {
        document.getElementById("hint").innerHTML = "He didn't seem to care.";
    }
}
window.addEventListener("load",hungertime);
