programa
{
	
	funcao inicio()
	{
		cadeia nomes[5]
		inteiro indice = 4

		para(inteiro i=0; i < 5; i++){
			escreva("Insira um nome: ")
			leia(nomes[i])
		}
		para(inteiro i=0; i < 5; i++){
			escreva("\n", nomes[indice])
			indice = indice - 1
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 189; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */