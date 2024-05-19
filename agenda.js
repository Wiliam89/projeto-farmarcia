var buttonAgendamento = document.getElementById('buttonAgendamento');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoAgendamento = document.getElementById('novoAgendamento');
var formNovoAgendamento = document.getElementById ('formNovoAgendamento');
var inputNomePaciente = document.getElementById ('nomePaciente');
var inputDataAgendamento = document.getElementById ('dataAgendamento');
var tabelaAgendamentos = document.getElementById ('tabelaAgendamentos');
var inputAtendente = document.getElementById ('atendente');

var listaAgendamentos = [];
 
function removerAgendamento(agendamento) {
  var posicao = agendamento.target.getAttribute('data-agendamento')
  listaAgendamentos.splice(posicao, 1);
  atualizarTabelaAgendamentos();  
}

function atualizarTabelaAgendamentos() {
  console.log('Chamar atualizar tabela agendamentos');
    if(listaAgendamentos.length === 0) {
       tabelaAgendamentos.innerHTML = '<tr><td colspan="3">Nenhum agendamento</td></tr>';
       return;
    }
    tabelaAgendamentos.innerHTML ='';
    for (var i = 0; i < listaAgendamentos.length; i++) {
      var agendamento = listaAgendamentos[i];
      var linha = document.createElement('tr');
      var celulaNome = document.createElement('td'); 
      var celulaData = document.createElement('td'); 
      var celulaAcoes = document.createElement('td');
      var botaoExcluir = document.createElement('button');
      botaoExcluir.setAttribute('data-agendamento', i);
      botaoExcluir.classList.add('btn');
      botaoExcluir.classList.add('btn-danger');
      botaoExcluir.classList.add('btn-sm');
      botaoExcluir.addEventListener('click', removerAgendamento);
      celulaNome.innerText = agendamento.nome;
      celulaData.innerText = agendamento.data;
      botaoExcluir.innerText = "remover";
      celulaAcoes.appendChild(botaoExcluir);
      linha.appendChild(celulaNome);
      linha.appendChild(celulaData);
      linha.appendChild(celulaAcoes);
      tabelaAgendamentos.appendChild(linha);
    }
  } 

function limparNovoAgendamento() {
  inputNomePaciente.value = '';
  inputDataAgendamento.value = '';
  inputAtendente.value = '';
}

function mostrarNovoAgendamento() {
   novoAgendamento.classList.remove('d-none');
}
function ocultarNovoAgendamento() {
  novoAgendamento.classList.add('d-none');
  limparNovoAgendamento();
}

function novoAgendamentoValido(nomePaciente, dataAgendamento) {

  if (nomePaciente.trim().length === 0) return false;
  var timestampAgendamento = Date.parse(dataAgendamento);
  if (isNaN(timestampAgendamento)) return false;
  var timestampAtual = (new Date()).getTime();
  if (timestampAgendamento < timestampAtual) return false;
  return true;
  } 

function salvarNovoAgendamento() {
  var nomePaciente = inputNomePaciente.value;
  var dataAgendamento = inputDataAgendamento.value;
  var atendente = inputAtendente.value;
  if (novoAgendamentoValido(nomePaciente, dataAgendamento)) {
    console.log('Agendamento Valido!');
    listaAgendamentos.push({
      nome: nomePaciente,
      data: new Date(dataAgendamento),
      atendente: atendente,
    });
    atualizarTabelaAgendamentos();
    ocultarNovoAgendamento();
  } else {
      console.log('Agendamento invalido!');
    }
} 

buttonAgendamento.addEventListener('click', mostrarNovoAgendamento);
buttonCancelar.addEventListener('click', ocultarNovoAgendamento);
formNovoAgendamento.addEventListener('submit', salvarNovoAgendamento);
window.addEventListener('load', atualizarTabelaAgendamentos);

