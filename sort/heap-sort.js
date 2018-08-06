function heapSort(arr){
    let len = arr.length;
    if(len <= 1){ 
        return arr; 
    } else {
        //建立堆
        for(let i = Math.floor((len - 1)/2); i>= 0;i--){
            maxHeapify(arr,i,len);
        }
        for(let j = len - 1;j >= 0;j--){
            swap(arr,0,j);
            maxHeapify(arr,0,j);
        }
        return arr;
    }
   
}
function maxHeapify(arr,index,size){
    let max = index,
        left = 2 * index + 1;
        right = 2 * index + 2;
    if(left < size && arr[left] > arr[max]){
        max = left;
    }
    if(right < size && arr[right] > arr[max]){
        max = right;
    }
    if(max !== index){
        swap(arr,index,max);
        maxHeapify(arr,max,size)
    }
}
function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}