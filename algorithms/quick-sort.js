function quickSort(array) {
    if (!array) return;
    if (array.length < 2) return array;

    const pivot = Math.max(...array);

    const leftPartition = quickSort(array.filter(number => number < pivot));
    const rightPartition = quickSort(array.filter(number => number > pivot));
    const equalsToPivot = array.filter(number => number === pivot);

    return [...leftPartition, ...equalsToPivot ,...rightPartition];
}

module.exports = {
    quickSort
};