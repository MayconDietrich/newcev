programa
{
	
	funcao inicio()
	{
		
		inteiro num[10], div

		para(inteiro i=0; i < 10; i++){
			escreva("Insira um número: ")
			leia(num[i])
		}
		escreva("Insira um número inteiro: ")
		leia(div)

		para(inteiro i=0; i < 10; i++){
			se(num[i]%div == 0) {
				escreva(num[i], " é divisivel por ", div, "\n")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 312; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */