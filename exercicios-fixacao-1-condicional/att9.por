programa
{
	
	funcao inicio()
	{
		real compra, reajuste
        
        escreva("Qual foi o valor do produto?\n")
        leia(compra)
        
        se(compra < 200) {
            reajuste = (compra*50)/100
            escreva("O valor final do produto ficou em ", compra+reajuste)
        } senao {
            reajuste = (compra*30)/100
            escreva("O valor final do produto ficou em ", compra+reajuste)
        }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 433; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */