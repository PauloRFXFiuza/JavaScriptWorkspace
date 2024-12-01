/*
document.body.style.backgroundColor = listaCores[4];
Math.random => gera números decimais aleatórios entre 0 e 1
Math.floor => retorna o piso de um número decimal- ex: Math.floor(5.789797) = 5 
x.length=> retorna um número com o tamanho da variável x
setInterval(x,y)=> executa uma tarefa x num intervalo de tempo y em milissegundos
console.log()=> para imprimir algo no terminal
document.write() => escreve algo na página web 
*/

const listaPalavras = ['Metamorfose ambulante' , 'Krig-ha Bandolo' , 'Plunct Plact Zum' , 'Al Capone' , 'Durango Kid' ,
                        'Oh seu moço, do disco voador' , 'Pastor João e a Igreja Invisível'];

console.log(listaPalavras);

//função para trocas aleatórias de frases na página

function trocarPalavras() {
    document.write(' ' + listaPalavras[Math.floor(listaCores.length*Math.random())]);
}

setInterval(trocarPalavras,2000);
