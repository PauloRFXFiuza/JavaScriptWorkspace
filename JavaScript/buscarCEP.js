//Data e horário completo de hoje
const data = new Date();
//Dia do Mês
const diaDoMes= data.getDate();
//Mês Atual- Formato numérico- 0= janeiro,1=fevereiro,...,11=dezembro
const mes = data.getMonth();
//Mês Atual no formato literal em português
const mesesDoAno = ["Janeiro", "Fevereiro", "Março","Abril", "Maio", "Junho", "Julho",
                    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const mesLiteral = mesesDoAno[data.getMonth()];
//Ano atual com 4 dígitos
const ano = data.getFullYear();
//Dia da Semana- Formato numérico- 0=domingo,1=segunda,...,6-sábado
const diaDaSemana = data.getDay();
//Dia da Semana no formato literal em português
const diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira",
                    "Quinta-Feira", "Sexta-Feira", "Sábado"];
const diaLiteral = diasDaSemana[data.getDay()];

const horarioLocal = new Date().toLocaleTimeString();
const dataDeHoje = new Date().toDateString();
//Imprimir Data e Horário no cabeçalho da Página
document.getElementById("data").innerHTML="<strong>Hoje é:</strong> "
+diaLiteral+", "+diaDoMes+" de "+mesLiteral+" de "+ano+"."
+ "<br><strong>Horário de Brasília:</strong> "+horarioLocal;

function buscarCEP() {
    const input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        console.log(this.responseText);
        //Conversão texto JSON em objeto
        const objeto= JSON.parse(this.responseText);
        //Recuperando alguns elementos do objeto
        const endereco= [objeto.cep, objeto.logradouro, objeto.complemento,
        objeto.bairro, objeto.localidade, objeto.estado, objeto.uf,
        objeto.regiao, objeto.ddd];
        //Imprimindo os resultados na página HTML
        if (endereco[0] === undefined){
            document.getElementById("texto").innerHTML = 
            "<strong>O CEP digitado não existe.<br>Favor clicar no botão "+ 
            "Nova Consulta para realizar uma nova consulta de CEP.</strong>"    
        }else{
            document.getElementById("texto").innerHTML =
            "<strong>CEP:</strong> "+endereco[0]+
            "<br><strong>Logradouro:</strong> "+endereco[1]+
            "<br><strong>Complemento:</strong> "+endereco[2]+
            "<br><strong>Bairro:</strong> "+endereco[3]+
            "<br><strong>Município:</strong> "+endereco[4]+
            "<br><strong>Estado:</strong> "+endereco[5]+
            " ("+endereco[6]+")"+
            "<br><strong>Região:</strong> "+endereco[7]+
            "<br><strong>DDD:</strong> "+endereco[8];
        }
    }
}
function novaConsulta() {
    //Atualizar a Página
    location.reload();
}