programa
{
	
	funcao inicio()
	{
		real faturamento = 0.0, saldo = 0.0
		inteiro i

		para(i = 0; i <5; i++){
			escreva("Insira o valor: ")
			leia(saldo)
			faturamento = saldo + faturamento
		}se(faturamento>=54000) {
			escreva("O faturamento foi de: ", faturamento)
			escreva("\nE foi superado em: ", (faturamento - 54000))
		}senao {
			escreva("O faturamento foi de: ", faturamento)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 215; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */