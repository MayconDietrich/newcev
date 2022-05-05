programa
{
	
	funcao inicio()
	{
		inteiro operacao, saldoEstoque[200][3], entrada, saida, logic = 0, indice = 0, codigo = 0, cadastros = 0
		cadeia nomeVeiculos[9999], estoque[200]

		enquanto(1 > 0){
			se(logic == 1) {
				pare
			}
			escreva("\nInsira a operação desejada: \n0) Sair \n1) Cadastrar novo veículo  \n2) Listar veículos cadastrados \n3) Consultar saldo de um prouto \n4) Listar veículos no estoque \n5) Retirar veículo do estoque \n6) Retirar veículos do cadastro \n7) Adicionar Veículo cadastrado ao estoque\n")
			leia(operacao)
			limpa()

			escolha(operacao){

				caso 0: logic = 1
				pare
				caso 1: 
					escreva("Insira o nome do veículo: ")
					para(inteiro i=0; i <= cadastros; i++){
						se(nomeVeiculos[i] == "") {
							leia(nomeVeiculos[i])
							cadastros++
							pare
						}
					}
					indice++
				pare
				caso 2:
					listaVeiculos(nomeVeiculos)
					escreva("\n")
				pare
				caso 3: 
					escreva("eh n fiz ainda\n")
				pare
				caso 4: 
					listaEstoque(estoque)
					escreva("\n\n")
				pare
				caso 5: 
					escreva("Insira o código do produto a ser retirado do estoque: ")
					leia(codigo)
					se(codigo >= indice) {
						escreva("Código inválido!!")
					}senao {
						escreva("foi")
					}
				pare
				caso 6: 
					codigo = 0
					escreva("Insira o código do produto a ser retirado: ")
					leia(codigo)
					nomeVeiculos[codigo] = ""
					estoque[codigo] = ""
					saldoEstoque[codigo][0] = 0
					saldoEstoque[codigo][1] = 0
					saldoEstoque[codigo][2] = 0
					escreva("Veículo retirado!\n")
					//matriz
					indice = codigo

				pare
				caso 7: 
					escreva("Insira o código do veículo que irá ir para o estoque: ")
					leia(codigo)
					se(estoque[codigo] == "") {
						estoque[codigo] = nomeVeiculos[codigo]
						escreva("Insira a quatidade de veículos a serem colocados o estoque: ")
						leia(entrada)
						saldoEstoque[codigo][0] = entrada
					}senao{
						escreva("Código de vícuo não cadastrado!\n")
					}
				pare
			}
		}
	}

	//imprime na tela os veículos já registrados
	funcao listaVeiculos(cadeia nomeVeiculos[]) {
		para(inteiro i=0; i < 9999; i++){
			se(nomeVeiculos[i] != "") {
				escreva("\n", i , ") ",  nomeVeiculos[i])
			}
		}
	}

	//imprime na tela apenas os veículos que estão no estoque
	funcao listaEstoque(cadeia estoque[]) {
		para(inteiro i=0; i < 200; i++){
			se(estoque[i] != "") {
				escreva(i , ") ",  estoque[i], "\n")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1519; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {saldoEstoque, 6, 20, 12}-{nomeVeiculos, 7, 9, 12}-{estoque, 7, 29, 7};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */