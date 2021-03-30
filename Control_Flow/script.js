const cap = prompt('Introduceti capacitatea cilindrica:');

if (cap < 1600){
    console.log('Impozitul Auto este de ' + cap / 200 * 8) ;
} 
    
else if(cap > 1600 && cap <= 2000){
    console.log('Impozitul Auto este de ' + cap / 200 * 20);
} 
    
else if(cap > 2000 && cap <= 2600){
    console.log('Impozitul Auto este de ' + cap / 200 * 78);
}
    
else if(cap > 2600 && cap <= 3000){
    console.log('Impozitul Auto este de ' + cap / 200 * 159);
}
    
else if (cap > 3000){
    console.log('Impozitul Auto este de ' + cap / 200 * 320);
}

else if (typeof cap === 'string'){
    console.log('Introduceti un numar');
}