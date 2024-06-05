function sumOfSums(N) {
    const s = n => (n * (n + 1n)) / 2n;
    const z = n => (n * (n + 1n) * (n + 2n)) / 6n;
    return s(z(BigInt(N)));
}
