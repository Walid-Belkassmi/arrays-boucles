// 01 - Fruits
// const fruits = ["mango", "lemon", "blueberry"]
// console.log(fruits)

// 02 - Access
// const ingredients = ["egg", "milk", "butter"]
// console.log(ingredients[1])
// console.log(ingredients.indexOf("butter"))

// 03 - Add and Remove
// const objects = ["pen", "book", "lamp"]

// objects.unshift("chair")
// console.log(objects)

// objects.pop()
// console.log(objects)

// objects.push("laptop")
// console.log(objects)

// objects.shift()
// console.log(objects)


// O4 - Order
// const numbers = [4,8,10,12,6]
// numbers.reverse()
// console.log(numbers)

// 05 - Boucle
// let total = 0
// const limit = 10

// for(let i = 0; i <= limit; i++){
//     total += i
// }
// console.log(total)

// 06 - Reverse
// const sentence = "Hello Konexio !"
// let sentenceReverse = ""

// for(let i = sentence.length; i >= 0; i--){
//     sentenceReverse += sentence.charAt(i)
// }
// console.log(sentenceReverse)

// 07 - Fizzbuzz
// for(let i = 0; i <= 100; i++){
//     if((i % 3 === 0) && (i % 5 === 0)){
//         console.log("fizzbuzz")
//     } else if(i % 5 === 0){
//         console.log("buzz")
//     } else if(i % 3 === 0){
//         console.log("fizz")
//     } else{
//         console.log(i)
//     }
// }

// 08 - While
// let total = 0
// let limit = 10
// let i = 0

// while(limit >= 0){
//     total += i
//     i++
//     limit--
// }
// console.log(total)

// 09 - Sans boucle
// let names = ["Jad", "Walid", "Julien", "Mago"]
// let random = (Math.floor(Math.random() * names.length))
// console.log(names[random])

// 10 - Random and max
let numbers = []
let max = 0
for(let i = 0; i < 20; i++){
    numbers[i] = Math.floor(Math.random() * 101)
}
console.log(numbers)

for(let j = 0; j < numbers.length; j++){
    if(numbers[j] > max){
        max = numbers[j]
    }
}
console.log(max)
