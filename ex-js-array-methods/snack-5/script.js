const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

let evenNums = nums.filter(function(number){
    return number % 2 === 0;
});
evenNums.forEach(function(element){
  console.log(element);
});