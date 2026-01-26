import { describe, expect, it } from "vitest";
import { egyes, tizes, szazas, ezres, maradek } from "../lib/magyarSzam";

describe(egyes, () => {
  it("gives 0 for 0", () => {
    expect(egyes(0)).toBe(0);
  });
  it("gives 4 for 4", () => {
    expect(egyes(4)).toBe(4);
  });
  it("gives 2 for 42", () => {
    expect(egyes(42)).toBe(2);
  });
});

describe(tizes, () => {
  it("gives 0 for 0", () => {
    expect(tizes(0)).toBe(0);
  });
  it("gives 0 for 1", () => {
    expect(tizes(1)).toBe(0);
  });
  it("gives 3 for 31", () => {
    expect(tizes(31)).toBe(3);
  });
  it("gives 3 for 39", () => {
    expect(tizes(39)).toBe(3);
  });
  it("gives 4 for 40", () => {
    expect(tizes(40)).toBe(4);
  });
  it("gives 4 for 42", () => {
    expect(tizes(42)).toBe(4);
  });
  it("gives 9 for 99", () => {
    expect(tizes(99)).toBe(9);
  });
});

describe(szazas, () => {
  it("gives 0 for 0", () => {
    expect(szazas(0)).toBe(0);
  });
  it("gives 0 for 99", () => {
    expect(szazas(99)).toBe(0);
  });
  it("gives 1 for 100", () => {
    expect(szazas(100)).toBe(1);
  });
  it("gives 2 for 202", () => {
    expect(szazas(202)).toBe(2);
  });
  it("gives 9 for 999", () => {
    expect(szazas(999)).toBe(9);
  });
});

describe(ezres, () => {
  it("gives 0 for 0", () => {
    expect(ezres(0)).toBe(0);
  });
  it("gives 0 for 999", () => {
    expect(ezres(999)).toBe(0);
  });
  it("gives 1 for 1000", () => {
    expect(ezres(1000)).toBe(1);
  });
  it("gives 1 for 1999", () => {
    expect(ezres(1999)).toBe(1);
  });
  it("gives 15 for 15652", () => {
    expect(ezres(15652)).toBe(15);
  });
});

describe(maradek, () => {
  it("gives 0 for 0", () => {
    expect(maradek(0)).toBe(0);
  });
  it("gives 0 for 100", () => {
    expect(maradek(100)).toBe(0);
  });
  it("gives 2 for 202", () => {
    expect(maradek(202)).toBe(2);
  });
  it("gives 12 for 1312", () => {
    expect(maradek(1312)).toBe(12);
  });
  it("gives 99 for 999", () => {
    expect(maradek(999)).toBe(99);
  });
});
