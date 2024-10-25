// Write a function that calculates the sum of all numbers from 1 up to (and including) come number n.
function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
       total += i;  
    }
    return total;
}

console.log(addUpTo(6));
console.log(addUpTo(100));


// Different way to approach this
function addUpToShorter(n) {
    return n * (n + 1) / 2;
}

console.log(addUpToShorter(6));
console.log(addUpToShorter(100));
