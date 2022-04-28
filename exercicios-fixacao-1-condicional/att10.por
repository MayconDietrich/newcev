programa
{
	
	funcao inicio()
	{
		real n1, n2, media
        
        escreva("Informe sua primeira nota\n")
        leia(n1)
        
        escreva("Informe sua segunda nota\n")
        leia(n2)
        
        media = (n1 + n2) / 2
        
        se(media >= 7) {
            escreva("Aprovado")
        } senao se(media < 7 e media >= 3) {
            escreva("Ficou de recuperação")
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
 * @POSICAO-CURSOR = 458; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */