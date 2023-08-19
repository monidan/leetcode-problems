const assert = require('assert');

const {
    sum,
    countListItems,
    findMaximumNumberInList,
    binarySearch
} = require('../algorithms/grocking-algorithms');

describe('Divide & conquer + recursion', () => {
    describe('#sum()', () => {
        it('should exist', () => assert.equal(typeof sum, 'function'));

        it('should calculate sum for multiple numbers', () => {
            assert.equal(sum(1, 2, 3), 6);
        })

        it('should return 0 when no arguments were passed', () => {
            assert.equal(sum(), 0);
        })

        it('should calculate sum when null or undefined were passed', () => {
            assert.equal(sum(1, 2, 3, null, undefined, 5), 11);
        })

        it('should calculate sum when array was passed', () => {
            assert.equal(sum(1, 2, 3, [1, 2, 3]), 12);
        })
    })

    describe('#countListItems()' , () => {
        it('should exist', () => assert.equal(typeof countListItems, 'function'));

        it ('should return 1 when there is 1 element in an array', () => {
            assert.equal(countListItems([1]), 1);
        })

        it('should return the correct length of an array', () => {
            assert.equal(countListItems([1, 2, 3]), 3);
            assert.equal(countListItems([1, 2, 3, 5, 6]), 5);
            assert.equal(countListItems([1, 2, '123', undefined]), 4);
            assert.equal(countListItems([]), 0);
        })

        it('should return 0 when no arguments were passed', () => {
            assert.equal(countListItems(), 0);
        })
    })

    describe('#findMaximumNumberInList()', () => {
        it('should exist', () => assert.equal(typeof findMaximumNumberInList, 'function'));

        it('should return the maximum number in a list', () => {
            assert.equal(findMaximumNumberInList([1, 2, 3]), 3);
            assert.equal(findMaximumNumberInList([1, 2, 3, 5, 6]), 6);
            assert.equal(findMaximumNumberInList([1, 2, '123', undefined]), 123);
        })

        it('should return null when no element in a list', () => {
            assert.equal(findMaximumNumberInList([]), null);
        })

        it('should return null when no arguments were passed', () => {
            assert.equal(findMaximumNumberInList(), null);
        })
    })

    describe('#binarySearch()', () => {
        it('should exist', () => assert.equal(typeof binarySearch, 'function'));

        it('should find searchable number', () => {
            assert.equal(binarySearch([1, 2, 3, 4, 5], 5), 5);
            assert.equal(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2), 2);
        })

        it('should return null when did not find searchable number', () => {
            assert.equal(binarySearch([1, 2, 3, 4, 5], 8), null);
            assert.equal(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 12), null);
        })
    })
})