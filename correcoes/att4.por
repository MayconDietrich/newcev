programa
{
	
	funcao inicio()
	{
		inteiro num[5], invert[5], posicao = 4

		para(inteiro i=0; i < 5; i++){
			escreva("Insira um número: ")
			leia(num[i])
			invert[posicao] = num[i]
			posicao = posicao - 1
		}
		para(inteiro i=0; i < 5; i++){
			escreva(invert[i])
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 211; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */