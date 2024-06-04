Array.range = function(start, count) {
    return Array.from({ length: count }, (_, i) => start + i);
};

Array.prototype.sum = function() {
    return this.reduce((acc, val) => acc + val, 0);
};
