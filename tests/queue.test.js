const assert = require('node:assert');

const Queue = require('../data-structures/queue');

describe('Queue', () => {
    describe('#queue', () => {
        it ('should exist', () => {
            assert.strictEqual(typeof Queue, 'function');
            assert.strictEqual(Queue.prototype.constructor.name, 'Queue');
        })

        it ('should initialize queue object', () => {
            const queue = new Queue();

            assert.deepEqual(queue.queue, []);
        })

        it ('should enqueue elements successfully', () => {
            const queue = new Queue();

            queue.enqueue(4);
            queue.enqueue(5);
            queue.enqueue(1);

            assert.deepEqual(queue.queue, [4, 5, 1]);
        })

        it ('should dequeue elements successfully', () => {
            const queue = new Queue();

            queue.enqueue(4);
            queue.enqueue(2);

            assert.deepEqual(queue.queue, [4, 2]);

            const dequeuedElement = queue.dequeue();

            assert.strictEqual(dequeuedElement, 4);
            assert.deepEqual(queue.queue, [2]);

            queue.dequeue();

            assert.deepEqual(queue.queue, []);

            const undefinedDequeuedElement = queue.dequeue();

            assert.strictEqual(undefinedDequeuedElement, undefined);
        })
    });
})