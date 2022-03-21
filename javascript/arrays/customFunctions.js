function strDescNumAsc(a, b) {
    if (typeof a === 'string' && typeof b === 'number') {
        return -1;
    } else if (typeof a === 'number' && typeof b === 'string') {
        return 1;
    } else if (typeof a === 'string' && typeof b === 'string') {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
}

module.exports = {
    strDescNumAsc
}
