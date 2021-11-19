const converter = require('./romanNumerals')

test('converts 1', () => {
    const result = converter(1)
    expect(result).toBe("I")
});
