programa
{
	
	funcao inicio()
	{
		inteiro num[10], num2[10]

		para(inteiro i=0; i < 10; i++){
			escreva("Insira um número: ")
			leia(num[i])
		}

		para(inteiro i=0; i < 10; i++){
			se(num[i]%2 == 0) {
				num2[i] = num[i]/2
			}senao {
				num2[i] = num[i]*3
			}
		}
		limpa()
		para(inteiro i=0; i < 10; i++){
			escreva("Lista 1: ", num[i], "\n")
		}escreva("\n\n")
		para(inteiro i=0; i < 10; i++){
			escreva("Lista do balacobaco: ", num2[i], "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 440; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */