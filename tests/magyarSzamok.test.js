import {test, it, expect, test} from 'vitest';
import magyarSzam from "../lib/magyarSzam";
test.each([
  [0, false, 'nulla'],
  [1, false, 'egy'],

  //A kettő máshogyan működik jelző/nem jelző esetén
  [2, false, 'kettő'],
  [2, true, 'két'],

  [3, false, 'három'],
  [4, false, 'négy'],
  [5, false, 'öt'],
  [6, false, 'hat'],
  [7, false, 'hét'],
  [8, false, 'nyolc'],
  [9, false, 'kilenc'],
  [10, true, 'tíz'],
  [11, true, 'tizenegy'],
  [19, false, 'tizenkilenc'],

  [12, false, 'tizenkettő'],
  [12, true, 'tizenkét'],
])('converts $0 with jelző $1', (n, jelző, expected) => {
  expect(magyarSzam(n, jelző)).toBe(expected);
});
