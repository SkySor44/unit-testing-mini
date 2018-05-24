let fns = require('./functions');

test('returnTwo should return 2', () => {
    let result = fns.returnTwo();
    expect(result).toBe(2)
})

test('greeting("Skyler") should return hello, Skyler.', () => {
    let result = fns.greeting('Skyler');
    expect(result).toBe(`Hello, Skyler.`)
})

describe('math tests', () => {
    test('add(2, 2) should return 4', () => {
        let result = fns.add(2, 2)
        expect(result).toBe(4)
    })
    
    test('divide(6, 3) should return 2', () => {
        let result = fns.divide(6, 3);
        expect(result).toBe(2)
    })
    
    test('multiply(4,4) should return 16', () => {
        let result = fns.multiply(4, 4)
        expect(result).toBe(16)
    })
})

//Chaining .only after test or describe before the parenthesis will make it so you only run tests on that one test. EX: test.only(...)
//Chaining .skip after test or describe will skip that test