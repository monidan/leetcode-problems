const Queue = require('../data-structures/queue');

const searchBreadthFirst = (graph, targetElement) => {
    const queue = new Queue();
    let stepsToFind = 0;

    queue.enqueue(graph);

    while (queue.queue.length) {
        console.log(queue.queue)
        const dequeuedElement = queue.dequeue();


        if (dequeuedElement.value === targetElement.value) return stepsToFind;

        stepsToFind += 1;

        if (dequeuedElement.connections) 
            dequeuedElement.connections.map(node => queue.enqueue(node));
    }

    return null;
}

module.exports = searchBreadthFirst;