/* Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor 
maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;

for (let index = 0; index < numbers.length; index++) {
    media += numbers[index] / 10;
    
}
  console.log(media);

  if (media > 20) {
      console.log(`Valor maior que 20`)
} else {
    console.log(`Valor menor ou igual a 20`)
}*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}

result = result / numbers.length;

if (result > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}