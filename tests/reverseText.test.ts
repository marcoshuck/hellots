import { reverseText } from '../reverseText/reverseText';

describe('Reverse text test', () => {
  test('Should reverse the string that is passed as argument', () => {
    const result: string = reverseText('Typescript');
    expect(result).toBe('tpircsepyT');
  });
});
