programa
{
	
	funcao inicio()
	{
		real idade, total = 0.0, media = 0.0

		escreva("Digite '0' para parar o ciclo\n")
		para(inteiro i = 0; i >= 0; i++) {
			escreva("Insira a idade: ")
			leia(idade)
			se(idade != 0) {
				media = idade + media
				total = total + 1	
			}senao {
				pare
			}
		}escreva("\nMédia das idades: ", media = media/total)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 324; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */