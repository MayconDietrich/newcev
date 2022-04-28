programa
{
	funcao inicio() {
		inteiro num[10]

		para(inteiro i=0; i < 10; i++){
			escreva("\nInsira um número: ")
			leia(num[i])

			num[i] = num[i]*num[i]
		}

		para(inteiro i=0; i < 10; i++){
			escreva("\n",i,") ",num[i])
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 239; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */