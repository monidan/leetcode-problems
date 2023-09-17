const assert = require('node:assert');

const { GraphNode, Graph } = require('../data-structures/graph');

describe('Graphs', () => {
    describe('#graph and graphNode', () => {
        it ('should have graph class', () => {
            assert.strictEqual(typeof Graph, 'function');
            assert.strictEqual(Graph.prototype.constructor.name, 'Graph');
        });

        it ('should have graphNode class', () => {
            assert.strictEqual(typeof GraphNode, 'function');
            assert.strictEqual(GraphNode.prototype.constructor.name, 'GraphNode');
        });

        it ('should be able to create graph node', () => {
            const node = new GraphNode(4, [new GraphNode(2), new GraphNode(1)]);

            assert.deepEqual(node.connections.map(node => node.value), [2, 1]);
        });

        it ('should be able to create graph', () => {
            const graph = new Graph();

            assert.deepEqual(graph._graph, {});
        });

        it ('should be able to add node to a graph', () => {
            const graph = new Graph();
            
            graph.addNode(new GraphNode(2, [new GraphNode(1), new GraphNode(3, [new GraphNode(5)])]));
            graph.addNode(new GraphNode(1));
            graph.addNode(new GraphNode(3, [new GraphNode(5)]));
            graph.addNode(new GraphNode(5));

            assert.deepStrictEqual(graph.graph, {
                1: [],
                2: [1, 3],
                3: [5],
                5: []
            })
        })
    })
})