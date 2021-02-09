'use strict';


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
// console.log(color.toUpperCase());



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
