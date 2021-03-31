const multipleData = [1, 'string', false, null, undefined];

for (var i = 0; i < multipleData.length; i++){
    console.log(typeof multipleData[i]);
}

const numbers = [45, 16, 19, 24, -46, 52];
let minim = numbers[0];

for (j = 1; j < numbers.length; j++){
    if(numbers[j] < minim){
    minim = numbers[j];
    }
}

console.log('Cel mai mic numar este ' + minim);