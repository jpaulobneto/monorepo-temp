'use strict';

const monorepoTempLib1 = require('..');

describe('monorepo-temp-lib-1', () => {
    it('returns a a message', () => {
        expect(monorepoTempLib1()).toEqual('Hello from monorepo-temp-lib-1');
    });
});
