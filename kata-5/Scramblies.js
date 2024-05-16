function scramble(str1, str2) {
    const count = {};

    for (const char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
}
