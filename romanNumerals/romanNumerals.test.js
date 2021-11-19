const converter = require('./romanNumerals')

test('converts 1', () => {
    const result = converter(1)
    expect(result).toBe("I")
});

test('converts 2', () => {
    const result = converter(2)
    expect(result).toBe("II")
});

test('converts 3', () => {
    const result = converter(3)
    expect(result).toBe("III")
});

test('converts 5', () => {
    const result = converter(5)
    expect(result).toBe("V")
});

test('converts 8', () => {
    const result = converter(8)
    expect(result).toBe("VIII")
});

test('converts 10', () => {
    const result = converter(10)
    expect(result).toBe("X")
});


test('converts 21', () => {
    const result = converter(21)
    expect(result).toBe("XXI")
});
//advanced only
test('converts 43', () => {
    const result = converter(43)
    expect(result).toBe("XLIII")
});

test('converts 1998', () => {
    const result = converter(1998)
    expect(result).toBe("MCMXCVIII")
});
