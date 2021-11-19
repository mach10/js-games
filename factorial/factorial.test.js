const factorial = require('./factorial')

test('factorial of 2', () => {
    let result = factorial(2)
    expect(result).toBe(2)
})

test('factorial of 4', () => {
    let result = factorial(4)
    expect(result).toBe(24)
})

test('factorial of 7', () => {
    let result = factorial(7)
    expect(result).toBe(5040)
})

