 function maxNumber(){
    let max = arguments[0]
    let y
    try{
        if(arguments.length === 0) throw `"null"`
        for(let i = 0 ; i<arguments.length ; i++){ 
            if(typeof arguments[i] !== "bigint"){
                if(typeof arguments[i] !== "string"){
                    if( !Number.isInteger(arguments[i])){
                        throw `"Big Error"`
                    }
                }
            } 
            if(arguments[i] === "" ||  (BigInt(arguments[i])  >= 2 ** 53)){
                throw `"Big Error"`
            }else{ 
                y = BigInt(arguments[i])
                if(y >= max){
                    max = y
                }
            }
        }
        return max
    }
    catch(error){
        return error
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
