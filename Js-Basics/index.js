//--------------------
//Gettind Started
/*
// primeiro JS code
console.log('Hello');
*/
//--------------------
//Basics
/*
let name = 'Fleps';
console.log(name);

//Constante
const interestRate = 0.3;

let name2 = 'Felps';//String Literal
let age = 21; //Number Literal
let aproved = true; // Boolean Literal 
let selected = undefined;
let selected1 = null;

let person = {
    name: 'fleps',
    age: 30
};
person.age = 21;
console.log(person.age);
console.log(person['name']);
console.log(person);

let selectedColor = ['red','green'];
selectedColor[2] = 3;
console.log(selectedColor);
console.log(selectedColor[0]);
console.log(selectedColor.length);

function displayMessage(message){
    console.log(message + '\n' + message + ' End');
}
displayMessage('Hello World');

function square (number){
    return number*number;
}
console.log(square(2));
*/

//--------------------
//Operators
/*
let x = 2;
let y = 3;

//console.log(x+y);
//console.log(x-y);
//console.log(x*y);
//console.log(x/y);
//console.log(x%y);
//console.log(x**y);

console.log(x+'\n');

console.log(x++);
console.log(x+'\n');

x=2;
console.log(--x);
console.log(x);


let x = 2;
//x += 3;
x *= 3;
console.log(x);

let x = 1;
//console.log(x > 0);
//console.log(x >= 1);

//Strict Equality (mesmo tipo e mesmo valor)
console.log(x === 1);
console.log(x !== 1);

//Lose equality (Não necessariamente precisam ser do mesmo tipo)
//Transforma o segundo valor para o tipo do primeiro e compara.
console.log(1 == 1);
console.log(1 == '1');
console.log(true == 1);


let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);


//console.log(true && false);
//console.log(true || false);
//console.log(!true);


//console.log(false || 'felps');
//console.log(false && 'felps');

//falsy (false):
//undefined
//null
//0
//false
//''
//NaN
let userColor = null;
let defautColor = 'Red';
let currentColor = userColor || defautColor;

console.log(currentColor);
*/

//--------------------
//Control Flow

/*
let number = 10;

if(number >= 6)
    console.log('Passou');
else
    console.log('Não passou');

let role = 3;

switch (role) {
    case 1:
        console.log('Role 1')
        break;

    case 2:
        console.log('Role 2')
        break;
        
    default:
        console.log('Invalid role');
        break;
}


for (let i = 0; i < 10; i++) {
    console.log(i+1);
}

let i = 0;

while(i < 5){
    console.log(i);
    i++;
}


let i = 10;
do {
    console.log(i);
    i++;
} while (i < 5);



const colors = ['red','green','blue']

for(let key in colors)
    console.log(key,colors[key]);


for (let i of colors) {
    console.log(i);
}

//Break sai do loop
//Continue vai pra proxima iteracao
let i = 0;
while (i < 10){
    if(i > 8) break;

    if(i % 2 === 0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}


//console.log(maior(2,3));
function maior (num1,num2){
    return (num1 > num2) ? num1 : num2;
}

//console.log(isLandscape(1600,900));
function isLandscape(width,height){
    return width > height;
}

//console.log(fizzBuzz(15));
function fizzBuzz(input){
    if(typeof(input) !== 'number')
        return NaN;

    if((input % 3 === 0) && (input % 5 === 0))
        return 'fizzbuzz';
    if(input % 3 === 0)
        return 'fizz';
    if(input % 5 === 0)
        return 'Buzz'

    return input; 
}

//console.log(checkSpeed(80));
function checkSpeed(speed){
    if(speed < 75)
        return 'Ok';

    let points = Math.floor((speed-70)/5);
    if (points >= 12)
        return 'licença suspensa'

    return points + ' Pontos';
}

//showNumbers(10);
function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
        if(i % 2 === 0)
            console.log(i + ' Par');
        else
            console.log(i + ' Impar');
    }
}

//const array = [0,1,2,3,'',null];
//console.log(countTruthy(array));
function countTruthy(array){
    let i = 0;
    for (const value of array) {
        if(value)
            i++;
    }
    return i;
}


const movie = {
    name: 'a',
    year: 1888,
    director: 'b',
    rating: 4.5
};


//showStringProperties(movie);
function showStringProperties (obj){
    for (const key in obj) { 
        if(typeof(obj[key]) == 'string')
            console.log(key, obj[key]);
    }
}

//console.log(sum35(10));
function sum35(limit){
    let resp = 0;

    for(let i = 0;i <= limit; i++){
        if(i % 3 == 0 || i % 5 ==0)
            resp += i;
    }
    return resp;
}

//const marks = [60, 60 , 60];
//console.log(calculateGrade(marks));
function calculateGrade(marks){
    let mean = 0;
    let length = 0;

    for (const i of marks) {
        mean += i;
    }
    mean = mean / marks.length;
    if(mean < 60) return 'F';
    else if(mean <70) return 'D';
    else if(mean < 80) return 'C';
    else if(mean < 90) return 'B';
    else return 'A';
}

//showStars(5);
function showStars(number){

    for(let i = 0;i<number;i++){
        let pattern = '';
        for (let k = 0; k <= i; k++) {
            pattern += '*'; 
        }
        console.log(pattern);
    }
}

//console.log (isPrime(13));
function isPrime(number){
    for (let factor = 2; factor < number; factor++) 
        if(number%factor === 0)
            return false;

    return true;
}
*/

//--------------------
//Objects

/*
//Factory function
function createCircle (radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}

let circle1 = createCircle(2);
console.log(circle1);
*/

/*
//Constructor functions
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(2);
console.log(circle);
*/

/*
//adicionando uma propiedade em um objeto
const circle = {
    radius: 1
};

circle.draw = function(){}
circle.color = 'red';
delete circle.radius;

console.log(circle);
*/
/*
let circle = {
    radius: 1
};

console.log('radius' in circle);
*/
/*
//clonando um objeto

let circle = {
    radius: 1
};

const another = Object.assign({color:'red'},circle);
console.log(another);

const another2 = {...circle};
console.log(another2);
*/
/*
const message = 
`Escrita ${3+2}
sem quebra
e funcional`;

console.log(message);
*/

//--------------------