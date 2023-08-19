/**
 * x
 * |  \
 * x   y
 * | \ | \
 * x y x  y
 * 
 * { value: 0, left: {  }, right: { } }
 */

exports.addNode = function addNode(tree, value) {
    if (!tree.value) return console.error('No value for a source tree node.');
    
    const node = {
        value,
        left: null,
        right: null
    }

    if (node.value > tree.value) {
        if (tree.right) return addNode(tree.right, node.value);
        tree.right = node;
    }

    if (node.value <= tree.value) {
        if (tree.left) return addNode(tree.left, node.value);
        tree.left = node;
    }

    return tree;
}

exports.binarySearch = function binarySearch(tree, searchedValue) {
    if (searchedValue === tree.value) return tree;

    if (searchedValue > tree.value && tree.right) return binarySearch(tree.right, searchedValue);
    if (searchedValue < tree.value && tree.left) return binarySearch(tree.left, searchedValue);

    return console.log('No value like that in the tree');
}

exports.inorderTraversal = function inorderTraversal(tree) {
    if (tree) {
        inorderTraversal(tree.left);
        console.log(tree.value);
        inorderTraversal(tree.right);
    }
}

exports.preorderTraversal = function preorderTraversal(tree) {
    
}

exports.deleteNode = function deleteNode(tree, deletedValueForNode) {
    if (!tree) {
        console.log('No leaves for this value');
        return null;
    };
 
    if (deletedValueForNode === tree.value) {
        if (tree.left && tree.right) {
            console.log('Impossible to delete with 2 leaves')
            return tree;
        };

        if (tree.left || tree.right) {
            return tree.left ? tree.left : tree.right;
        }

        return null;
    }

    if (deletedValueForNode > tree.value) {
        tree.right = deleteNode(tree.right, deletedValueForNode);
    }

    if (deletedValueForNode < tree.value) {
        tree.left = deleteNode(tree.left, deletedValueForNode);
    }

    return tree;
}