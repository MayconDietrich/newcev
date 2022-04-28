programa
{
	
	funcao inicio()
	{
	real n1, n2, media
        
        escreva("Insira a primeira nota\n")
        leia(n1)
        
        escreva("Insira a segunda nota\n")
        leia(n2)
        
        media = (n1 + n2) / 2
        
        se(media >= 7) {
            escreva("Aprovado!!")
        } senao {
            escreva("Reprovado")
        }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 170; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */