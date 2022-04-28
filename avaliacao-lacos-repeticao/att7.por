programa
{
	
	funcao inicio()
	{
		inteiro num, multi = 0
		
		escreva("Insira um número: ")
		leia(num)

		para(inteiro i = 0; i <= 10; i++) {
			escreva("\n", num, " x ", multi, " = ", num * multi)
			multi = multi + 1
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 138; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */