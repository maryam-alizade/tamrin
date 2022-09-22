var array = [1,2,3,4,5,9,6,8,-1,-48,-5,-15];
function sort(arr) {
    for(let j=0;j<arr.length;j++) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]>arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }      
    return arr;
}
console.log(sort(array));

