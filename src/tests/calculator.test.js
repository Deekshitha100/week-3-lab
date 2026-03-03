const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two positive numbers: 10 + 20', () => {
      expect(add(10, 20)).toBe(30);
    });

    test('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract when result is negative', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract with zero', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('should subtract a number from itself', () => {
      expect(subtract(7, 7)).toBe(0);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.5)).toBe(7);
    });

    test('should subtract from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply two small positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('should multiply two negative numbers (result positive)', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive by negative (result negative)', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply by zero', () => {
      expect(multiply(10, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(multiply(100, 100)).toBe(10000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers correctly', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide with decimal result', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide negative by positive', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide by one', () => {
      expect(divide(7, 1)).toBe(7);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 3.5)).toBeCloseTo(3, 1);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should handle very small divisor resulting in large quotient', () => {
      expect(divide(1, 0.001)).toBe(1000);
    });
  });

  describe('Calculate Function (Main Operation Handler)', () => {
    test('should handle addition operation', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should handle subtraction operation', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should handle multiplication operation', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should handle division operation', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should throw error for invalid operator', () => {
      expect(() => calculate(5, '&', 2)).toThrow('Invalid operator');
    });

    test('should throw error when dividing by zero through calculate', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Cannot divide by zero');
    });

    test('should handle complex expression through calculate', () => {
      expect(calculate(100, '+', 50)).toBe(150);
      expect(calculate(100, '-', 50)).toBe(50);
      expect(calculate(10, '*', 5)).toBe(50);
      expect(calculate(50, '/', 10)).toBe(5);
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very large numbers', () => {
      expect(add(Number.MAX_SAFE_INTEGER - 1, 1)).toBe(Number.MAX_SAFE_INTEGER);
    });

    test('should handle very small positive decimal numbers', () => {
      expect(divide(1, 1000000)).toBe(0.000001);
    });

    test('should maintain precision for decimal operations', () => {
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
    });

    test('should handle negative zero correctly', () => {
      expect(subtract(0, 0)).toBe(0);
    });

    test('should handle alternating signs in operations', () => {
      expect(add(-10, 10)).toBe(0);
      expect(subtract(-5, -5)).toBe(0);
      expect(multiply(-1, -1)).toBe(1);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo of two positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with result of zero', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should calculate modulo with negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should calculate modulo with negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should throw error when dividing by zero in modulo', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should calculate modulo with decimal numbers', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5, 5);
    });
  });

  describe('Power (Exponentiation)', () => {
    test('should calculate power with positive exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with zero exponent', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should calculate power with exponent of one', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should calculate power with decimal exponent (square root via power)', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should calculate power with decimal exponent (cube root)', () => {
      expect(power(8, 1/3)).toBeCloseTo(2, 5);
    });

    test('should calculate power with large exponent', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('should handle power of negative base with positive exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle power of negative base with even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root of perfect square', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of decimal number', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root with decimal result', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should throw error for negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should calculate square root of large number', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should calculate square root of small decimal', () => {
      expect(squareRoot(0.25)).toBe(0.5);
    });
  });

  describe('Calculate Function with New Operations', () => {
    test('should handle modulo operation', () => {
      expect(calculate(10, '%', 3)).toBe(1);
    });

    test('should handle power operation', () => {
      expect(calculate(2, '^', 3)).toBe(8);
    });

    test('should throw error for square root (not a binary operation)', () => {
      // Square root needs special handling as it's unary
      // For now, it's not integrated into calculate function
      expect(() => calculate(16, '√', 0)).toThrow('Invalid operator');
    });

    test('should handle modulo by zero error through calculate', () => {
      expect(() => calculate(10, '%', 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('Image Example Tests - Extended Operations', () => {
    test('should calculate modulo with 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo through calculate function: 5 % 2 = 1', () => {
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('should calculate power with 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power through calculate function: 2 ^ 3 = 8', () => {
      expect(calculate(2, '^', 3)).toBe(8);
    });

    test('should calculate square root with √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate power with 0.5 exponent for square root: 16 ^ 0.5 = 4', () => {
      expect(power(16, 0.5)).toBe(4);
    });

    test('should calculate power through calculate for square root via exponent: 16 ^ 0.5 = 4', () => {
      expect(calculate(16, '^', 0.5)).toBe(4);
    });
  });

  describe('Extended Edge Cases - New Operations', () => {
    test('should handle modulo with large numbers', () => {
      expect(modulo(100, 7)).toBe(2);
    });

    test('should handle modulo resulting in zero', () => {
      expect(modulo(15, 5)).toBe(0);
    });

    test('should handle modulo with mixed signs', () => {
      expect(modulo(-7, 3)).toBe(-1);
    });

    test('should handle power with zero base', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle power with base of one', () => {
      expect(power(1, 100)).toBe(1);
    });

    test('should handle power with fractional exponent for cube root', () => {
      expect(power(27, 1/3)).toBeCloseTo(3, 5);
    });

    test('should handle power with negative base and odd exponent', () => {
      expect(power(-3, 3)).toBe(-27);
    });

    test('should handle power with negative base and even exponent', () => {
      expect(power(-3, 2)).toBe(9);
    });

    test('should handle square root of perfect squares 1 through 100', () => {
      for (let i = 1; i <= 10; i++) {
        expect(squareRoot(i * i)).toBe(i);
      }
    });

    test('should handle square root with very small positive numbers', () => {
      expect(squareRoot(0.01)).toBe(0.1);
    });

    test('should handle square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should throw error for square root of negative numbers', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
      expect(() => squareRoot(-100)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle sequential operations: modulo then power', () => {
      const moduloResult = modulo(5, 2); // 1
      const powerResult = power(moduloResult + 1, 3); // (1+1)^3 = 8
      expect(moduloResult).toBe(1);
      expect(powerResult).toBe(8);
    });

    test('should handle sequential operations: power then square root', () => {
      const powerResult = power(4, 2); // 16
      const sqrtResult = squareRoot(powerResult); // √16 = 4
      expect(powerResult).toBe(16);
      expect(sqrtResult).toBe(4);
    });

    test('should handle complex calculation chain', () => {
      // (10 % 3) ^ 2 + √16
      const mod = modulo(10, 3); // 1
      const pow = power(mod + 1, 2); // (1+1)^2 = 4
      const sqrt = squareRoot(16); // 4
      const result = pow + sqrt; // 4 + 4 = 8
      expect(result).toBe(8);
    });
  });
});
