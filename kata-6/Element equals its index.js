function indexEqualsValue(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = (left + right) >> 1;

        if (arr[mid] === mid) {
            result = mid;
            right = mid - 1;
        } else if (arr[mid] < mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}