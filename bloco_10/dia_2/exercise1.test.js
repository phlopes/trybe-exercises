const uppercase = require('./exercise1')

it('testando callback toUpperCase', (done) => {
    uppercase('aaa', (str) => {
        expect(str).toBe('AAA');
        done()
    })
})