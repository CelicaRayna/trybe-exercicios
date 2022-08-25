// Divisao
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma= 0;


for (let index = 0; index < numbers.length; index += 1){
soma += numbers[index]
}
let media = soma / numbers.length
console.log(media)


let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for (index = 0; index < groceryList.length; index +=1) {
// console.log(groceryList[index])
// }
for (let value of groceryList)
console.log(value)

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let value of names);
console.log(value);


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);

