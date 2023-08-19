const assert = require('assert');

const { Heap } = require('../algorithms/heaps');

function initializeHeapWithItems(array) {
    const heap = new Heap({ type: 'max' });
            
    for (let item of array) {
        heap.insert(item);
    }

    return heap;
}

describe('Heaps', () => {
    describe('#maxHeap', () => {
        const TEST_ARRAY = [3,2,1,5,6,4];
        const HEAPIFIED_ARRAY = [6, 5, 4, 2, 3, 1];

        it('should exist', () => {
            assert.equal(typeof Heap, 'function');
            assert.equal(Heap.prototype.constructor.name, 'Heap');
        });

        it('should instantiate heap with [] array', () => {
            const heap = new Heap();
            assert.equal(heap._heapTree.length, 0);
            assert.deepEqual(heap._heapTree, []);
        })

        it('should insert elements in a max heap order', () => {
            const heap = initializeHeapWithItems(TEST_ARRAY);
            assert.deepEqual(heap._heapTree, HEAPIFIED_ARRAY);
        })

        it('should return height', () => {
            const heap = initializeHeapWithItems(TEST_ARRAY);
            assert.equal(heap._height(0), 3);
        })
    })
})