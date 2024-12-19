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
/* 06 

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


// No const, não é possível nem redeclaração de variável nem reatribuição de valores, conforme mostrado:

//const a= 2; console.log( a ) ;
//const a= 3; console.log( a ) ; 
// Impressão no console - Uncaught SyntaxError: Identifier 'a' has already been declared (at scr.js:65:7)

//const a= 2; console.log( a ) ;
//a= 3; console.log( a ) ;
// Impressão no console - scr.js:69 Uncaught TypeError: Assignment to constant variable. at scr.js:69:2
*/
/* 07 

let valor1= 5 , valor2= 2 , total= valor1 + valor2 ; 
console.log( "A variável valor1 possui valor inicial de: " + valor1 ) ;
console.log( "A variável valor2 possui valor inicial de: " + valor2 ) ;
console.log( valor1 + " + " + valor2 + " = " + total ) ;
total= ++valor1; console.log( "A variável total se tornou igual a: " + total ) ; 
console.log( "A variável valor1 se tornou igual a: " + valor1 ) ;
total= --valor1; console.log( "A variável total se tornou igual a: " + total ) ; 
console.log( "A variável valor1 se tornou igual a: " + valor1 ) ;
// valor1 = valor1 + valor2 e valor1 += valor2 têm sintaxes equivalentes
valor1 = valor1 + valor2; 
console.log( "valor1 = valor1 + valor2 = " + valor1 ) ;
valor1 += valor2;
console.log( "valor1 = valor1 + valor2 e valor1 += valor2 têm sintaxes equivalentes,"+
             "portanto valor1 possui agora o valor: " + valor1 ) ;
// O mesmo vale para: valor1 = valor1 - valor2 e valor1 -= valor2
// O mesmo vale para: valor1 = valor1 * valor2 e valor1 *= valor2
// O mesmo vale para: valor1 = valor1 / valor2 e valor1 /= valor2

let valor1= 8 , valor2= 10 , comparacao ;
console.log( "A variável valor1 possui valor inicial de: " + valor1 ) ;
console.log( "A variável valor2 possui valor inicial de: " + valor2 ) ;

comparacao= valor1 === valor2 ; 
console.log( "valor1 === valor2 = " + comparacao ) ;
console.log( "O valor1 é igual ao valor2 ? = " + comparacao ) ;

comparacao= valor1 !== valor2 ; 
console.log( "valor1 !== valor2 = " + comparacao ) ;
console.log( "O valor1 é diferente do valor2 ? = " + comparacao ) ;

comparacao= valor1 < valor2 ; 
console.log( "valor1 < valor2 = " + comparacao ) ;
console.log( "O valor1 é menor que o valor2 ? = " + comparacao ) ;

comparacao= valor1 <= valor2 ; 
console.log( "valor1 <= valor2 = " + comparacao ) ;
console.log( "O valor1 é menor ou igual ao valor2 ? = " + comparacao ) ;

comparacao= valor1 > valor2 ; 
console.log( "valor1 > valor2 = " + comparacao ) ;
console.log( "O valor1 é maior que o valor2 ? = " + comparacao ) ;

comparacao= valor1 >= valor2 ; 
console.log( "valor1 >= valor2 = " + comparacao ) ;
console.log( "O valor1 é maior ou igual ao valor2 ? = " + comparacao ) ;



let idade= 15 , eleitor ; console.log ( "Joãozinho Possui: " + idade + " Anos." ) ;
// operador ternário - (condição) ? "valor se condição for verdaeira (true)" : "valor se condição for falsa (false)"
// ? - no contexto equivale a uma pergunta - exemplo abaixo:
eleitor= ( idade < 16 ) ? "Ainda não é um eleitor. Calma!" : "Eleitor, te esperamos na urna!" ;
console.log( eleitor ) ;

let numero = 10, intervalo ; console.log( "O número escolhido foi: " + numero ) ;
intervalo = ( numero >= 60 && numero <= 70 ) ? 
("O número " + numero + " Está no intervalo entre 60 e 70.") : 
("O número " + numero + " Não está no intervalo entre 60 e 70.") ;
console.log( intervalo ) ;

let comparacao;
numero = 50; console.log( "O número escolhido foi: " + numero ) ;
comparacao = ( numero >= 70 || numero <= 0 ) ? 
("O número " + numero + " É maior ou igual a 70 Ou menor ou igual a 0.") : 
("O número " + numero + " Não é maior ou igual a 70 Ou menor ou igual a 0") ;
console.log( comparacao ) ;

numero = 10, intervalo ; console.log( "O número escolhido foi: " + numero ) ;
intervalo = ! ( numero >= 60 && numero <= 70 ) ? 
("O número " + numero + " Não está no intervalo entre 60 e 70.") : 
("O número " + numero + " Está no intervalo entre 60 e 70.") ;
console.log( intervalo ) ;

*/
/* 08 
// Função para dar uma alerta de saudação aos usuários
function alertaHi(  ) {
    alert( "Hi, people!" ) ;
} 

// Função para somar dois números
function soma( valor1 , valor2 ) {
    return valor1 + valor2 ;
}

// Função para converter a moeda Real para a moeda Dólar
function realParaDolar( real , cotacaoDolar ) {
    return real / cotacaoDolar ;
}

// Função para converter temperatura de graus Fahrenheit para graus Celsius
function fahrenheitParaCelsius( grausFahrenheit ) {
    return ( 5/9 ) * ( grausFahrenheit - 32 ) ;
}

// document.getElementById( "text" ).innerHTML = soma( 10 , 23 ) ;
let total = soma( 10 , 23 ) , valorReal = 10000000000 , cotacaoHoje = 6.15;
let temperaturaFahrenheit = 252, temperaturaCelsius = fahrenheitParaCelsius( temperaturaFahrenheit );
console.log( total ) ;
console.log( soma( 100 , 1023 ) ) ;
console.log( realParaDolar( 100 , 6.10 ) ) ;
console.log( "Hoje, necessita-se de R$ " + valorReal + " para se obter US$ " + realParaDolar( valorReal , cotacaoHoje ) ) ;
document.getElementById( "text" ).innerHTML = 
"Hoje, necessita-se de R$ " + valorReal + " para se obter US$ " + realParaDolar( valorReal , cotacaoHoje ) ;
document.getElementById( "text2" ).innerHTML = 
temperaturaFahrenheit + "°F equivalem-se a " + fahrenheitParaCelsius( temperaturaFahrenheit ) + "°C." ;
// alertaHi() ;
*/
/* 09

// variáveis muitas vezes possuem apenas um valor
let car= "ford" ;
// objetos são criados para se ter vários valores e se usa comumente o const

// /* Exemplo de objeto literal, onde os valores já são definidos
const objeto= {
    propriedade1: valor1 ,
    propriedade2: valor2 ,
    propriedade3: valor3 ,
    ...
    propriedadeN: valorN ,
    metodo1: function1(){} ,
    ...
    metodoM: functionM(){}
}
//
const carro= {
    marca: "ford" ,
    modelo: "ka" ,
    ano: 2015 ,
    placa: "ABC-1234",
    buzina: function( ) { alert( "BiBiiiiii!" ) },
    completoConsole: function ( ) {
        return "Informações do carro:\nMarca - " + this.marca + ";\nModelo - " + this.modelo 
        + ";\nAno - " + this.ano + ";\nPlaca - " + this.placa ;
    },
    completoHTML: function ( ) {
        return "Informações do carro:<br>Marca - " + this.marca + ";<br>Modelo - " + this.modelo 
        + ";<br>Ano - " + this.ano + ";<br>Placa - " + this.placa ;
    }
};
// Imprimindo e Extraindo valores dos objetos
console.log( carro ) ;
console.log( carro.ano ) ;
console.log( carro[ "marca" ] ) ;
console.log( carro.placa , carro.marca , carro.modelo ) ;
console.log( carro[ "placa" ] , carro[ "modelo" ] , carro[ "marca" ] ) ;
document.getElementById( "text" ).innerHTML = carro.completoHTML();
console.log( carro.completoConsole() )
//carro.buzina() ;
*/
/* 10 
EVENTOS*
Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Válido para input, s
onchange -> Disparado quando existe uma mudança no conteúdo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimensionamento da janela.
a=1;


function darkTheme() {
    document.body.style.backgroundColor = "black" ;
    document.body.style.color = "white" ;
}

function lightTheme() {
    document.body.style.backgroundColor = "white" ;
    document.body.style.color = "black" ;
}

function escurecer() {
    let div= document.getElementById( "teste" ) ;
    div.style.backgroundColor= "darkblue" ;
    div.style.color = "gray" ;
}

function esclarecer() {
    let div= document.getElementById( "teste" ) ;
    div.style.backgroundColor= "blue" ;
    div.style.color = "white" ;
}

function limpaTexto() {
    document.getElementById( "campoTexto" ).value= "";
}

function retornaTexto() {
    document.getElementById( "campoTexto" ).value= "Hi guys! Type Here";
}

function changed() {
    console.log( document.getElementById( "items" ).value )
}

function registroTeclas(){
    let input = document.getElementById( "campoTexto" ).value
    console.log(input);
}

function loadComplete(){
    console.log("Página Carregada Com Sucesso!");
}
//
function addText() {
    let p= document.getElementById( "text3" ) ;
    p.append("Hi, World! ") ;
    p.style.backgroundColor= "gray" ;
    p.style.color = "black" ;
}

*/
/* 11 
//
ARRAYS
Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, 
que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. 
O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz","feijão","macarrão","leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.
//
//             [0]      [1]      [2]       [3]                       
let lista = ["arroz","feijão","macarrão","leite"];
console.log(lista[0]);
console.log(lista[0],lista[1]) ;

let lista2 = [];
lista2[0] = "salsicha";
lista2[1] = "ostra";
lista2[2] = "alcaparra";
lista2[1] = "escargot";

console.log(lista2);

let lista3 = new Array("linguiça","rúcula",0, true); 
console.log(lista3);

let x = lista[2];
console.log(x);
x= [lista[2],lista2[0],lista3[2]];
console.log(x);

let person1 = ["Paulo", "Fiuza", 33]; //array
let person2 = {nome:"Paulo", sobrenome:"Fiuza", idade:33}; //objeto

let y=person1[0]; console.log(y);
    y=person2.nome; console.log(y);

console.log(person1.length); //quantidade de itens dentro de uma array
console.log(person1[person1.length-1]); //para se obter o último item da array

console.log(person1);
person1.push(true); //para se adicionar um item na array
console.log(person1);
person1[person1.length] = false; //outra maneira de se adicionar um item na array
console.log(person1);

console.log(Array.isArray(person1)); //para saber se a variável é uma array (true); se não é (false)

*/
/* 12 */

