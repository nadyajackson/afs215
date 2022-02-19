


module.exports = function calculator(symbol, num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        if (symbol === "add"){
            return num1 + num2
        }
        if (symbol === "sub"){
            return num1 - num2
        }
        if (symbol === "div"){
            return num1 / num2
        }
        if (symbol === "mul"){
            return num1 * num2
        }
        else{
            return "ERROR"
        }
    }
    else{
        return "ERROR"
    }
}
