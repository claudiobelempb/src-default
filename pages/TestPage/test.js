const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = nums.reduce((acumulador, valor, index, array) => {
  acumulador += valor;
  // console.log(acumulador, valor);
  // if (valor % 2 === 0) acumulador.push(valor);
  // acumulador.push(valor * 2);
  return acumulador;
}, 0);

console.log('Total: ' + total);

const doble = (valor, indice, array) => {
  for (let index = 0; index < array.length; index++) {
    return valor * indice + array[index];
  }
};
// const result = nums.map(doble);
// console.log(result);

function callbackFilter(valor, indice, array) {
  return valor >= 10;
}

const result1 = nums.filter(valor => valor >= 10);

const result2 = nums.filter((valor, indice, array) => {
  // console.log('Valor: ', valor);
  // console.log('Indice: ', indice);
  // console.log('Array: ', array);
  return valor >= 10;
});
// console.log(result2);

const pessoas = [
  { name: 'Cláudio', idade: 45 },
  { name: 'Gorete', idade: 45 },
  { name: 'Kaike', idade: 13 },
  { name: 'Kevin', idade: 9 }
];

// console.log(pessoas);

const getNames = valor => valor.name;
const getIdades = valor => ({ idade: valor.idade });
const id = (valor, index) => {
  const obj = { ...valor };
  obj.id = (index + 1) * 2;
  return obj;
};
const result01 = pessoas.map(getNames);
const result02 = pessoas.map(getIdades);
const result03 = pessoas.map(id);
// console.log(result01, result02, result03);

const pessoasComNomeGrnde = obj => obj.name.length >= 7;
const pessoasComMaisDeCinquentaAnos = obj => obj.idade > 40;
const nomeTerminaComA = obj => obj.name.toLowerCase().endsWith('n');
// const result3 = pessoas.filter(pessoasComMaisDeCinquentaAnos);
// const result4 = pessoas.filter(maiorDe50);
const result5 = pessoas.filter(nomeTerminaComA);
// console.log(result3);
// console.log(result4);
// console.log(result5);
