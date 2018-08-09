// Find the number of potion needed to jump the maxiumn height. Each potion increase height by 1.

let height = [1, 2, 3, 3, 2];
let initial = 1;

const hurdleRace = (height, initial) => {
    let max = 0;
    for(let i = 0; i <= height.length; i++){
        if(height[i] > max){
            max = height[i];
        }
    }
    if(max > initial){
        let potion = max - initial;
        return potion;
    }
    else{
        return 0;
    }    
};

console.log(hurdleRace(height, initial));