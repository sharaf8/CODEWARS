function solution(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            result += ' ' + char;
        } else {
            result += char;
        }
    }
    return result;
}
