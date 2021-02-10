


// // Arrays:
// let grades = [50,100,89,66,22,33]
//  let grades = [50,100,89,66,22,33,100];

// console.log('whole array',grades);
// console.log('first index',grades[0]);
// console.log('fifth index',grades[5]);

// // // length will show you the number of elemnts in the array
// console.log('length of array',grades.length);


// // // to add at the end of the array
// grades.push(77)
// console.log(grades);

// console.log('length of array after pushing',grades.length);

// // to remove an element from the end
// grades.pop()

// console.log(grades);

// console.log('length of array after removing',grades.length);

// // i want to know the index of an element in my array
// let index= grades.indexOf(89);
// console.log('index',index);

// let info=['mohammad',40,'tall',true,['walking','playing football','watching movies']];

// console.log(info[4][1]);
// let grades = 'alaa'
// console.log(typeof Array.isArray(grades));



////////////////////////////////////////
// ########  DEMO  ######

alert('Hi');


let i =0;

// --- Get Name --- // 
function Name() {
        let userName=prompt('whats your name?');
    // the massege please input value will still ask for infinity
    while (!userName) {
        userName=prompt('please input value');
    }

    if (userName !== 'Alla') {
        alert('you can not enter');
    }

    alert('welcome ' + userName + ' Alla');

}

Name();

// ---- second question (queen) --- // 
function CheckQueen () {
        let answer=prompt('Are you one of the world\'s beauty queens','answer with yes or no');

    console.log(answer);

    if (answer.toLowerCase()==='yes') {
        alert('welcome');
        i++
    }else{
        alert('sorry you can\'t enter');

    }
    console.log(i);

}

CheckQueen();



let Litters=['A','B','C','D'];
let anotherlitters;

function litter() {
    for(let x =1; x<Litters.length;x++){
        anotherlitters = 's';
    
        console.log(Litters[x]);
    }
    
    console.log(anotherlitters);


}

litter();



function pigS() {
        let q2=prompt('do pigs fly');

    if (q2.toLowerCase()==='no'||q2.toLowerCase()==='n') {
        i++
        // i =i+1
        alert('good job')

    }else{
        alert('wrong')
    }
    console.log(i);

    alert('i is ' + i);


}

pigS();

//End// 
// Edited with already existed code and wrap it inside fucntions by Muhannad // 





  

