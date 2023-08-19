const assert = require('assert');

const { quickSort } = require('../algorithms/quick-sort');

describe('Quick sort', () => {
    describe('#quickSort()', () => {
        it('should exist', () => assert.equal(typeof quickSort, 'function'));

        it('should sort array correctly', () => {
            assert.deepEqual(quickSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
            assert.deepEqual(quickSort([10, 2]), [2, 10]);
            assert.deepEqual(quickSort([0, 2, 222, 123, 5]), [0, 2, 5, 123, 222]);
        })

        it('should return null when no arguments provided', () => {
            assert.equal(quickSort(), null);
        })
    })
})