programa
{
	
	funcao inicio()
	{
		real altura[10], media = 0.0

		para(inteiro i=0; i < 10; i++){
			escreva("Insira a altura: ")
			leia(altura[i])
			media = altura[i] + media
		}
		media = media/10
		para(inteiro i=0; i < 10; i++){
			se(altura[i] >= media) {
				escreva("\n", altura[i])
			}
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 307; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */