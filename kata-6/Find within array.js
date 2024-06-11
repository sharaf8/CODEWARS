function findInArray(sequence, func) {
    for (let i = 0; i < sequence.length; i++) {
      if (func(sequence[i], i)) {
        return i;
      }
    }
    return -1;
  }
  