programa
{
	
	funcao inicio()
	{
	cadeia sexo 
	real altura,imc

	escreva("Digite sua altura: ")
	leia(altura)
	escreva("Digite seu sexo: ")
	leia(sexo)

	se(sexo == "feminino") {
		imc = (62.1 * altura) - 44.7
		escreva("Seu peso ideal é de: ", imc, "Kg")
	}senao {
		imc = (72.7 * altura) - 58
		escreva("Seu peso ideal é de: ", imc, "Kg")
	}
	
		
}}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 180; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */