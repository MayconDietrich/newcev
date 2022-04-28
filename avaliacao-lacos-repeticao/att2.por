programa
{
	
	funcao inicio()
	{
		real valorCompra = 0.0, valorFinal = 0.0
		inteiro desc = 0

		escreva("Insira o valor da compra: ")
		leia(valorCompra)
		valorFinal = valorCompra

		se(valorCompra >= 500) {
			enquanto(valorFinal > 500) {
				valorFinal = valorFinal - 100
				se(desc <= 25) {
					desc = desc + 1	
					}
				}
				valorFinal = valorCompra - ((valorCompra/100)*desc)
				escreva("Valor da compra: ", valorCompra, "\nPorcentagem de desconto: ", desc, "%", "\nValor final: ", valorFinal)	
			}senao{
				escreva("Valor final: ", valorCompra)
			}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 187; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */