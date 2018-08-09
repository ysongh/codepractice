// Given a list of letter heights in the alphabet and a string. Using the letter heights given, 
// determine the area of the rectangle highlight in mm2 assuming all letters are 1mm wide

const list = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
const word = 'zaba';

const pdfViewer = (list, word) => {
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let test = word.split("");
    let max = 0;
    
    for (let i = 0; i <= test.length; i++){
        for(let k = 0; k <= abc.length; k++){
            if(test[i] === abc[k]){
                if(list[k] > max){
                    max = list[k];
                }
            }
        }
    }
    
    let total = max * test.length;
    return total;
};

console.log(pdfViewer(list, word));