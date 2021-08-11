
// criar a função que recebe um parametro n
function tabelaDeMultiplicacao(n){


// criar loops aninhados para montar um array multidimensional
 let arr = []
 let coluna = []
  for (let i = 0; i < n; i++) {
     coluna[i] = []
  for (let j = 0; j < n; j++) {
      coluna[i].push(i*j)
  }
    arr.push(coluna[i])
 }
 // array montado utilizar o console.table() no array para mostrar como tabela
 console.table(arr)
}


tabelaDeMultiplicacao(10)


function tabelaDeMultiplicacao(n) {
  var arr = [];
  var rows = [];

  for(let i = 0; i <= n; i++) {
      rows[i] = []; 
      for(let j = 0; j <= n; j++) {
          rows[i].push(i*j);
      }
      arr.push(rows[i]);
  }

  console.table(arr)
}

tabelaDeMultiplicacao(10)