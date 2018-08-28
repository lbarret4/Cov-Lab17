
// Prints my name and favorite movie to the console using function declaration 
/* function favMovie(movie='The Room',name='World'){
    console.log(`My name is ${name} and my favorite movie is ${movie}`);
} */

let favMovie = (movie='The Room',name='World') => console.log(`My name is ${name} and my favorite movie is ${movie}`);


favMovie();
favMovie('Mr Holland\'s Opus','Llewellyn');

//Demonstrates arrow function  with\without shorthand notation
let getFirstName1 = (fullName) => { return fullName.split(' ')[0];};
let getFirstName2 = fullName => fullName.split(' ')[0];
console.log(getFirstName1('John Mitchell'));
console.log(getFirstName2('John Mitchell'));

//Provides product of X*Y and X raised to the power of Y as an object and prints objects value to screen   
let multiplyX= (x,y) =>({ 
    powerOfX:x**y,
    product:x*y
  
});
let num1=3;
let num2=2;
let {powerOfX,product} = multiplyX(num1,num2);
console.log(`X(${num1})*Y(${num2}) = ${product}\nX(${num1})^Y(${num2}) = ${powerOfX} `);

//Use spread operator to pass array to Snippet function to construct phrase (e.g. ‘John from Baltimore favorite foods is pudding’)
let  mySnippet = (name,location,favFood) =>{ 
    return ` ${name} from ${location} favortie food is ${favFood} `
    
  };
  let arr = ["Paul","Birmingham","Kimchi"];
   console.log(mySnippet(...arr));
  
// Prints individual character of myName using spread operator  
  let myName = 'Llewellyn Barrett';
  let  charName= name => [...name];
    for( char of charName(myName)){
      console.log(char);
    }