window.onload = function() {
    console.log('onload ok');
}

function multiplesOf3and5(number) {

    let sum = 0;

    for (let i = 1; i < number; i++) {

        if (i % 3 == 0) {
            sum += i;
        } else if (i % 5 == 0) {
            sum += i;
        }
    }

    console.log('my sum ' + sum);
    return sum;
}

//multiplesOf3and5(1000);

function fiboEvenSum(n) {

    let sum = 0

    let fib = 1;
    let previousFib = 0;

    for (let i = 1; i < n; i++) {

        let currentFib = fib + previousFib;

        console.log(currentFib);

        if (currentFib <= n) {
            if (currentFib % 2 == 0) {
                sum += currentFib;
            }
        }

        previousFib = fib;
        fib = currentFib;
    }

    console.log('sum ', sum);
    return sum;
}

fiboEvenSum(34);