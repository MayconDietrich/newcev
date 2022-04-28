programa
{
	
	funcao inicio()
	{
		inteiro num, multi = 0
		
		escreva("Digite um número: ")
		leia(num)

		escreva(num ,"x ")

		multi = num

		faca{
			num = num - 1
			multi = num * multi
			escreva(num ,"x ")
		}enquanto(num > 1)
		escreva(" = ", multi)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 196; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */