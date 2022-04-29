programa
{
	
	funcao inicio()
	{
		inteiro fibonacci[40], sub = 1

		fibonacci[0] = 1
		fibonacci[1] = 1

		para(inteiro i=2; i < 40; i++){
			fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
		}
		para(inteiro i=0; i < 40; i++){
			escreva("\n", fibonacci[i])
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 258; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */