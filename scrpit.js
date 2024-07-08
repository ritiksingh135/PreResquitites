// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

const arr = [1,2,3,4,5,6];

const squareNumbers = arr.map(arr=> arr **2)

console.log(squareNumbers);


// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.

function grade(score) {
    return (score >= 90) ? "A" :
            (score >= 80)? 'B' :
            (score >= 70)? 'C' :
            (score >= 60)? 'D' : 'E'
}

 console.log(grade(95));
 console.log(grade(85));
 console.log(grade(75));
 console.log(grade(65));
 console.log(grade(55));

//  Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

const car = {
    companyName: "Ferrari",
    model: "Corolla",
    year: 2020

}

function changeCarYear(carObject, newYear) {
    carObject.year = newYear
}

function printCarModel(carObject) {
    const {model, year} = carObject
    console.log(`Model: ${model} Year: ${year}`);
}

console.log("Before");
printCarModel(car)

changeCarYear(car, 2024)

console.log("after");
printCarModel(car)


// primeNumber



const newArray = [1, 3, 2, 5, 10];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);


//map
const number = [1,2,3,4,5];
const doubled = number.map(item => item * 2);
console.log("Example of map:");
console.log(doubled);

//filter
const num = [1,2,3,4,5,6,7,8]
const evens = num.filter(num => num % 3 === 0);
console.log("Example of filter:");
console.log(evens);


//reduce

const numbers = [1,2,3,4,5]
const sum = numbers.reduce(function(result, num)
{return result + num},0)
console.log("Example of Reduce ");
console.log(sum);

// Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.



async function runProcess() {
  try {
    const dataVar = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await dataVar.json();
    console.log(json);

  } catch (error) {
    console.log(error);
  }

}

runProcess();

console.log("Asynchronous function");


//question 7

const cars = {
  name: "scorpio",
  bike:{
    name: "ninja"
  },
};

const carsName = cars.bicycle?.name

console.log("Question No 7 opitional ");
console.log(carsName);