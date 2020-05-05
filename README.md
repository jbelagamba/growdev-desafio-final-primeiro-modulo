# Desafio final primeiro modulo | CONTROLE DE CAIXA

Projeto realizado na aula 11 do bootcamp starter | Growdev

### PROPOSTA

Crie um programa para realizar o controle de caixa de um supermercado. 

Comececriando um objeto com o nome do supermercado, suas transações e saldo em caixa. 

As transações devem iniciar com um array vazio [] e o saldo em 0 (zero)


### ADICIONAR TRANSAÇÕES
* Crie uma função criarTransacao para adicionar uma nova transação no array detransações do mercado, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato: `{tipo: 'entrada', valor: 45}`

* O tipo pode ser entrada para valores que entram e saída para valores que saem da conta do mercado.
* Quando uma transação for do tipo ‘entrada’ ela deve também somar o valor da entrada no saldo do mercado.
* Se for uma transação do tipo ‘saída’ ela deve subtrair o valor do saldo do mercado.

### RELATÓRIOS
* Crie uma função chamada buscaMaiorTransacaoPorTipo que recebe como parâmetro o tipo de transação (entrada/saida), percorre as transações do mercado eretorna o objeto da transação de maior valor com aquele tipo. Exemplo: `buscaMaiorTransacaoPorTipo('entrada');`

* Crie uma função chamada buscaValorMedioTransacoes que retorna o valor médio das transações de um mercado, independente do tipo de transação, Exemplo: `buscaValorMedioTransacoes();`

* Crie uma função chamada buscaContagemTransacoes que retorna o número detransações de cada tipo (entrada/saida). O retorno da função deve ser um objeto e seguir exatamente o Exemplo: `buscaContagemTransacoes();`
