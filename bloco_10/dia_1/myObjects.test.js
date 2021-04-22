const {obj1} = require('./myObjects')
const {obj2} = require('./myObjects')
const {obj3} = require('./myObjects')


describe('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
    it('Verifica se os Objetos são Iguais obj1 e obj2', () => {
        expect(obj1).toEqual(obj2)
    })

    it('Verifica se os Objetos são Iguais obj2 e obj3', () => {
        expect(obj2).not.toEqual(obj3)
    })
})