let lista = ["manga","arroz","feijão","macarrão","leite","linguiça","bisteca"];
console.log(lista);
lista.pop(); //Comando para remover último item da array
console.log(lista);
lista.push("cenoura"); //Comando Para se adicionar um item na última posição da array
console.log(lista);
lista.shift(); //Comando para remover primeiro item da array
console.log(lista);
lista.unshift("cenoura"); //Comando Para se adicionar um item na primeira posição da array
console.log(lista);
delete lista[2]; //Comando para remover item específico da array, porém não há reposicionamento dos itens subsequentes
//document.getElementById("test").innerHTML = lista; //Comando Para Copiar array para um elemento do HTML 
//document.getElementById("test").innerHTML = lista.join(" * "); //Comando para trocar as vírgulas entre os itens da array
console.log(lista);
//x.splice(A,B, item1, item..., itemN) - A= a partir de qual índice serão adicionados os itens na array x,... 
// ...B= quantos itens serão removidos depois da inserção dos itens, item1,..., itemN - sequência dos itens que serão adicionados a partir do indice A  
lista.splice(4, 1, "cebola", "alho", "pimenta", 3, true)
document.getElementById("test").innerHTML = lista.join(" ");
console.log(lista);
console.log(lista[2]);

let lista2 = ["suco","refrigerante","cerveja","cachaça"];
console.log(lista2);

let listaTotal = lista.concat(lista2); //Comando para juntar uma array em outra
console.log(listaTotal);

document.getElementById("test2").innerHTML = listaTotal.join(" ");
listaTotal = lista2.concat(lista);

document.getElementById("test3").innerHTML = listaTotal.join(" ");
console.log(listaTotal);

lista3 = ["alcachofra","côco",1,2,3,4,5];
listaTotal = lista.concat(lista2, lista3); //Comando para juntar varias arrays
console.log(listaTotal);
//                        [0]       [1]         [2]             [3]         [4]     [5]     [6]     [7]         [8]        [9]
let footballPlayers = ["Rooney","Cannavaro","James Rodriguez","Ronaldo","Vini Jr","Messi","Modric","Kross","Neymar Jr","Rodrigo Garro",0, true];
console.log(footballPlayers);
let bestFootballPlayers = footballPlayers.slice(3);// .slice(N) - elimina os itens de uma array antes do índice N
console.log(bestFootballPlayers);
let goatFootballPlayer = footballPlayers.slice(5,6);// .slice(N,M) - elimina os itens de uma array antes do índice N e a partir do índice M 
console.log(goatFootballPlayer);

console.log(footballPlayers.sort()); //Comando para organizar em ordem alfabética 
console.log(footballPlayers.reverse()); //Comando para organizar em ordem reversa alfabética 

let numbers = [-1, 10, 21, 54, -210.2, 12012020, 1.2123, 1.2124, 10000.121, -122022020.1];
console.log(numbers);
let sortNumbers= numbers.sort( function( a,b ) {return a-b} ); //X.sort(function(a,b){return a-b})- Comando para organizar em ordem numérica uma array X contendo apenas números
console.log(sortNumbers);
let reverseSortNumbers= numbers.sort( function( a,b ) {return b-a} ); //X.sort(function(a,b){return b-a})- Comando para organizar em ordem reversa numérica uma array X contendo apenas números
console.log(reverseSortNumbers);

let maxNumber= Math.max.apply(null,numbers); //Math.max.apply(null,x) - comando que devolve o valor máximo de uma array x
console.log(maxNumber);

let minNumber= Math.min.apply(null,numbers); //Math.min.apply(null,x) - comando que devolve o valor mínimo de uma array x
console.log(minNumber);
