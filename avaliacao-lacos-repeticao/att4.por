programa
{
	
	funcao inicio()
	{
		cadeia codigo
		real compra, totalCompras = 0.0
		real totalV = 0.0, totalP = 0.0
		
		para(inteiro i = 0; i <5; i++) {
			escreva("Insira o código da compra: ")
			leia(codigo)
			escreva("Insira o valor da compra: ")
			leia(compra)
			se(codigo == "V"){
				totalV = compra + totalV
			}senao{
				compra = compra + (compra/100)*10
				totalP = totalP + compra
			}totalCompras = compra + totalCompras			
		}escreva("\nCompras à vista: R$", totalV, "\nCompras a prazo: R$", totalP, "\nTotal das compras: R$", totalP + totalV)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 450; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */