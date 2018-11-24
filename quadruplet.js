const quadruplet = (ar, s) => {
    let total = 0;
    let list = [];

    for(let i = 0; i < 4; i++){
        total += ar[i];
    }

    let len = ar.length;
    let start = 0;
    let end = 4;
    let go = true;

    while(go){
        if(total === s){
            go = false;
        }
        else if(end === len){
            return list;
        }
        else{
            total = total + ar[end] - ar[start];
            start++;
            end++;
        }
    }
    
    for(let i = end - 4; i < end; i++){
        list.push(ar[i]);
    }

    return list.sort();
};

console.log(quadruplet([2, 7, 4, 0, 9, 5, 1, 3] , 20));