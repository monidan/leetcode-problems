const sum = (...numbers) => {
    if (!numbers || !numbers.length) return 0;
    if (numbers.length === 1 && !Array.isArray(numbers[0])) return parseInt(numbers[0]);

    const numberToAdd = Array.isArray(numbers[0]) 
        ? sum(...numbers[0]) 
        : Number.isNaN(parseInt(numbers[0])) ? 0 : parseInt(numbers[0]);

    return numberToAdd + sum(...numbers.slice(1, numbers.length));
}

const countListItems = (list) => {
    if (!list || list.length === 0) return 0;
    if (list.length === 1) return 1;

    return 1 + countListItems(list.slice(1, list.length));
}

const findMaximumNumberInList = (list, maximum) => {
    if (!list || list.length === 0) return;
    if (list.length === 1) return list[0];
    if (!maximum || list[0] > maximum) maximum = list[0];

    let currentMaximum = findMaximumNumberInList(list.slice(1, list.length), maximum);

    return maximum < currentMaximum
        ? currentMaximum
        : maximum
}

const binarySearch = (array, numberToFind) => {
    const mid = Math.floor(array.length / 2);

    if (array.length === 0) return null;
    if (array[mid] === numberToFind) return array[mid];

    return array[mid] > numberToFind
        ? binarySearch(array.slice(0, mid), numberToFind)
        : binarySearch(array.slice(mid + 1, array.length), numberToFind);
}

module.exports = {
    sum,
    countListItems,
    findMaximumNumberInList,
    binarySearch
};