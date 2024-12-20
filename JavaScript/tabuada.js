
var horarioLocal = new Date().toLocaleTimeString();
var dataDeHoje = new Date().toDateString();

console.log(dataDeHoje);
console.log(horarioLocal);

document.getElementById("data").innerHTML="<strong>Today is:</strong> " +dataDeHoje+ "<br><strong>Now is:</strong> "+horarioLocal;

function calculaTabuada () {
    let tabuada = Number(document.getElementById("tabuada").value);
    let indice = -1;
    console.log(tabuada);

    for (let i=0; i<=5000; i= i+tabuada){
        indice++;
        document.getElementById("test").innerHTML += indice + " x "+tabuada+" = "+i+"<br>"; // += é um operador para se acrescentar elementos sem perder os passos anteriores
        document.getElementById("test").style.color = "rgb(209, 167, 247)"
    }
}