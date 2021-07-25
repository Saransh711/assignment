getIndex=(arr,num)=>{
    arr.push(num);
    let x = arr.sort(function(a,b){ return a-b});
    let index=arr.indexOf(num);
    console.log(index);
}

let arr=[1,2,4,5,6]
let num = 3
getIndex(arr,num);