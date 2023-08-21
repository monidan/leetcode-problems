const assert = require('node:assert');

const binaryTreeFunctions = require('../data-structures/binary-tree');

const TEST_TREE = {
    value: 8,
    left: null,
    right: null
}

describe('Binary Tree', () => {
    describe('#binary tree operations', () => {
        it('should be able to call addNode function', () => assert.equal(typeof binaryTreeFunctions.addNode, 'function'));
        it('should be able to call binarySearch function', () => assert.equal(typeof binaryTreeFunctions.binarySearch, 'function'));
        it('should be able to call inorderTraversal function', () => assert.equal(typeof binaryTreeFunctions.inorderTraversal, 'function'));
        it('should be able to call predorderTraversal function', () => assert.equal(typeof binaryTreeFunctions.preorderTraversal, 'function'));
        it('should be able to call deleteNode function', () => assert.equal(typeof binaryTreeFunctions.deleteNode, 'function'));

        it('should return null if no value was provided to functions', () => {
            Object.values(binaryTreeFunctions)
                .map(func => assert.equal(func(), null))
        })
        it('should properly add node to a tree', () => {
            const tree = Object.assign({}, TEST_TREE);

            binaryTreeFunctions.addNode(tree, 6);
            binaryTreeFunctions.addNode(tree, 9);

            assert.equal(tree.left.value, 6);
            assert.equal(tree.right.value, 9);
        })

        it('should properly traverse binary tree in inorder implementation', () => {
            const inorderNodes = [];
            const tree = Object.assign({}, TEST_TREE);

            binaryTreeFunctions.addNode(tree, 10);
            binaryTreeFunctions.addNode(tree, 4);
            binaryTreeFunctions.addNode(tree, 12);

            binaryTreeFunctions.inorderTraversal(tree, (tree) => tree.value ? inorderNodes.push(tree.value) : '');
            assert.deepEqual(inorderNodes, [4, 8, 10, 12])
        })

        it('should properly traverse binary tree in preorder implmentation', () => {
            const preorderNodes = [];
            const tree = Object.assign({}, TEST_TREE);

            binaryTreeFunctions.addNode(tree, 10);
            binaryTreeFunctions.addNode(tree, 4);
            binaryTreeFunctions.addNode(tree, 12);

            binaryTreeFunctions.preorderTraversal(tree, (tree) => tree.value ? preorderNodes.push(tree.value) : '');
            assert.deepEqual(preorderNodes, [8, 4, 10, 12])
        });

        it('should properly delete node', () => {
            const tree = Object.assign({}, TEST_TREE);

            binaryTreeFunctions.addNode(tree, 10);
            binaryTreeFunctions.addNode(tree, 4);

            assert.strictEqual(tree.left.value, 4);

            binaryTreeFunctions.deleteNode(tree, 4);

            assert.strictEqual(tree.left, null);
        });

        it('should find node in a tree using binarySearch', () => {
            const tree = Object.assign({}, TEST_TREE);

            binaryTreeFunctions.addNode(tree, 10);
            binaryTreeFunctions.addNode(tree, 5);

            binaryTreeFunctions.addNode(tree, 4);
            binaryTreeFunctions.addNode(tree, 6);

            binaryTreeFunctions.addNode(tree, 2);
            binaryTreeFunctions.addNode(tree, 5);

            assert.strictEqual(binaryTreeFunctions.binarySearch(tree, 4).value, 4);
            assert.strictEqual(binaryTreeFunctions.binarySearch(tree, 5).value, 5);
            assert.strictEqual(binaryTreeFunctions.binarySearch(tree, 6).value, 6);
        })

        it('should return null when node was not found using binarySearch', () => {
            const tree = Object.assign({}, TEST_TREE);

            binaryTreeFunctions.addNode(tree, 10);
            binaryTreeFunctions.addNode(tree, 5);

            binaryTreeFunctions.addNode(tree, 4);
            binaryTreeFunctions.addNode(tree, 6);

            binaryTreeFunctions.addNode(tree, 2);
            binaryTreeFunctions.addNode(tree, 5);

            assert.strictEqual(binaryTreeFunctions.binarySearch(tree, 123), null);
            assert.strictEqual(binaryTreeFunctions.binarySearch(tree, 0), null);
            assert.strictEqual(binaryTreeFunctions.binarySearch(tree, 11111), null);
        })
    })
})