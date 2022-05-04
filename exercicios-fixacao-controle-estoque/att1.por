programa
{
	
//saldo = movimentação de entrada + movimentação de saída, quantas vezes o veículo saiu e entrou
	funcao inicio()
	{
		inteiro codigo, operacao, indice = 0, entrada[200], saida[200], ent = 0, sai = 0, cadastros = 0
		logico verifica = falso, x = falso
		cadeia totalVeiculos[200], estoque[200], nomeVeiculo




		para(inteiro i=0; i >= 0; i++) {
			escreva("\nInsira a operação desejada: \n0) Cadastrar novo veículo \n1) Listar veículos cadastrados \n2) Consultar saldo de um produto \n3) Retirar veículo do estoque \n4) Sair \n5) Retirar veículos do cadastro \n6) Listar veículos no estoque\n")
			leia(operacao)
			
			limpa()
				se(operacao == 0) {
					limpa()
					ent = 0
					escreva("Insira o nome do veículo a ser registrado: ")
					leia(nomeVeiculo)
					para(inteiro b=0; b <= cadastros; b++){
						se(totalVeiculos[b] == "") {
							totalVeiculos[b] = nomeVeiculo
							cadastros++
							pare
						}senao {
							totalVeiculos[cadastros] = nomeVeiculo
							cadastros++
							pare
						}
					}
					escreva("Quantos veículos irá por no estoque? ")
					leia(ent)//armazena em uma variável o números de carros que irá por no estoque
					se(ent == 0) {
						limpa()
						escreva("Número de veículos inválido!")//se a entrada for "0", resulta como entrada inválida
					}senao{
						//Loop que a cada unidade da variavel "ent", adiciona 1 à posição do vetor que registra as entradas
						indice = cadastros-1
						para(inteiro q=0; q < ent; q++){
							entrada[indice] += 1
						}
						estoque[indice] = totalVeiculos[indice]
						indice++	
					}
				}se(operacao == 1) {
					listaVeiculos(totalVeiculos)//funcao que lista todos os veículos do cadastro
				}senao se(operacao == 2) {
					escreva("Insira o código do produto: ")
					leia(codigo)
					//verifica se há o cadastro do veículo
					se(totalVeiculos[codigo] != "") {
						//imprime na tela o veículo corresopondente ao código inserido
						escreva("Número de entradas: ", entrada[codigo], " Número de saídas: ", saida[codigo])	
					}senao {
						limpa()
						escreva("Esse produto não está cadastrado!")
					}
				}senao se(operacao == 3) {
					codigo = 0
					sai = 0
					escreva("Insira o código do produto a ser retirado: ")
					leia(codigo)
					se(codigo > indice) {
						escreva("Código inválido!!")
					}senao {
						escreva("Insira o total de veículos a serem retirados: ")
						leia(sai)
						se(sai == 0 ou sai > entrada[codigo]) {
							limpa()
							escreva("Número de veículos inválido!\n")
						}senao{
								para(inteiro q=0; q < sai; q++){
									saida[codigo] += 1
									entrada[codigo] -= 1
							}
								estoque[indice] = totalVeiculos[indice]
								escreva("Veículo(s) retirado(s)!\n")
								se(entrada[codigo] == 0) {
									estoque[codigo] = ""
								}		
							}
						}	
				}senao se(operacao == 4) {
					pare
				}senao se(operacao == 5) {
					codigo = 0
					escreva("Insira o código do produto a ser retirado: ")
					leia(codigo)
					totalVeiculos[codigo] = ""
					estoque[codigo] = ""
					escreva("Veículo retirado!\n")
					entrada[codigo] = 0
					saida[codigo] = 0
					indice = codigo
				}senao se(operacao == 6) {
					listaEstoque(estoque)
				} 
		}
	}

	//imprime na tela os veículos já registrados
	funcao listaVeiculos(cadeia totalVeiculos[]) {
		para(inteiro i=0; i < 200; i++){//Loop que repete 200 vezes ou até que encontre uma posição vazia no vetor, e imprime na tela o veículo
			se(totalVeiculos[i] != "") {
				escreva("\n", i , ") ",  totalVeiculos[i])
			}
		}
	}
	
	//imprime na tela apenas os veículos que estão no estoque
	funcao listaEstoque(cadeia estoque[]) {
		para(inteiro i=0; i < 200; i++){
			se(estoque[i] != "") {
				escreva("\n", i , ") ",  estoque[i])
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1447; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {entrada, 7, 40, 7}-{saida, 7, 54, 5}-{totalVeiculos, 9, 9, 13}-{estoque, 9, 29, 7}-{nomeVeiculo, 9, 43, 11};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */