function doubleEveryOther(a) {
    return a.map((value, index) => index % 2 !== 0 ? value * 2 : value);
}

