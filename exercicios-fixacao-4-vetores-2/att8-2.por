programa
{
	
	funcao inicio()
	{
		inteiro par[10], impar[10], indiceP = 0, indiceI = 0, num
		enquanto(indiceP + indiceI < 10) {
			escreva("Insira um número: ")
			leia(num)

			se(num%2 == 0) {
				par[indiceP] = num
				indiceP++
			}senao {
				impar[indiceI] = num
				indiceI++
			}
		}

		listaPar(par, indiceP)
		listaImpar(impar, indiceI)

		para(inteiro i=0; i < indiceP; i++){
			escreva("\nnum par: ", par[i])
		}escreva("\n\n")
		para(inteiro i=0; i < indiceI; i++){
			escreva("\nnum ímpar: ", impar[i])
		}

		concatena(par, impar, indiceP, indiceI)
	}
	funcao listaPar(inteiro par[], inteiro indiceP) {
		inteiro supp = 0
		para(inteiro x=0; x < indiceP; x++) {
			para(inteiro i=0; i < indiceP - 1; i++){
				se(par[i] > par[i+1]){
				supp = par[i]
				par[i] = par[i+1]
				par[i+1] = supp
				}
			}
		}
	}

	funcao listaImpar(inteiro impar[], inteiro indiceI) {
		inteiro supp = 0
		para(inteiro x=0; x < indiceI; x++) {
			para(inteiro i=0; i < indiceI - 1; i++){
				se(impar[i] < impar[i+1]){
					supp = impar[i]
					impar[i] = impar[i+1]
					impar[i+1] = supp
				}
			}
		}
	}

	funcao concatena(inteiro par[], inteiro impar[], inteiro indiceP, inteiro indiceI) {
		inteiro numeros[10]
		inteiro indiceV = 0
			para(inteiro x=0; x < indiceP + x; x++){
				numeros[x] = par[x]
				indiceP -= 1
				escreva("\nVetor do balacobaco: ", numeros[x])
			}
			para(inteiro x=0; x < indiceI + indiceP; x++){
				numeros[x-indiceP] = impar[x]
				indiceI -= 1
				escreva("\nVetor do balacobaco: ", numeros[x+indiceP])
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1450; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */