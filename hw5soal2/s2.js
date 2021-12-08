function maxNumber(){
    let max = arguments[0]
    if(arguments.length !== 0){
        for(let i = 0 ; i<arguments.length ; i++){ 
            if((typeof arguments[i] !== "bigint") && (typeof arguments[i] !== "string") && !Number.isInteger(arguments[i])){
                return "Big Error"
            }
            if(arguments[i] === "" ||  (BigInt(arguments[i])  >= 2 ** 53)){
                return "Big Error";
            }else{ 
                y = BigInt(arguments[i])
                if(y >= max){
                    max = y
                }
            }
        }
        return max;
    }
    else{
        return "null"
    }
 }

 console.log(maxNumber(1n, 10n, 5n))// 10n 
 console.log(maxNumber("10", 5n, 1)) // 10n 
 console.log(maxNumber(2 ** 53)) // "Big Error" 
 console.log(maxNumber("")) // "Big Error
 console.log(maxNumber()) // null 
 console.log(maxNumber(2 ** 53 - 1) )// 9007199254740991n 
 console.log(maxNumber("10" / 3)) // "Big Error" 
 console.log(maxNumber("10" / 2) )// 5n 
 console.log(maxNumber(10 - 12, 10 - 10, 10 - 11)) // 0n 
 console.log(maxNumber(0n)) // 0n 
