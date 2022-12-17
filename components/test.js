let nums = [
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1]
];
let nums2 = [
  [3, 4, 5],
  [3, 2, 6],
  [2, 2, 1]
];

/**
 * criar matrix com valores zerado do mesmo tamanho da matrix recebida (count_matrix)
 * enumerar cada item da matrix
 * chamar o dfs
 * chamar soment se não tivero calculor da nossa count_matrix
 * retornar o valor do count_matrix na posição atual
 * validar o valor maior de count_matrix se for um movimento valido para o priximo passo
 * retorna o valor maiordo count_matrix
 */

let visited = [[], [], []];

function deepFirstSearch(nums) {
  let left = null;
  let right = null;
  for (let value in nums) {
    if (nums === null) {
      return false;
    } else if (value === nums[value]) {
      deepFirstSearch(left, nums[value]);
    } else {
      return deepFirstSearch(right, nums[value]);
    }
  }
}

console.log(deepFirstSearch(nums));
