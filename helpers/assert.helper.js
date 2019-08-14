const assert = require('assert');

module.exports = {
    ...assert,
    contains(parent, child) {
        assert.equal((-1 < String(parent).indexOf(child)), true);
    },
    notContains(parent, child) {
        assert.equal((-1 < String(parent).indexOf(child)), false);
    }
};
