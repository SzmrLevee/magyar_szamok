import { describe, it, expect } from "vitest";
import magyarSzam from '../lib/magyarSzam.js';

describe('magyarSzam', () => {
  it("converts 5 with jelzo false", () => {
    expect(magyarSzam(5)).toBe("öt");
  })
  it("converts 3 with jelzo false", () => {
    expect(magyarSzam(3)).toBe("három");
  })
  it("converts 9 with jelzo true", () => {
    expect(magyarSzam(9)).toBe("kilenc");
  })
  it("converts 10 with jelzo false", () => {
    expect(magyarSzam(10)).toBe("tíz");
  })
  it("converts 12 with jelzo false", () => {
    expect(magyarSzam(12)).toBe("tizenkettő");
  })
  it("converts 15 with jelzo false", () => {
    expect(magyarSzam(15)).toBe("tizenöt");
  })
  it("converts 18 with jelzo false", () => {
    expect(magyarSzam(18)).toBe("tizennyolc");
  })
  it("converts 22 with jelzo false", () => {
    expect(magyarSzam(22)).toBe("huszonkettő");
  })
  it("converts 25 with jelzo false", () => {
    expect(magyarSzam(25)).toBe("huszonöt");
  })
  it("converts 30 with jelzo false", () => {
    expect(magyarSzam(30)).toBe("harminc");
  })
  it("converts 32 with jelzo true", () => {
    expect(magyarSzam(32)).toBe("harminckettő");
  })
  it("converts 45 with jelzo false", () => {
    expect(magyarSzam(45)).toBe("negyvenöt");
  })
  it("converts 50 with jelzo false", () => {
    expect(magyarSzam(50)).toBe("ötven");
  })
  it("converts 57 with jelzo false", () => {
    expect(magyarSzam(57)).toBe("ötvenhét");
  })
  it("converts 60 with jelzo false", () => {
    expect(magyarSzam(60)).toBe("hatvan");
  })
  it("converts 68 with jelzo false", () => {
    expect(magyarSzam(68)).toBe("hatvannyolc");
  })
  it("converts 75 with jelzo false", () => {
    expect(magyarSzam(75)).toBe("hetvenöt");
  })
  it("converts 80 with jelzo false", () => {
    expect(magyarSzam(80)).toBe("nyolcvan");
  })
});
