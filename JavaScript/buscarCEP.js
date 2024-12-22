//Data e horário completo de hoje
var data = new Date();
//Dia do Mês
var diaDoMes= data.getDate();
//Mês Atual- Formato numérico- 0= janeiro,1=fevereiro,...,11=dezembro
var mes = data.getMonth();
//Mês Atual no formato literal em português
var mesesDoAno = ["Janeiro", "Fevereiro", "Março","Abril", "Maio", "Junho", "Julho",
                    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var mesLiteral = mesesDoAno[data.getMonth()];
//Ano atual com 4 dígitos
var ano = data.getFullYear();
//Dia da Semana- Formato numérico- 0=domingo,1=segunda,...,6-sábado
var diaDaSemana = data.getDay();
//Dia da Semana no formato literal em português
var diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira",
                    "Quinta-Feira", "Sexta-Feira", "Sábado"];
var diaLiteral = diasDaSemana[data.getDay()];

var horarioLocal = new Date().toLocaleTimeString();
var dataDeHoje = new Date().toDateString();
//Imprimir Data e Horário no cabeçalho da Página
document.getElementById("data").innerHTML="<strong>Hoje é:</strong> "
+diaLiteral+", "+diaDoMes+" de "+mesLiteral+" de "+ano+"."
+ "<br><strong>Horário de Brasília:</strong> "+horarioLocal;

function buscarCEP() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        document.getElementById('texto').innerHTML = this.responseText;
    }
}