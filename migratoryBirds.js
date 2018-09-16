// https://www.hackerrank.com/challenges/migratory-birds/problem

const arr = [1, 4, 4, 4, 5, 3];

const migratoryBirds = (arr) => {
    let list = [0, 0, 0, 0, 0];
    for(let i = 0; i <= arr.length; i++){
        list[arr[i] - 1] += 1;
    }
    let birds = Math.max(...list);
    let type = list.indexOf(birds);
    return type + 1;
};

console.log(migratoryBirds(arr));