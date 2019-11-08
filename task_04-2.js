let spiralMatrix = (R, C, r0, c0) => {
    const result = [];
    let sign = 1;
     do {
         for (let i = 0; i < R; i++) {
             if (r0 < R && r0 >= 0 && c0 < C && c0 >= 0) {
                 result.push([r0, c0]);
             }
             r0 += sign;
         }

         for (let j = 0; j < C; j++) {
             if (r0 < R && r0 >= 0 && c0 < C && c0 >= 0) {
                 result.push([r0, c0]);
             }
             c0 += sign;
         }

         sign *= -1;
    } while (result.length < (R * C));

    return console.log(result);
};

let res1 = spiralMatrix(1, 4, 0, 0);