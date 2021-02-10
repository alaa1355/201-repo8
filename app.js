'use strict';
let score = 0;
// first question
function goodBooks() {
    let book=confirm('it was good?')
    console.log(book);
    
    switch(book){
        case true:
        document.write('have agood read');
            break;
        case false:
            document.write('I hope you read another one better');
            break;
    }
}

// second question
function goodBooks () {
    let perfume=prompt('pick Le Labo / OUAI / Ojai Wild');

switch(perfume.toUpperCase()){
    case 'Le Labo':
        // console.log(perfume.toUpperCase());
        alert(perfume);
        console.log('250$');
        break;
    case 'OUAI':
    case 'Ojai Wild':
        console.log('100$');
        break;

    default:
        console.log('not available');
}
alert(perfume);
}

// console.log(color.toUpperCase());


// question Three

function colornumber() {
    let color=prompt('pick orange/ red / blue');

switch(color.toUpperCase()){
    case 'orange':
        // console.log(color.toUpperCase());
        console.log('oranges are 1 dinar a kilo');
        break;
    case 'red':
    case 'blue':
        console.log('red and blue are 3 dinar a kilo');
        break;

    default:
        console.log('not available');
}

console.log(color.toUpperCase());

}

// question four
function sweetTaste(){
    let sweet=confirm('it was delicious?')
    console.log(sweet);
    
    switch(sweet){
        case true:
            document.write('Thank you');
            break;
        case false:
            document.write('I will bring another type');
            break;
    }
}

// question fife
    
 function checkqatar() {
    let country = prompt("Do I live in qatar?").toLowerCase();

    while (country !== 'yes' && country !== 'no' && country !== 'y' && country !== 'n') {
        country = prompt("Do I live in qatar?").toLowerCase();
   
    }

    if (country === 'yes' || country === 'y' ) {
        alert("hello")
        console.log("Do I live in qatar?" , "Correct")
        score++;
    } else if (country === 'no' || country === 'n') {
        alert("you can\'t enter")
        console.log("Do I live in qatar?? ", "you can\'t enter")
    }


}


// question six
function checkMythought() {
    let Mythought = prompt("Do you think I love swimming").toLowerCase();

    while (Mythought !== 'yes' && Mythought !== 'no' && Mythought !== 'y' && Mythought !== 'n') {
        hobbie = prompt("Do you think I love swimming").toLowerCase();
     
    }

    switch (Mythought) {
        case "yes" || "y":
            score++;
            alert("Yes! That's Correct");
            console.log("Do you think I love swimming", "Correct");
            break;

        case "no" || "n" : 
            alert("Sorry! That's incorrect");
            console.log("Do you think I love swimming?", "Incorrect");
            break;

    }

}


// calling first 6 questions above 
var callfun1 = goodBooks(); // declared inside other variable to use it in the below alert
goodBooks();
colornumber();
sweetTaste();
checkqatar();
checkMythought();

// Thank you message after complete answering above 6 questions // 

alert("hello " + callfun1 + " , kindly check your console to see your answers after you finish another two guess questions");



//  question seven

let correctNumber = 8;

for (let i = 4; i < 8; i++) {

    let question7 = prompt('guess a number betwee 1-10');
    // the prompt will always give us a string

    question7 = parseInt(question7)

    console.log(typeof question7);

    if (question7 === correctNumber) {
        alert('good job');
        score++;
        break;
    } else if (question7 > correctNumber) {
        alert('too high');
    } else if (question7 < correctNumber) {
        alert('too low');
    } else {
        alert('please input a number');
    }
    // i = 4 
    // i = 5
    // i = 6
    // i = 7
    if (i == 3) {
        alert('the correct number is ' + correctNumber);
    }
}








  
































// finalizing and score 

function ScoreandFinal() {
    alert("your score out of 7 is: " + score )
    alert("kindly check your console Now to see the report for questions & your Answers")
    console.log (" your score is: " + score + " out of 7 ")
}

ScoreandFinal();
