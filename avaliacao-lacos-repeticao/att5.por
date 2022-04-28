programa
{
	
	funcao inicio()
	{
		inteiro num1, num2, num3, total = 0

		escreva("Digite um número: ")
		leia(num1)
		escreva("\nDigite um número: ")
		leia(num2)
		escreva("\nDigite um número: ")
		leia(num3)

		se(num1 >= 30 e num1 <= 90) {
			total = total + 1
		}se(num2 >= 30 e num2 <= 90) {
			total = total + 1
		}se(num3 >= 30 e num3 <= 90) {
			total = total + 1
		}escreva("O total de números entre 30 e 90 é de: ", total)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 342; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */