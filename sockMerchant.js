// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    let list = {};
    let count = 0;

    for(let num in ar){
       list[ar[num]] = ++list[ar[num]] || 1;
    }
    
    for(let i in list){
        if (list[i] > 1){
            count += Math.floor(list[i]/2);
            
        }
    }
    return count;
}

console.log(sockMerchant(9, [1,1,3,1,2,1,3,3,3,3]));