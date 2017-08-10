import { querySerialize } from './query-serialize';

describe('querySerialize', () => {

    it('should serialize empty object', () => {
        expect(querySerialize({})).toBe('');
    });

    it('should serialize simple object', () => {
        expect(querySerialize({ foo: 'bar', baz: 1 })).toBe('foo=bar&baz=1');
    });

    it('should serialize nested object', () => {
        expect(querySerialize({ foo: { bar: 1, baz: 2 } }))
            .toBe('foo[bar]=1&foo[baz]=2');
    });

    it('should ignore empty nested objects', () => {
        expect(querySerialize({ foo: {}, bar: 1 })).toBe('bar=1');
    });

});
