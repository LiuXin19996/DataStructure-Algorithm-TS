import {maxProfitOnce, maxProfitMore} from '../GreedyAlgorithm/Stock'

test('maxProfit', () => {
    expect(maxProfitOnce([7,1,5,3,6,4])).toBe(5)
    expect(maxProfitOnce([7,6,4,3,1])).toBe(0)
    expect(maxProfitMore([7,1,5,3,6,4])).toBe(7)
})