const HEAP_TEST = [3,2,1,5,6,4];

class Heap {
    _heapTree;

    /**
     * @type {'max' | 'min'}
     */ 
    _type;

    constructor({ type } = { type: 'max' }) {
        this._heapTree = [];
        this._type = type;
    }

    insert(node) {
        this._heapTree.push(node);
        this._heapify(this._heapTree.length - 1);
    }

    output() {
        let isEnd = false;
        let parent = 0, left, right;

        while (!isEnd) {
            if (parent === 0) {
                left = this._getPossibleIndices(parent).left;
                right = this._getPossibleIndices(parent).right;

                console.log(`( ${this._heapTree[parent]} )`)
                console.log('/   \\')
                console.log('/     \\')
            }

            if (left) {
                console.log
            }
        }
    }

    getKthLargest(k) {

    }

    _height(root) {
        if (root === null || root === undefined || root >= this._heapTree.length) return 0;

        const left_height = this._height(this._getPossibleIndices(root).left);
        const right_height = this._height(this._getPossibleIndices(root).right);

        return Math.max(left_height, right_height) + 1;
    }

    _heapify(index) {
        let currentIndex = index,
            { parent: parentIndex } = this._getPossibleIndices(index)

        while (currentIndex > 0 && this._heapTree[currentIndex] > this._heapTree[parentIndex]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            const { parent: newParent } = this._getPossibleIndices(parentIndex);
            parentIndex = newParent; 
        }
    }

    _getPossibleIndices(index) {
        return {
            left: (index * 2) + 1,
            right: (index * 2) + 2,
            parent: Math.floor((index - 1) / 2)
        }
    }

    _isLeaf(index) {
        return index >= Math.floor(this._heapTree.length / 2)
            && index <= this._heapTree.length - 1;
    }

    _swap(index1, index2) {
        [this._heapTree[index1], this._heapTree[index2]] = [this._heapTree[index2], this._heapTree[index1]];
    }
}

exports.Heap = Heap;