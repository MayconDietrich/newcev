programa
{
	
	funcao inicio()
	{
		cadeia concatenando = concatenar(1,2)
		escreva("---------------", concatenando)
	}

	funcao cadeia concatenar(
		inteiro parametro1,
		inteiro parametro2
		) {
			se (parametro1 == parametro2) {
				retorne "São iguais"
			}
			retorne parametro1 + " " + parametro2
		}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 311; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */