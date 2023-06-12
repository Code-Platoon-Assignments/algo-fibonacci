const { fibonacci } = require('./fibonacci');

describe('findFibonacci', () => {
    it('should return the correct Fibonacci number for n = 0', () => {
        const result = fibonacci(0);
        expect(result).toBe(0);
    });

    it('should return the correct Fibonacci number for n = 1', () => {
        const result = fibonacci(1);
        expect(result).toBe(1);
    });

    it('should return the correct Fibonacci number for n = 2', () => {
        const result = fibonacci(2);
        expect(result).toBe(1);
    });

    it('should return the correct Fibonacci number for n = 5', () => {
        const result = fibonacci(5);
        expect(result).toBe(5);
    });

    it('should return the correct Fibonacci number for n = 8', () => {
        const result = fibonacci(8);
        expect(result).toBe(21);
    });

    it('should return the correct Fibonacci number for n = 11', () => {
        const result = fibonacci(11);
        expect(result).toBe(89);
    });

    it('should return the correct Fibonacci number for n = 14', () => {
        const result = fibonacci(14);
        expect(result).toBe(377);
    });

    it('should return the correct Fibonacci number for n = 17', () => {
        const result = fibonacci(17);
        expect(result).toBe(1597);
    });

    it('should return the correct Fibonacci number for n = 20', () => {
        const result = fibonacci(20);
        expect(result).toBe(6765);
    });
});