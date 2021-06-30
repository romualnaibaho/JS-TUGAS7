var array = [1,2,3,4,5,6,7,8,9,10];


console.log("Menggunakan For");
for(var i = 0; i < array.length; i++){
    console.log(array[i]);
}

console.log("Menggunakan For Of");
for(let item of array){
    console.log(item);
}

// Perbedaannya hanya terletak pada script penulisan saja, 
// menggunakan For Of lebih efisien dalam panjang code dibandingkan For biasa.