const getUserName = require('./exercises2-3')


describe('Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.', () => {
    it('retorno caso usuário for encontrato', async () => {
        await expect(getUserName(4)).resolves.toEqual('Mark')
    })

    it('retorno caso usuário não for encontrato', async () => {
        await expect(getUserName(3)).rejects.toEqual({ error: 'User with 3 not found.' })
    })
})

describe('Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.', () => {
    it('retorno caso usuário for encontrato', async () => {
        await expect(getUserName(4)).resolves.toEqual('Mark')
    })

    it('retorno caso usuário não for encontrato', async () => {
        try {
            await getUserName(3)
        } catch (error) {
            expect(error).toEqual({ error: 'User with 3 not found.' })
        }
    })
})