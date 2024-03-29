let spiralMatrix = (R, C, r0, c0) => {

    const dr = [0, 1, 0, -1];
    const dc = [1, 0, -1, 0];

    const coords = {x: r0, y: c0};
    const result = [[r0, c0]];

    if (R < 1 || R > 100 || C < 1 || C > 100) {
        console.error('R, C are not belong to the segment from 1 to 100');
    } else if (R * C === 1) {
        return result;
    } else {
        for (let k = 1; k < 2 * (R + C) && result.length < (R * C); k += 2) {
            for (let i = 0; i < 4; i++) {
                let dk = Math.floor(k + i / 2);
                for (let j = 0; j < dk; j++) {
                    coords.x += dr[i];
                    coords.y += dc[i];
                    if (coords.x >= 0 && coords.x < R && coords.y >= 0 && coords.y < C) {
                        result.push([coords.x, coords.y]);
                    }
                }
            }
        }
        return result;
    }
};

let res1 = spiralMatrix(1, 4, 0, 0);
    console.table(res1);

let res2 = spiralMatrix(5, 6, 1, 4);
    console.table(res2);