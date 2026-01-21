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
  [20, false, 'húsz'],
  [21, false, 'huszonegy'],
  [22, false, 'huszonkettő'],
  [22, true, 'huszonkét'],
  [29, false, 'huszonkilenc'],

  [30, false, 'harminc'],
  [31, false, 'harmincegy'],
  [32, true, 'harminckét'],
  [42, true, 'negyvenkét'],

])('converts $0 with jelző $1', (n, jelző, expected) => {
  expect(magyarSzam(n, jelző)).toBe(expected);
});
