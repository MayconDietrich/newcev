programa
{
	
	funcao inicio()
	{

	cadeia n, s
	escreva("Insira o primerio nome: ")
	leia(n)

	escreva("Insira o sobrenome: ")
	leia(s)
	escreva(nomeCompleto(n, s))
	}

	funcao cadeia nomeCompleto(cadeia n, cadeia s) {
		retorne(n + " " + s)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 173; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */