// export const bubbleSort = (array,swapFunction)=>{
//     for(let i=0;i<array.length-1,i++){
//         for(let j=i+1;j<array.length;j++){
//             if(array[i]>array[j]){
//                 swapFunction(array,i,j);
//             }
//         }
//     }

// }
export const selectionSort = (array,swapFunction) =>{
    for(let i=0;i<array.length-1;i++){
        let min = array[i];
        let loc = i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<min){
                min=array[j];
                loc = j;
            }
        }
       
        swapFunction(array,i,loc);
    }
}
