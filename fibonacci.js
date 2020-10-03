function fibonacciNumbers(index) {
let arr = [1,1];
for (let i = 0; i < index - 2; i++) {
arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
} return(arr[arr.length - 1]);
}