programa
{
	
	funcao inicio()
	{
		inteiro num[10], par[10], impar[10], indiceP = 0, indiceI = 0, supp = 0
		logico veirfy

		//loop que pede ao usuário inserir 10 números inteiros aleatórios
		para(inteiro i=0; i < 10; i++){
			escreva("Insira um número: ")
			leia(num[i])

			//variável lógica que recebe o retorno de uma função que verifica se o número inserido é
			//par ou ímpar
			veirfy = verifica(num[i])

			//Se o retorno for verdadeiro, atribui-se ao array par o valor inserido, caos contrário
			//ao array ímpar
			se(veirfy == verdadeiro){
				par[indiceP] = num[i]
				//Avança a posição do array par
				indiceP++
			}senao{
				impar[indiceI] = num[i]
				//Avança a posição do array ímpar
				indiceI++
			}
		}

		veirfy = verdadeiro

		//Oganização dos números em ordem crescente e decrescente
		enquanto(veirfy == verdadeiro){
			veirfy = falso
			//Organização dos números pares
			para(inteiro i=0; i < 10 - 1; i++){
				se(par[i] > par[i+1]){
					supp = par[i]
					par[i] = par[i+1]
					par[i+1] = supp
					veirfy = verdadeiro
				}
			}
			
			//Organização dos números ímpares
			para(inteiro i=0; i < 10 - 1; i++){
				se(impar[i] < impar[i+1]){
					supp = impar[i]
					impar[i] = impar[i+1]
					impar[i+1] = supp
					veirfy = verdadeiro
				}
			}
		}

		//Limpa a tela
		limpa()

		escreva("\nNúmeros pares em ordem crescente: ")
		//Loop que imprime na tela o array dos números pares em ordem crescente
		para(inteiro i=0; i < 10; i++){
			se(par[i] != 0){
				escreva("\n",par[i])
			}
		}
		escreva("\n\nNúmeros ímpares em ordem decrescente: ")
		//Loop que imprime na tela o  array dos números ímpares em ordem decrescente
		para(inteiro i=0; i < 10; i++){
			se(impar[i] != 0){
				escreva("\n",impar[i])
			}
		}
	}

	//Função que verifica se o número é par ou ímpar
	funcao logico verifica(inteiro num) {
		se (num%2 == 0) {
			retorne verdadeiro
		}senao {
			retorne falso
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1670; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */