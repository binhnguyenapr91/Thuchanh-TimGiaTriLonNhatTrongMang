let arr=[1,4,5,6,-7,99];
let max=arr[0];
for(let index =1;index<arr.length;index++){
    if(max<arr[index]){
        max = arr[index];
    }
}
alert("max in array:"+max);