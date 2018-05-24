class Person {
    constructor(birthYear){
        this.age = this.calculateAge(new Date(`01/01/${birthYear}`));
        this.birthYear = birthYear;
    }

    calculateAge(birthday){
        let ageDiffMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDiffMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    isMillenial(){
        return this.birthYear > 1982
    }

    isRetiree(){
        return this.age >= 65
    }
}

module.exports = Person;


//AXIOS MOCK ADAPTER TEST EXAMPLE
let getCars = require('./async');
let axios = require('axios')
let MockAdapter = require('axios-mock-adapter')
let mock = new MockAdapter(axios)

mock.onGet('/users').reply(200, {
    user: [
        {id: 2, name: 'Nancy'}
    ]
})
test('mock adapter test', () => {
    axios.get('/users').then(res => {
        console.log(res)
    })
})


// test('aync test', () => {
//     return getCars().then(res => {
//         console.log(res)
//         expect(res.length).toBe(20)
//     })
// })