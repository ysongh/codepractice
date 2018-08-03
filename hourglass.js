const list = [[-9, -9, -9, 1, 1, 1 ],
              [0, -9, 0, 4, 3, 2],
              [-9, -9, -9, 1, 2, 3],
              [0, 0, 8, 6, 6, 0],
              [0, 0, 0, -2, 0, 0],
              [0, 0, 1, 2, 4, 0]];
              
const list2 = [[1, 1, 1, 0, 0, 0],
               [0, 1, 0, 0, 0, 0],
               [1, 1, 1, 0, 0, 0],
               [0, 0, 2, 4, 4, 0],
               [0, 0, 0, 2, 0, 0],
               [0, 0, 1, 2, 4, 0]];
              
const highestValue = list => {
    let highestSum = 0;
    for(let x = 0; x <= 3; x++){
        for(let y = 0; y <= 3; y++){
            let a = list[x][y];
            let b = list[x][y+1];
            let c = list[x][y+2];
            let d = list[x+1][y+1];
            let e = list[x+2][y];
            let f = list[x+2][y+1];
            let g = list[x+2][y+2];
            let sum = a + b + c + d + e + f+ g;
            if(sum > highestSum){
                highestSum = sum;
            }
        }
    }
    return highestSum;
};

console.log(highestValue(list));
console.log(highestValue(list2));