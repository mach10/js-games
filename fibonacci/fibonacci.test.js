const fib = require('./fibonacci')

test('calculates 3', () => {
    let result = fib(2)
    expect(result).toBe(3)
})

test('calculates 5', () => {
    let result = fib(3)
    expect(result).toBe(5)
})

test('calculates 8', () => {
    let result = fib(4)
    expect(result).toBe(8)
})
