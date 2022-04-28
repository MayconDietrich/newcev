programa
{
	
	funcao inicio()
	{
		real sBruto, sLiquido
        
        escreva("Informe seu salário bruto\n")
        leia(sBruto)
        
        se(sBruto < 2000) {
            sLiquido = (sBruto*10)/100
            escreva("Seu salário final ficou em ", sBruto-sLiquido)
        } senao {
            sLiquido = (sBruto*20)/100
            escreva("Seu salário final ficou em ", sBruto-sLiquido)
        }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 417; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */