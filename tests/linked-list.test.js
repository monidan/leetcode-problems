const assert = require('assert');

const { LinkedList } = require('../data-structures/linked-list');

function createLinkedList(root, ...values) {
    const linkedList = new LinkedList(root);

    for (let value of values) {
        linkedList.insert(value);
    }

    return {
        linkedList
    }
}

describe('Linked list', () => {
    describe('#LinkedList class', () => {
        it('should exist', () => assert.strictEqual(LinkedList.prototype.constructor.name, 'LinkedList'));
    
        it('should create linked list object with value in constructor argument', () => {
            const linkedList = new LinkedList(10);
    
            assert.strictEqual(typeof linkedList, 'object');
            assert.strictEqual(linkedList.rootNode.value, 10);
            assert.strictEqual(linkedList.rootNode.right, null);
            assert.strictEqual(linkedList.rootNode.left, null);
        })
    
        it('should create linked list without any value in constructor argument', () => {
            const linkedList = new LinkedList();
    
            assert.strictEqual(typeof linkedList, 'object');
            assert.strictEqual(linkedList.rootNode.value, 0);
            assert.strictEqual(linkedList.rootNode.right, null);
            assert.strictEqual(linkedList.rootNode.left, null);
        })
    
        it('should insert nodes in linked list', () => {
            const { linkedList } = createLinkedList(10, 5, 4);
    
            assert.strictEqual(linkedList.rootNode.value, 10);
            assert.strictEqual(linkedList.rootNode.right.value, 5);
            assert.strictEqual(linkedList.rootNode.right.right.value, 4);
    
            assert.notStrictEqual(linkedList.rootNode.right, null);
            assert.notStrictEqual(linkedList.rootNode.right.left, null);
            assert.notStrictEqual(linkedList.rootNode.right.right, null);
            assert.notStrictEqual(linkedList.rootNode.right.right.left, null);
        })
    
        it('should delete nodes from linked list', () => {
            const { linkedList } = createLinkedList(10, 5, 4);
    
            linkedList.delete(5);
    
            assert.deepStrictEqual(linkedList.rootNode.right, { value: 4, right: null, left: linkedList.rootNode })
            assert.strictEqual(linkedList.rootNode.right.left.value, 10);
        })
    
        it('should return an immutable collection of list which looks like array', () => {
            const { linkedList } = createLinkedList(10, 5, 4, 3, 2, 1);
    
            assert.deepStrictEqual(linkedList.list, [10, 5, 4, 3, 2, 1]);
        })
    })
})