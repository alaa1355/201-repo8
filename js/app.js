'use strict';

// comments for one line 

/* 
for multible lines of comments
Data types:
-String
is something data instide " " ,' '
-Number
2.3 float, 3 integer 
-boolean
true or flase
*/


let userName='Alla';
let age =prompt('write your age');

console.log(age);
console.log(type of age);

// change data type of prompt from string to number

// age = Number(age);

// age = parseInt(age);

// console.log(age);

// console.log('after Number',typeof age );


/* if(condition is true){
    do this
} else{
    do this if ondition is false
}
=== datatype and the value
== value
*/
let age =0;
if(age === 21){
    alert('you are 21');
}else if(age>18){
    alert('welcome')
}else{
    alert('go away you\'re too young');
}
// console.log(age);
alert(age);



// Switch
/* 
switch(variable){
   case 'value1':
       do code...
       break;
    case 'value2':
        do something else..
        break;
    default:
        do if nothing matches the casses
        break;
    
}
*/

// let mood=confirm('are you good?')
// console.log(mood);

// switch(mood){
//     case true:
//         document.write('have agood day');
//         break;
//     case false:
//         document.write('I hope you get better');
//         break;
// }


let fruit=prompt('what do you want');

switch(fruit.toUpperCase()){
    case 'ORANGE':
        // console.log(fruit.toUpperCase());
        console.log('oranges are 1 dinar a kilo');
        break;
    case 'MELON':
    case 'APPLE':
        console.log('apples and melons are 3 dinar a kilo');
        break;

    default:
        console.log('we dont have that sorry');
}

console.log(fruit.toUpperCase());


