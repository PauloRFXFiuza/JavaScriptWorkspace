/* 01
alert('Hi! What´s up!');
*/
/* 02 
document.getElementById("text").innerHTML="Hi! <b> How are you?";
console.log("Hi!");
*/
/* 03 
let a,b,c; a=5,b=6,c=7;
function f() { document.write(a); document.write(b); }
document.write( f() );
*/
/* 04
console.log( 5+5 ) ; console.log( "5+5" ) ;
var a= 1, b=5, c= a+b, d= a*b, e= a/b, f= a-b ;
console.log( c,d,e,f ) ;
var person= "John", PERSON= "Lennon" ; 
console.log( PERSON ); console.log( person ) ;
*/
/* 05 
//Hi! /*Hi*/ 
// 06 
/*
var pote= "Bombom" ; alert( pote ) ;
var a= 2 , b= 3 , c= a + b ; alert( c ) ;

// No var, é possível a redeclaração de variáveis e reatribuição de valores, conforme mostrado abaixo:
var a= 2 ; console.log( a ) ;
var a= 5 ; console.log( a ) ;

var nome= "Paulo" , sobrenome= "Fiuza" , nomeCompleto= nome + sobrenome ;
document.getElementById("text").innerHTML= nomeCompleto ;

nomeCompleto= nome + " " + sobrenome ; document.getElementById("text2").innerHTML= nomeCompleto ;

// no let, não é possível a redeclaração de variáveis, conforme mostrado abaixo:
//let a = 5;
//let a = 2;  // Impressão no console - Uncaught SyntaxError: Identifier 'a' has already been declared (at scr.js:38:5)
// No let, porém, é possível a reatribuição de valores, conforme mostrado abaixo:
//let a= 5 ; console.log( a );
//a= 2; console.log( a ) ;

//Diferenças entre var e let, quando se usa escopo (bloco de código)

var x= 10; //aqui x = 10

{
    var x= 2; //aqui x = 2 
}

document.getElementById("text").innerHTML= x; //aqui y = 2

let y= 10; //aqui y = 10

{
    let y= 2; //aqui y = 2 
}

document.getElementById("text2").innerHTML= y; //aqui y = 10
*/

// No const, não é possível nem redeclaração de variável nem reatribuição de valores, conforme mostrado:

//const a= 2; console.log( a ) ;
//const a= 3; console.log( a ) ; 
// Impressão no console - Uncaught SyntaxError: Identifier 'a' has already been declared (at scr.js:65:7)

const a= 2; console.log( a ) ;
a= 3; console.log( a ) ;
// Impressão no console - scr.js:69 Uncaught TypeError: Assignment to constant variable. at scr.js:69:2