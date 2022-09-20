const {sum, myRemove, myFizzBuzz} = require('./sum');

describe('Exercicio 1', () => {

    test('Add sum a + b', () => {
        expect (sum(4, 5)).toBe(9)
        expect (sum(0, 0)).toBe(0)
    });
    
    test('sum lança o erro', () => {
        expect (() => sum(4, "5")).toThrowError()
        
        expect (() => sum(4, "5")).toThrowError('parameters must be numbers')
    });
    
    
})

describe('Exercicio 2', () => {

    test('retorna um array sem o elemento item', () => {
    expect (myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    expect (myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    expect (myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})

describe('Exercicio 3', () => {
    test('fizz buzz', () => {
    expect (myFizzBuzz(15)).toBe("fizzbuzz")
    expect (myFizzBuzz(9)).toBe("fizz")
    expect (myFizzBuzz(5)).toBe("buzz")
    expect (myFizzBuzz(2)).toBe(2)
    expect (myFizzBuzz('1')).toBe(false)
    })
})

describe('Exercicio 4' , () => {





})
    

 




    
