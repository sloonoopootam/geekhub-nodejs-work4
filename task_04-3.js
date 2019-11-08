let pow = (argument, power) => {

    let x = Number(argument);
    let n = Number(power);

    if (!Number.isInteger(n)) {
        console.error(`Power ${power} - not integer`)
    } else if(Number.isNaN(x) || -100 > x || x > 100) {
        console.error(`Argument ${argument} has not valid value`);
    } else {
        if (n === 0) {
            return 1;
        } else if (n < 0) {
            return (n === -1 ? 1 / x : 1 / (x * pow(x, -n - 1))).toFixed(5);
        } else {
            return (n === 1 ? x : x * pow(x, n - 1)).toFixed(5);
        }
    }
};

console.log(pow(2.00000, 10));
console.log(pow(2.10000, 3));
console.log(pow(2.00000, -2));