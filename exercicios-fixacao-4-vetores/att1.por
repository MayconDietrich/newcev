programa
{
	
	funcao inicio()
	{
		inteiro numeros[5]

		para(inteiro i = 0; i < 5; i++){
			escreva("\nInforme um número: ")
			leia(numeros[i])


			se(numeros[i] == 2 ou numeros[i] == 3 ou numeros[i] == 5 ou numeros[i] == 7) {
				escreva(numeros[i], " é primo")
			}
			se(numeros[i]%2 != 0 e numeros[i]%3 != 0 e numeros[i]%5 != 0 e numeros[i]%7 != 0) {
				escreva(numeros[i], " é primo")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 231; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */