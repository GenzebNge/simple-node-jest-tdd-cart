const hw = require('../../index');

describe('Unit test suite', () => {
    describe('Ensure hello world', () => {
        it('should return "Hello World"', () => {
            expect(hw.sayHi()).toBe('Hello World');
        });
        it('should return "Hello bob"', () => {
            expect(hw.sayHiToUser('bob')).toBe('Hello bob');
        });
    });
});