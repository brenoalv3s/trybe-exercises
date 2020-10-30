/* 
    2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array
    1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    Faça uma chamada para a função myRemove e 3. 3. verifique se o array passado por parâmetro não sofreu alterações
    4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado*/

// myRemove.js
const myRemove = (arr, item) => arr.filter((element) => element !== item)

module.exports = myRemove;
