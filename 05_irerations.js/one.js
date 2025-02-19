// const array = [10,20,30,40,50]

// for(let iCnt = 0 ; iCnt<= array.length-1 ; iCnt++)
// {
//     console.log(iCnt , ": ", array[iCnt]);
//     // console.log(array[iCnt]);
//     if (array[iCnt] == 30)
//         {
//             console.log("inside if");
//             // break
//         }   
// }

// for(let i = 0 ; i <= 10 ; i++)
// {
//     console.log("outer loop value : ", i);
    
//     for(let j = 0 ; j <=10 ; j++)
//     {
//         console.log("inner loop value : ", j);
//     }
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of index is : ${index}`);
    
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of index is : ${index}`);
    
    
}