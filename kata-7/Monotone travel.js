var isMonotone = function(arr) {
    if (arr.length === 0) {
        return true;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}
