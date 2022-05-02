programa
{
	
	funcao inicio()
	{
		inteiro num[20], num1[10], num2[10], x = 0


		//Loop que pede ao usuário que informe 20 números, e armazena os valore dentro do array num[]
		para(inteiro i=0; i < 20; i++){
			escreva("Insira um número: ")
			leia(num[i])
		}

		limpa()
		
		escreva("\nPrimeira lista: ")
		//Loop que separa os 10 primeiros números do array num[], armazena no array array1[]
		//e logo em seguda imprime na tela os números
		para(inteiro i=0; i < 10; i++){
			num1[i] = num[i]
			escreva("\n- ", num1[i])
		}
		escreva("\nSegunda lista: ")
		//Loop que separa os 10 últimos números do array num[], armazena no array array2[]
		//e logo em seguda imprime na tela os números
		para(inteiro i=10; i < 20; i++){
			x = 0
			num2[x] = num[i]
			escreva("\n- ", num2[x])
			x++
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 801; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {num, 6, 10, 3}-{num1, 6, 19, 4}-{num2, 6, 29, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */