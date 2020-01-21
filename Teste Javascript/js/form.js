//criar variavel para o botão 
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", mandarPaciente);

function mandarPaciente(){
	//previne que o botão faça a sua ação padrão, que no caso do Form é enviar os dados do formulario e atualizar a página
	event.preventDefault();

	
	//criar uma variavel para armazenar o formulario
	var form = document.querySelector("#form-adiciona");

	//criando variaveis para armazenar os valores que são digitados no campo
	var paciente = obtemPacienteDoFormulario(form);

	//Cria a tr e a td do paciente
	var pacienteTr = montaTr(paciente);

	//Adiciona o paciente na Tabela
	var tabela = document.querySelector("#tabela-pacientes");

	//colocar a Tr criada dentro da tabela
	tabela.appendChild(pacienteTr);
}


function obtemPacienteDoFormulario(form){
	//cria um objeto chamado paciente, para criar um objeto basta colocar chaves 
				//após criar o objeto, colocamos os atributos, as caracteristicas daquele objeto

	var paciente = {
		//pega os valores do formulario
		nome: form.nome.value, 
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		//pega os valores de peso e altura do formulario e passa como parametro para a função calculaImc
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}


function montaTr(paciente){	
	//cria a Tr da tabela
	var pacienteTr = document.createElement("tr");


	//Cria as Tds da tabela
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	//para atribuir o conteúdo da variavel (que vem do formulário) na Td
	nomeTd.textContent = paciente.nome;
	pesoTd.textContent = paciente.peso;
	alturaTd.textContent = paciente.altura;
	gorduraTd.textContent = paciente.gordura;
	imcTd.textContent = paciente.imc;


	//appendChild serve para indicar que o que está entre parenteses (nomeTd), pertence a quem chama (pacienteTr)
					//basicamente para colocar as TDs dentro da TR
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	return pacienteTr;
}