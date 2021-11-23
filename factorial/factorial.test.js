const factorial = require('./factorial')

test('factorial of 2', () => {
    let result = factorial(2)
    expect(result).toBe(2)
})

