const assert = require('node:assert');

const { Graph, GraphNode } = require('../data-structures/graph');
const searchBreadthFirst = require('../algorithms/breadth-first');

describe('Breadth first search', () => {
    describe('#breadthFirstSearch', () => {
        let graph;

        before(() => {
            graph = new Graph();

            const nodes = [
                new GraphNode(1, [new GraphNode(2, [new GraphNode(3)]), new GraphNode(4)]),
                new GraphNode(2, [new GraphNode(3)]),
                new GraphNode(4),
                new GraphNode(3)
            ]

            nodes.map(node => graph.addNode(node));
        })

        it ('should exist', () => {
            assert.strictEqual(typeof searchBreadthFirst, 'function');
        })

        it ('should properly count steps to find target element', () => {
            assert.strictEqual(searchBreadthFirst(graph.firstNode, new GraphNode(1)), 0);
            assert.strictEqual(searchBreadthFirst(graph.firstNode, new GraphNode(2)), 1);
            assert.strictEqual(searchBreadthFirst(graph.firstNode, new GraphNode(3)), 2);
        })
    })
})