// #rotate array by d places in anti clock wise
function rotateArray (arr, d) {

// return arr = arr.slice(d).concat(arr.slice(0,d))


// }



        // code here
        let n = arr.length
         d = d % n
         console.log(d)
         const rotated = arr.splice(0,d)
         console.log(rotated)
        arr.push(...rotated)

        return arr
        
        
    }

console.log(rotateArray([1, 2, 3, 4, 5],2))