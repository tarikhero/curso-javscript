//----------------------------------------------------------------------------------------------------------------------------------------
//Mudar o título por outro valor
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//----------------------------------------------------------------------------------------------------------------------------------------
//pegar os dados dos pacientes, verifica se os dados são validos e calcula o imc

//
var pacientes = document.querySelectorAll (".paciente");

//mostrar o tamanho da array
//console.log(pacientes.length);

//faz o calculo com todos os pacientes, de acordo com o tamanho da tabela, e quantos pacientes tem
for (var i = 0 ; i < pacientes.length ; i++){

	//para cada vez que o laço for executado, os dados serão colhidos do paciente equivalente ao numero do laço
	var paciente = pacientes [i];

	//pegar o peso da primeira linha
	var tdPeso = paciente.querySelector (".info-peso");
	//armazenar em "peso" conteúdo da tag <td>
	var peso = tdPeso.textContent;

	//pegar a altura da primeira linha
	var tdAltura = paciente.querySelector (".info-altura");
	//armazenar em "altura" conteúdo da tag <td>
	var altura = tdAltura.textContent;

	//pegar o imc da tabela
	var tdImc = paciente.querySelector (".info-imc");

	//Seta como inicialmente válido tanto o peso como a altura
	var pesoEhValido = true;
	var alturaEhValida = true;


	//testa se o valor do peso não está muito acima ou abaixo do esperado
	if(peso<=0 || peso>=300){
		//mostra no console que está inválido
		console.log("Peso inválido");
		//seta o peso como falso (inválido)
		pesoEhValido = false;
		//exibe na tabela, no campo de imc, o erro que o peso está inválido
		tdImc.textContent = "Peso inválido";

			//mudar a cor da fonte para vermelho quando estiver peso inválido
			//paciente.style.color = "red";

			//Muda a cor da caixa inteira
			//paciente.style.backgroundColor = "lightcoral";

		//adiciona na TR da tabela, a classe "paciente-invalido", localizado no index.css
		paciente.classList.add("paciente-invalido");
	}

	//testa se o valor da altura não está muito acima ou abaixo do esperado
	if(altura<=0 || altura>=3.0){
		//mostra no console que está inválido
		console.log("Altura inválida");
		//seta a altura como falso (inválido)
		alturaEhValida = false;
		//exibe na tabela, no campo de imc, o erro que a altura está inválida
		tdImc.textContent = "Altura inválida";

			//mudar a cor da fonte para vermelho quando estiver peso inválido
			//paciente.style.color = "red";

			//Muda a cor da caixa inteira
			//paciente.style.backgroundColor = "lightcoral";

		//adiciona na TR da tabela, a classe "paciente-invalido", localizado no index.css
		paciente.classList.add("paciente-invalido");
	}

	//Verifica se altura e peso são validos, se sim, calcula imc
	if (alturaEhValida && pesoEhValido){
		//calcular o imc
		var imc = peso/(altura*altura);

		//Atribuir o valor do Imc na tabela
		tdImc.textContent = imc.toFixed(2);
	}
}


//mostrar o imc no console
//console.log(imc);
//----------------------------------------------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------------------------------------------