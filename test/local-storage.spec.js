import { assert } from 'chai';
import Chance from 'chance';

describe('localStorage', () => {
    const chance = new Chance();

    after(() => {
        /* eslint-disable no-underscore-dangle */
        localStorage._deleteLocation();
        /* eslint-enable no-underscore-dangle */
    });

    it('should be able to store and retrieve data', () => {
        const id = chance.string();
        const obj = { something: chance.string() };

        localStorage.setItem(id, JSON.stringify(obj));
        assert.equal(obj.something, JSON.parse(localStorage.getItem(id)).something);
    });
});
