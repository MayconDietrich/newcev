programa
{
	
	funcao inicio()
	{
		inteiro num[10], invert[10], posicao = 9

		para(inteiro i=0; i < 10; i++){
			escreva("Insira um número: ")
			leia(num[i])
			invert[posicao] = num[i]
			posicao = posicao - 1
		}
		limpa()
		escreva("Ordem inversa: ")
		para(inteiro i=0; i < 10; i++){
			escreva("\n", invert[i])
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 226; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */