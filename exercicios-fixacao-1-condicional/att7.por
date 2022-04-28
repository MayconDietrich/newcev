programa
{
	
	funcao inicio()
	{
		real n1, n2    
        
        escreva("Insira o primeiro número\n")
        leia(n1)
        
        escreva("Insira o segundo número\n")
        leia(n2)
        
        se (n1 > n2) {
            escreva(n1," é maior que ",n2)
        } senao se(n1 == n2) {
            escreva("Os números são iguais")
        } senao {
            escreva(n2," é maior que ",n1)
        }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 420; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */