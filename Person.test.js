let Person = require('./Person');

test('1983 should be millenial', () => {
    //Arrange, Act, and Assert Best Practice

    //Arrange
    let personObj = new Person(1983);

    //Act
    let result = personObj.isMillenial();

    //Assertion
    expect(result).toBeTruthy();
})

test('1945 should be retiree', () => {
    let personObj = new Person(1945);
    let result = personObj.isRetiree();
    expect(result).toBeTruthy();
})