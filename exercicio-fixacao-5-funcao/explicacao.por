programa
{
	
	funcao inicio()
	{
		escreva(soma(1, 2))
		escreva("\n")
		escreva(media(1.0, 2.5, 3.0))
		escreva("\n")
		escreva(nomeCompleto("Maycon", "Dietrich"))
		escreva("\n")
		escreva(letras('a'))
		escreva("\n")
		numContrario()
	}

	//Essa função recebe dois parâmetros do tipo inteiro, e retorna um terceiro valor também do tipo inteiro, que é a 
	//soma dos dois valores recebidos pela função
	funcao inteiro soma(inteiro n1, inteiro n2) {
		retorne  n1 + n2
	}

	//Essa função recebe três parâmetros do tipo real, e retorna um valor que obrigatóriamente será real
	//e esse valor retornado será a média dos três valores
	funcao real media(real m1, real m2, real m3) {
		retorne (m1 + m2 + m3)/3
	}

	//Essa função recebe dois valores do tipo cadeia, nome e sobrenome, e concatena eles retornando o nome completo
	//do tipo cadeia
	funcao cadeia nomeCompleto(cadeia nome, cadeia sobrenome) {
		retorne nome + " " + sobrenome
	}

	//Essa função recebe um valor do tipo caracter, e retorna a valor caracter escrito na tela
	funcao caracter letras(caracter letra) {
		retorne letra
	}
	
	//Essa função não recebe parâmetros, e pede ao usuário que insira dois números, e depois imprime na tela os
	//números na ordem contrária de que foram inseridos
	funcao numContrario() {
		real num1 = 0.0, num2 = 0.0
		escreva("Insira um número: ")
		leia(num1)
		escreva("Insira um número: ")
		leia(num2)

		escreva("\n", num2, " ", num1)
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 222; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */