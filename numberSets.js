const arr = [2, 4, 6, 10];
const tar = 16;

const numberSets = (arr, tar) => {
    let sets = [];
    for(let i=0; i < arr.length; i++){
        let list = [];
        let total = 0;
        for(let k=i; k < arr.length; k++){
            total = total + arr[k];
            if(total <= tar){
                list.push(arr[k]);
            }
            else{
                total = total - arr[k];
            }
        }
        console.log("Phase " + i + " " + list);
        if(total === tar){
            sets.push(list);
        }
    }
    for(let i=0; i < arr.length; i++){
        let list = [];
        let total = 0;
        for(let k=0; k < arr.length; k++){
            if(i != k){
                total = total + arr[k];
                if(total <= tar){
                    list.push(arr[k]);
                }
                else{
                    total = total - arr[k];
                }
            }
        }
        console.log("Phase " + i + " " + list);
        if(total === tar){
            sets.push(list);
        }
    }
    return sets;
};

console.log(numberSets(arr, tar));