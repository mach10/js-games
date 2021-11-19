const divisor = require('./divisor');

test('it returns 7', () => {
    let result = divisor(0, 7);

    expect(result).toBe('7')
});

test('it returns 7,14', () => {
    let result = divisor(0, 14);

    expect(result).toBe('7,14')
});

test('it also returns 7,14', () => {
    let result = divisor(7, 14);

    expect(result).toBe('7,14')
});
