programa
{
	
	funcao inicio()
	{
		inteiro vetor[2], matriz[2][2]

		//posicionando um número na matriz
		/*matriz[0][1] = 10
		matriz[1][1] = 5
		matriz[0][0] = 1
		matriz[1][0] = 2

		
		
		//Perocrrendo as linhas e colunas
		//no primeiro loop, percorremos as linhas, no segundo loop, percorremos as colunas
		//lembrar sempre de alterar a variavel inrementadora dos dois loops
		para(inteiro linha=0; linha < 2; linha++){

			//Percorre colunas
			para(inteiro coluna=0; coluna < 2; coluna++){
				escreva(", ", matriz[linha][coluna])
			}
		}*/

		cadeia alunos[] = {"Bruno", "João", "Maria"}
		real medias[3]
		real notas[3][3] = {{7.0,6.0,4.0}, {6.5,8.5,8.7}, {7.8,5.7,5.9}}


		para(inteiro linha=0; linha < 3; linha++){
			real soma = 0.0
			para(inteiro i=0; i < 3; i++){
				soma += notas[linha][i]
			}
			medias[linha] = soma / 3
		}
				
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 113; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {matriz, 6, 20, 6}-{alunos, 27, 9, 6}-{medias, 28, 7, 6}-{notas, 29, 7, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */