class Queue {
    queue;

    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        if (!element) return;
        this.queue.push(element);
    }
    dequeue() {
        if (!this.queue.length) return;
        return this.queue.shift();
    }
}

module.exports = Queue;