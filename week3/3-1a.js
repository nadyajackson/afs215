module.exports = class User{
    constructor(num1, num2, name, age){
        this.num1 = num1
        this.num2 = num2
        this.name = name
        this.age = age
    }

    addition(){
        return this.num1 + this.num2
    }
    subtraction(){
        return this.num1 - this.num2
    }
    multiply(){
        return this.num1*this.num2
    }
    divide(){
        return this.num1 / this.num2
    }

    greet(){
        return `Hello, ${this.name}. You are ${this.age} years old`
    }

    stringy(){
        let num3 = String(this.num1)
        let num4 = String(this.num2)
        return(num3+num4)
    }
    dataType(num){
        return typeof(num)
    }
}



// Create a class called User. Give it a constructor, and give it four properties: num1, num2, name, and age. Provide name and age with default parameters.
// Within the class, create a function or functions that can add, subtract, multiply, and divide.
// Create a function that acts as a greeting for a user, returning both their name and age.
// Create another function that returns the numbers you choose as a string data type instead of a number data type - meaning that if your numbers are 2 and 5 you should get a return of "25" instead of 7.