programa
{
	
	funcao inicio()
	{
		real menor = 10000.0, maior = 0.0, altura, i = 0.0

			escreva("Digite a altura: ")
			leia(altura)

		enquanto(i <= 15) {
			i++
			se(altura < menor) {
					menor = altura
				}senao {
						maior = altura
					}
			 escreva("Digite a altura: ")
			leia(altura)
			}
			escreva("maior altura: ", maior, " menor: ", menor)
		}
	}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 254; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */