function fibonacci(num) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i-2] + fibonacci[i - 1];
    }
    return fibonacci;
}
let input = fibonacci(20)
console.log(input);
