function maxNumber(){
    const x = Number.MAX_SAFE_INTEGER
    for(let index in str){
        if(str==' ' || str[index]===x){
           console.log("big error")
         }
     }
}
maxNumber() // null 
maxNumber(2 ** 53 - 1) // 9007199254740991n 
maxNumber(2 ** 53) // "Big Error" 
maxNumber("") // "Big Error




// maxNumber(1n, 10n, 5n) // 10n 
// maxNumber("10", 5n, 1) // 10n 
// maxNumber("10" / 3) // "Big Error" 
//  maxNumber("10" / 2) // 5n 
// maxNumber(10 - 12, 10 - 10, 10 - 11) // 0n 
// maxNumber(0n) // 0n 
 
