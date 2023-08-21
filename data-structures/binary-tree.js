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
    if (!tree || !tree.value) return;
    
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
    if (!tree) return null;
    if (searchedValue === tree.value) return tree;

    if (searchedValue > tree.value && tree.right) return binarySearch(tree.right, searchedValue);
    if (searchedValue < tree.value && tree.left) return binarySearch(tree.left, searchedValue);

    return null;
}

exports.inorderTraversal = function inorderTraversal(tree, callback) {
    if (!callback || !tree) return;

    inorderTraversal(tree.left, callback);
    callback(tree);
    inorderTraversal(tree.right, callback);
}

exports.preorderTraversal = function preorderTraversal(tree, callback) {
    if (!tree || !callback) return;

    callback(tree)
    preorderTraversal(tree.left, callback);
    preorderTraversal(tree.right, callback);
}

exports.deleteNode = function deleteNode(tree, deletedValueForNode) {
    if (!tree) {
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