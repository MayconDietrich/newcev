programa
{
	
	funcao inicio()
	{
		inteiro num[5], soma = 0

		para(inteiro i=0; i < 5; i++){
			escreva("Insira um número: ")
			leia(num[i])
			soma = soma + num[i]
		}
		escreva("Soma dos números: ", soma)
		escreva("\nNúmeros: ")
		para(inteiro i=0; i < 5; i++){
			escreva("\n", num[i])
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 296; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */