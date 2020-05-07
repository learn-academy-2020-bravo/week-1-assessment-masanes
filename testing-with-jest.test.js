// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
describe("addThemUp", () => {
test ("should return the sum of two values", () => {
    expect(addThemUp(5,5)).toEqual(10)
    //expect(addThemUp(5,10)).toEqual(15)
    })
})

const addThemUp = (num1, num2) => num1 + num2;

//addThemUp(5,5);

// --------------------1b) See the test fail. THEN write the code to make the test pass.

addThemUp(5,5);

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.
describe("triangleArea", () => {
    test ("should return the area of a triangle", () => {
        expect(triangleArea(10,10)).toEqual(50)
        })
    })

const triangleArea = (base, height) => base * height / 2;

// --------------------2b) See the test fail. THEN write the code to make the test pass.

triangleArea(10,10);