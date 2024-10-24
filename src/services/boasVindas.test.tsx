import { boasVindas } from "./boasVindas"
describe('boasVindas', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        boasVindas()
        expect(mockAlert).toHaveBeenCalledWith('Boas vindas')
    })
})