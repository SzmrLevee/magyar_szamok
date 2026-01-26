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

  // új részek:
  [99, false, 'kilencvenkilenc'],
  [100, false, 'száz'],
  [300, false, 'háromszáz'],
  [200, false, 'kettőszáz'],
  [200, true, 'kétszáz'],
  [202, false, 'kétszázkettő'],
  [202, true, 'kétszázkét'],
  [202, true, 'kétszázkét'],
  [203, false, 'kétszázhárom'],
  [999, true, 'kilencszázkilencvenkilenc'],
  
  [1000, false, 'ezer'],
  [1200, true, 'ezerkétszáz'],
  [1312, false, 'ezerháromszáztizenkettő'],
  [1200, true, 'ezerkétszáz'],
  [1999, false, 'ezerkilencszázkilencvenkilenc'],
  [2000, true, 'kétezer'],
  [2005, true, 'kétezeröt'],
  [15652, true, 'tizenötezer-hatszázötvenkét'],
  [1000000, false, 'egymillió'],
  [3605121, false, 'hárommillió-hatszázötezer-százhuszonegy'],
  [-1, false, 'mínusz egy'],
  [2.5, false, 'kettő egész öt tized'],
  [0.2, false, 'nulla egész két tized'],
  [-2.05, false, 'mínusz kettő egész öt század'],
])('converts $0 with jelző $1', (n, jelző, expected) => {
  expect(magyarSzam(n, jelző)).toBe(expected);
});
