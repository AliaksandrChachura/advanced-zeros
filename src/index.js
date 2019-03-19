module.exports = function getZerosCount(number, base) {
  // your implementation
    let n, i, j, p, numberSum, noz, k;

    n = number;
    noz = n;
    j = base;
    for (i = 2; i <= base; i++) {
        if (j % i === 0) {
            p = 0;
            while (j % i === 0) {
                p++;
                j /= i;
            }
            numberSum = 0;
            k = i;
            while (number  > k) {
                numberSum += Math.floor(number / k);
                k *= i;
            }
        }

    }

    return Math.floor(numberSum/p);

};

