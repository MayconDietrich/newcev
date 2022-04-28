programa
{
	
	funcao inicio()
	{

	
	inteiro nu1,nu10,nu100,valor,pagamento, troco, qtd100, qtd10, qtd1
	nu100 = 100
	nu10 = 10
	nu1 =1
	qtd100 = 0
	qtd10 = 0
	qtd1 = 0
	
		escreva("insira o valor da compra ")
		leia (valor)
		
		escreva("As notas disponiveis são de 1 de 10 e de 100\n")
		
		escreva("Insira o pagamento ")
		leia(pagamento)

		troco = pagamento - valor
		
	se (valor <= pagamento) {


	
		enquanto(troco-nu100 >= 0) {
			troco = troco-nu100
			qtd100 = qtd100 + 1
		}
		enquanto(troco-nu10 >= 0) {
			troco = troco-nu10
			qtd10 = qtd10 + 1
		}
		enquanto(troco-nu1 >= 0) {
			troco = troco-nu1
			qtd1 = qtd1 + 1
		}

		escreva("Serão ", qtd100, " notas de 100 , ", qtd10, " de 10, ", qtd1, " de 1\n" )
		escreva("Totalizando ", troco = pagamento - valor, " reais de troco")

		
		} senao {
			se(valor > pagamento){
				escreva("Pagamento Negado")
				}
			} 
	
	}
		
		
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 779; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */