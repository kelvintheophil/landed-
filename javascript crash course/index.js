console.log('hello world ')
//alert('click me')

//varibles

var b = 'kelvin is smart';
console.log(b)

var someNum = 45;
console.log(someNum)

var name = 'kelvin'
console.log(name)

document.getElementById('main').innerHTML = 'welcome everyone';

//user input 

//var age = prompt('what is your age');
//document.getElementById('heading-one').innerHTML = age;

//numbers in javescript 

var num = 5.7;
num++;
console.log(num)

//functions in javascript 

function fun(){
    console.log('this is a function');
}
fun();

/*
lets create a function that take in a name ana syas hellow followed by you name */

function greeting (yourName){
    var result = 'hellow ' + yourName;
    console.log(result);
}
//var name = prompt('wahts your name mate');
//greeting(name);

//taking argument in function 

function sumNUm(num1 , num2){

    var result = num1 + num2;
    console.log(result);
}
//sumNUm(10, 30);

// while loops Vs  For loop 

//while loop
/*
var num =0;
while (num < 100){
    num+=1;
    console.log(num)
}

*/

// for loop 

/*for (let num =0 ; num <= 100 ; num++){
    console.log(num);
}
*/

//datatypes 
let name1 = {first: 'kelvin ' , last: 'theophil'}; //object
let num1 = 18 //number
let surame ='khalid'; //string
let truth = false ; // boolean 
let groceries =['apple ' , 'banana' , 'kuku'] ; //array

//string common methods 

let fruit = 'banana apple orange kuku nyama';
let morFruit = 'banana\napple'; //new line 
console.log(morFruit)

console.log(fruit.length);
console.log(fruit.indexOf('na'));
console.log(fruit.slice(2 , 5));
console.log(fruit.toLocaleUpperCase());
console.log(fruit[5]);
console.log(fruit.split( ',' ))


//arrays in javascript 

let fruits2 =['banana', 'apple', 'kuku', 'maandazi'];

console.log(fruits2[0]);

for (let i = 0; i < fruits2.length; i++ ) {
    console.log(fruits2[i]);
}
//array common method

console.log(fruits2.toString()); //array to string
console.log(fruits2.join( '_%'))  //join array  
console.log(fruits2.pop() , fruits2) // pop the last item 
console.log(fruits2.push('cherryberry') ,fruits2)

let vegetables = ['nazi' , 'kunde'];
let allGroceries = fruits2.concat(vegetables);
console.log(allGroceries)
console.log(allGroceries.reverse());

//sort nunber in js
let numbers = [3, 6, 89, 46, 73, 373 ,98 , 63, 2 ,1 , 78]
console.log(numbers.sort(function(a,b) {return a-b}))

let emptyArray =[];
for (let num = 0; num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray)

//objects in javascript 

let student ={
    first:'kelvin' , 
    last:'theophiiiil' ,
    age:23 , 
    height:176,
    studentInfo: function(){
        return this.first + '\n' + this.last;
    }
};
console.log(student.first);
console.log(student.last);
console.log(student.studentInfo())
console.log(student.first + '\n' + student.last)






















































































































