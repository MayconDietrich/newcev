programa
{
	
	funcao inicio()
	{
		inteiro idade, total15=0, total30=0, total45=0, total60=0, total61=0

		para(inteiro i = 0; i < 10; i++) {
			escreva("Insira a idade: ")
			leia(idade)
			se(idade <= 15) {
				total15 = total15 + 1
			}senao se(idade >= 16 e idade <= 30) {
				total30 = total30 + 1
			}senao se(idade >= 31 e idade <= 45) {
				total45 = total45 + 1
			}senao se(idade >= 46 e idade <= 60) {
				total60 = total60 + 1
			}senao {
				total61 = total61 + 1
			}
		}escreva("Total de pessoas por faixa etária: ", "\n15 anos: ", total15, "\n16 a 30 anos: ", total30, "\n31 a 45 anos: ", total60, "\nAcima de 61 anos: ", total61)



		escreva("\n\nTotal de pessoas na primeira faixa etária: ", (100*total15)/10, "% \nTotal de pessoas na última faixa etária:", (100*total61)/10, "%")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 803; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */