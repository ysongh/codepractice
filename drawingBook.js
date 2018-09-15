// https://www.hackerrank.com/challenges/drawing-book/problem

const n = 5;
const p = 4;

const drawingBook = (n, p) => {
    let min = 0;
    
    let nextpage = Math.floor(p / 2);
    
    let prepage = Math.floor(n / 2) - nextpage;
    
    if(prepage < min){
        min = prepage;
    }
    
    return min;
};

console.log(drawingBook(n, p));