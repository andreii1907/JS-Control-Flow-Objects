// ------- Media aritmetica a unei lista cu numere ------- //
const listOfNumbers = [5, 6, 9, 14, 26];
let sum = 0;

for (i = 0; i < listOfNumbers.length; i++){
    sum += listOfNumbers[i];
}
console.log('Suma numerelor din lista exclusiv cu numere este: ' + sum);
console.log('Media artimetica a numerelor din lista este: ' + sum / listOfNumbers.length);


// ------- Suma numerelor unei liste cu tipuri de date diferite ------- //

const listOfDataTypes = [26, true, null, 95, 
{team: 'FC Botosani', sport: 'footbal', country: 'Romania', league: 'first', position: 5},
29, 'Hello World', {firstname: 'Luchian', lastname:'Andrei', age: 23 }, 89, 'World Hello'
];

// console.log(listOfDataTypes);

let all = 0;
for (j = 0; j < listOfDataTypes.length; j++){

    if(typeof listOfDataTypes[j] === 'number'){
    all += listOfDataTypes[j];
    }
}

console.log('Suma numerelor din lista cu mai multe tipuri de date este: ' + all);


// ------- Primele 20 de numere din sirul lui Fibonacci ------- //

const fibonnacci = [0, 1];

for (k = 0; k <= 17; k++){
    fibonnacci.push(fibonnacci[fibonnacci.length - 1] + fibonnacci[k]);
}

console.log('Acestea sunt primele 20 de numere din sirul lui Fibonacci: ' + fibonnacci);