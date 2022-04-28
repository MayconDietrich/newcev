programa
{
	
	funcao inicio()
	{
		inteiro num[8], maior = 0, posicao = 0

		para(inteiro i=0; i < 8; i++){
			escreva("Insira um número: ")
			leia(num[i])
			se(num[i] >= maior) {
				maior = num[i]
				posicao = i
			}
		}escreva("\nMaior:", maior, " posição: ", posicao)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 278; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */