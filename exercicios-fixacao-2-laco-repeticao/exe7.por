programa
{
	
	funcao inicio()
	{
		
		inteiro filhos, i, salTotal, entradas
		real salario, medFilho, medSal, salMaior
		entradas = 20
		medSal = 0.0
		medFilho = 0.0
		salMaior = 0.0
		salario = 0.0
		salTotal = 0

		para(i = 0; i < 5; i++) {
			escreva("Digite o salário: ")
			leia(salario)
			medSal = medSal + salario

		se(salario >= salMaior) {
			salMaior = salario
		}
		se(salario <= 1000) {
			salTotal++
		}
		
		}escreva("média de salário: ", medSal/5)
		escreva("\nO maior salário é de: ", salMaior)
		escreva("\nO total de pessoas com salário inferior a R$1.000,00: ", (salTotal * 100)/20, "%")

		escreva("\n")		

		para(i = 0; i < 5; i++) {
			escreva("Digite a quantidade de filhos: ")
			leia(filhos)
			medFilho = filhos + medFilho
		}escreva("média do número de filhos: ", medFilho/5)

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 134; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */