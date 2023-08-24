class LinkedList {
    rootNode;

    constructor(root = 0) {
        this.rootNode = {
            value: root,
            left: null,
            right: null,
        }
    }

    insert(value) {
        if (!value) return;

        const lastNode = this.last;

        if (!lastNode) throw new Error('No last node found');

        lastNode.right = {
            value,
            left: lastNode,
            right: null
        };

        return this;
    }

    delete(value) {
        const elementToDelete = this.searchFor(value);

        if (!elementToDelete) return null;

        elementToDelete.left.right = elementToDelete.right;
        elementToDelete.right.left = elementToDelete.left;

        return this;
    }

    searchFor(value) {
        let foundNode = this.traverseUntil(node => node.value === value);

        if (foundNode) return foundNode;

        return null;
    }

    traverseUntil(callback) {
        let currentNode = this.rootNode;

        while (currentNode) {
            if (callback(currentNode)) return currentNode;

            currentNode = currentNode.right;
        }
    }

    traverse(callback) {
        let currentNode = this.rootNode;

        while (currentNode) {
            callback(currentNode);

            currentNode = currentNode.right;
        }
    }

    get list() {
        const collection = [];

        this.traverse(node => collection.push(node.value));

        return Object.freeze(collection);
    }

    get last() {
        let currentNode = this.rootNode;

        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode;
    }
}

module.exports = {
    LinkedList
}