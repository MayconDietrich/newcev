programa
{
	
	funcao inicio()
	{
		inteiro velha[3][3], input = 0
		cadeia player, jojo[3][3], player2
		inteiro x = 0, pareCodigo = 0
		logico logic = verdadeiro



		//escreva("    |     |\n----|-----|-----\n    |     |\n----|-----|-----\n    |     | ")
		enquanto(1>0) {
			limpa()
			escreva("\nEscolha: \n  o x\n")
			leia(player)
			se(player != "x" e player != "o") {
				escreva("Escolha inválida")
			}senao {
				pare
			}
		}
			se(player == "x") {
				player2 = "o"
			}senao {
				player2 = "x"
			}
		para(inteiro linha=0; linha < 3; linha++){
			para(inteiro coluna=0; coluna < 3; coluna++){
				velha[linha][coluna] = x
				x++
			}
		}
		limpa()
		para(inteiro i=0; i < 10; i++){
			escreva("Jogada do player 1: \n")
			jogoApenas(velha,jojo,player,input)
			verificaVitoria(jojo, player, pareCodigo)
			escreva("Jogada do player 2: \n")
			jogoApenasPlayer2(velha,jojo,player2,input)
			escreva("\n")
			verificaVitoria2(jojo, player2, pareCodigo)
		}
	}
	funcao jogoApenas(inteiro velha[][], cadeia jojo[][], cadeia player, inteiro input) {
		para(logico i = falso; i!= verdadeiro; i = i){
		escreva("tabela de posições: \n")
			escreva(" ",velha[0][0],"  |  ",velha[0][1],"  |  ",velha[0][2],"\n----|-----|-----\n ",velha[1][0],"  |  ",velha[1][1],"  |  ",velha[1][2],"\n----|-----|-----\n ",velha[2][0],"  |  ",velha[2][1],"  |  ",velha[2][2]," ")
			escreva("\n\n")
			escreva(" ",jojo[0][0],"  |  ",jojo[0][1],"  |  ",jojo[0][2],"\n----|-----|-----\n ",jojo[1][0],"  |  ",jojo[1][1],"  |  ",jojo[1][2],"\n----|-----|-----\n ",jojo[2][0],"  |  ",jojo[2][1],"  |  ",jojo[2][2]," ")
			escreva("\nInsira a posição de onde você irá por a marca \n")
			leia(input)
			limpa()
			escolha(input){

			caso 0: se(jojo[0][0] == "") {jojo[0][0] = player i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 1: se(jojo[0][1] == "") {jojo[0][1] = player i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 2: se(jojo[0][2] == "") {jojo[0][2] = player i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 3: se(jojo[1][0] == "") {jojo[1][0] = player i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 4: se(jojo[1][1] == "") {jojo[1][1] = player i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 5: se(jojo[1][2] == "") {jojo[1][2] = player i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 6: se(jojo[2][0] == "") {jojo[2][0] = player i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 7: se(jojo[2][1] == "") {jojo[2][1] = player i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 8: se(jojo[2][2] == "") {jojo[2][2] = player i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			}
		}
	}
	funcao jogoApenasPlayer2(inteiro velha[][], cadeia jojo[][], cadeia player2, inteiro input) {
		para(logico i = falso; i!= verdadeiro; i = i){
		escreva("tabela de posições: \n")
			escreva(" ",velha[0][0],"  |  ",velha[0][1],"  |  ",velha[0][2],"\n----|-----|-----\n ",velha[1][0],"  |  ",velha[1][1],"  |  ",velha[1][2],"\n----|-----|-----\n ",velha[2][0],"  |  ",velha[2][1],"  |  ",velha[2][2]," ")
			escreva("\n\n")
			escreva(" ",jojo[0][0],"  |  ",jojo[0][1],"  |  ",jojo[0][2],"\n----|-----|-----\n ",jojo[1][0],"  |  ",jojo[1][1],"  |  ",jojo[1][2],"\n----|-----|-----\n ",jojo[2][0],"  |  ",jojo[2][1],"  |  ",jojo[2][2]," ")
			escreva("\nInsira a posição de onde você irá por a marca \n")
			leia(input)
			limpa()
			escolha(input){

			caso 0: se(jojo[0][0] == "") {jojo[0][0] = player2 i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 1: se(jojo[0][1] == "") {jojo[0][1] = player2 i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 2: se(jojo[0][2] == "") {jojo[0][2] = player2 i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 3: se(jojo[1][0] == "") {jojo[1][0] = player2 i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 4: se(jojo[1][1] == "") {jojo[1][1] = player2 i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 5: se(jojo[1][2] == "") {jojo[1][2] = player2 i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 6: se(jojo[2][0] == "") {jojo[2][0] = player2 i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 7: se(jojo[2][1] == "") {jojo[2][1] = player2 i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			caso 8: se(jojo[2][2] == "") {jojo[2][2] = player2 i = verdadeiro}senao{escreva("Essa posição ja está sendo usada\n\n")}
			pare
			}
		}
	}

	funcao verificaVitoria(cadeia jojo[][], cadeia player, inteiro pareCodigo) {
			para(inteiro x=0; x < 3; x++){
				se(jojo[x][0] == player e jojo[x][1] == player e jojo[x][2] == player ) {
					escreva("Você ganhou\n")
				}
				se(jojo[0][x] == player e jojo[1][x] == player e jojo[2][x] == player ) {
					escreva("Você ganhou\n")
				}
				se(jojo[0][0] == player e jojo[1][1] == player e jojo[2][2] == player ) {
					escreva("Você ganhou\n")
				}
		}
	}
		funcao verificaVitoria2(cadeia jojo[][], cadeia player2, inteiro pareCodigo) {
			para(inteiro x=0; x < 3; x++){
				se(jojo[x][0] == player2 e jojo[x][1] == player2 e jojo[x][2] == player2 ) {
					escreva("Você ganhou\n")
				}
				se(jojo[0][0] == player2 e jojo[1][1] == player2 e jojo[2][2] == player2 ) {
					escreva("Você ganhou\n")
				}
				se(jojo[0][x] == player2 e jojo[1][x] == player2 e jojo[2][x] == player2 ) {
					escreva("Você ganhou\n")
				}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 696; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */