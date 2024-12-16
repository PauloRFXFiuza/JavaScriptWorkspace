/*
document.body.style.backgroundColor = listaCores[4];
Math.random => gera números decimais aleatórios entre 0 e 1
Math.floor => retorna o piso de um número decimal- ex: Math.floor(5.789797) = 5 
x.length=> retorna um número com o tamanho da variável x
setInterval(x,y)=> executa uma tarefa x num intervalo de tempo y em milissegundos
console.log()=> para imprimir algo no terminal
document.write() => escreve algo na página web 
*/

const listaCores = ['yellow' , 'blue' , 'red' , 'green' , 'pink' , 'grey' , 'brown'];

console.log(listaCores);
    
//função para trocas aleatórias de cor de fundo da página
function trocarCores() {
    document.body.style.backgroundColor = listaCores[Math.floor(listaCores.length*Math.random())];
}

setInterval(trocarCores,1000);

