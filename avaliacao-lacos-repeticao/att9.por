programa
{
	
	funcao inicio()
	{
		real num1, num2
		cadeia op

		para(inteiro i = 0; i >= 0; i++) {
			escreva("\nInsira um número: ")
			leia(num1)
			escreva("\nInsira um número: ")
			leia(num2)
	
			escreva("Insira a operação desejada (ou digite sair para encerrar o programa): ")
			leia(op)
			escreva("\n")
	
			se(op == "sair") {
				pare
			}senao se (op == "adição") {
				escreva(num1+num2)
			}senao se (op == "multiplicação"){
				escreva(num1*num2)
			}senao se (op == "divisão"){
				escreva(num1/num2)
			}senao se (op == "subtração"){
				escreva(num1-num2)
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 169; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */