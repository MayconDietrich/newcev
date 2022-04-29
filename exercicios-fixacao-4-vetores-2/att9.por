programa
{
	
	funcao inicio()
	{
		cadeia nomes[10], achar[10]
		inteiro posicao = 0

		para(inteiro i=0; i < 10; i++){
			escreva("Insira o nome: ")
			leia(nomes[i])
		}limpa()
		para(inteiro i=0; i >= 0; i++){
			escreva("\nInsira o nome de qualquer pessoa: ")
			leia(achar[i])
			posicao = i
			para(inteiro x=0; x < 10; x++){
				se(achar[posicao] == nomes[x]) {
					escreva("ACHEI")
					pare
				} se(x==9) {
					escreva("NÃO ACHEI")
					pare
				}
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 414; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */