const mercado = {
  nome: 'Mercado do bairro',
  transacoes: [],
  saldo: 0,
}

const mensagemErroTipoDeEntrada = 'O tipo de transação informado é inválido. Tente novamente utilizando "entrada" ou "saida".';

function criarTransacao(transacao) {
  
  if (transacao.tipo === 'entrada' || transacao.tipo === 'saida') {
    if (transacao.tipo === 'entrada') {
      mercado.saldo += transacao.valor;
    } else if (transacao.tipo === 'saida') {
      mercado.saldo -= transacao.valor;
    }
    mercado.transacoes.push(transacao);
  }  else {
    console.log(mensagemErroTipoDeEntrada);
  }
}

function buscaMaiorTransacaoPorTipo(tipoTransacao) {
  let maiorTransacao = {tipo: tipoTransacao, valor: 0};

  if (tipoTransacao === 'entrada' || tipoTransacao === 'saida') {
    for (let i = 0; i < mercado.transacoes.length; i++) {
      if (mercado.transacoes[i].tipo === tipoTransacao) {
        if (mercado.transacoes[i].valor > maiorTransacao.valor) {
          maiorTransacao = mercado.transacoes[i];
        }
      }
    }
  } else {
   console.log(mensagemErroTipoDeEntrada);
  }

  console.log(maiorTransacao);
}

function buscaValorMedioTransacoes() {
  let quantidadeTransacoes = mercado.transacoes.length;
  let somaTransacoes = 0;

  for (const transacao of mercado.transacoes) {
    somaTransacoes += transacao.valor;
  }

  let mediaTransacoes = somaTransacoes / quantidadeTransacoes;

  console.log(mediaTransacoes);
}

function buscaContagemTransacoes() {
  const contagemTransacoes = {
    entradas: 0,
    saidas: 0
  };
  for (let i = 0; i < mercado.transacoes.length; i++) {
    if (mercado.transacoes[i].tipo == 'entrada') {
      contagemTransacoes.entradas += 1;
    } else {
      contagemTransacoes.saidas += 1;
    }
  }
  console.log(contagemTransacoes);
}

criarTransacao({tipo: 'entrada', valor: 45});
criarTransacao({tipo: 'entrada', valor: 165});
criarTransacao({tipo: 'saida', valor: 25});
criarTransacao({tipo: 'saida', valor: 78});
//criarTransacao({tipo: 'valorDiferenteDeEntradaOuSaida', valor: 2});

console.log(mercado.saldo);

buscaMaiorTransacaoPorTipo('entrada');

buscaMaiorTransacaoPorTipo('saida');

//buscaMaiorTransacaoPorTipo('valorDiferenteDeEntradaOuSaida');

buscaContagemTransacoes();

buscaValorMedioTransacoes();