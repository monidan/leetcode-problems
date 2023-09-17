class GraphNode {
    value;
    connections;

    /**
     * 
     * @param {any} value 
     * @param {GraphNode[] | undefined} connections 
     */
    constructor(value, connections) {
        this.value = value;
        this.connections = connections || [];
    }
}

class Graph {
    _graph;

    constructor() {
        this._graph = {};
    }

    /**
     * 
     * @param {GraphNode} node 
     */
    addNode(node) {
        this._graph[node.value] = node.connections;
    }

    get graph() {
        return Object.fromEntries(
            Object.entries(this._graph)
                .map(([key, connections]) => ([key, [...connections.map(node => node.value)]]))
        );
    }

    get firstNode() {
        return Object.entries(this._graph)
            .reduce((accumulator, [key, connections]) => {
                if (connections && connections.length > accumulator.connections.length) accumulator = new GraphNode(parseInt(key), [...connections]);
                return accumulator;
            }, { connections: [] });
    }
}

module.exports = {
    Graph,
    GraphNode
}