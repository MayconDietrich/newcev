programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real distancia, totalCombustivel, media

		escreva("Digite a distância total percorrida: ")
		leia(distancia)
		escreva("Digite o total de combustível gasto: ")
		leia(totalCombustivel)

		media = distancia/totalCombustivel

		escreva("A média de consumo é de: ",mat.arredondar(media, 2))
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 366; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */