const O = {
  0: "nulla",
  1: "egy",
  2: "kettő",
  3: "három",
  4: "négy",
  5: "öt",
  6: "hat",
  7: "hét",
  8: "nyolc",
  9: "kilenc",
  10: "tíz",
  20: "húsz",
  30: "harminc",
  40: "negyven",
  50: "ötven",
  60: "hatvan",
  70: "hetven",
  80: "nyolcvan",
  90: "kilencven",
};

export default function magyarSzam(n, jelző) {
  if (n < 0) return "mínusz " + magyarSzam(-n, jelző);

  if (!Number.isInteger(n)) return tortSzam(n, jelző);

  if (11 <= n && n <= 19) {
    return "tizen" + magyarSzam(n - 10, jelző);
  } else if (21 <= n && n <= 29) {
    return "huszon" + magyarSzam(n - 20, jelző);
  } else if (31 <= n && n <= 99 && egyes(n) !== 0) {
    return O[tizes(n) * 10] + magyarSzam(egyes(n), jelző);
  } else if (30 <= n && n <= 90 && egyes(n) === 0) {
    return O[n];
  } else if (n === 200) {
    return jelző ? "kétszáz" : "kettőszáz";
  } else if (n >= 100 && n < 1000) {
    const s = szazas(n);
    const m = maradek(n);

    let eredmeny = "";

    if (s === 1) {
      eredmeny = "száz";
    } else if (s === 2) {
      eredmeny = "kétszáz";
    } else {
      eredmeny = magyarSzam(s, true) + "száz";
    }

    if (m !== 0) {
      eredmeny += magyarSzam(m, jelző);
    }

    return eredmeny;
  } else if (n === 1000) {
    return "ezer";
  } else if (n >= 1000 && n < 10000) {
    const e = ezres(n);
    const m = n % 1000;

    let eredmeny = "";

    if (e === 1) {
      eredmeny = "ezer";
    } else if (e === 2) {
      eredmeny = "kétezer";
    } else {
      eredmeny = magyarSzam(e, true) + "ezer";
    }

    if (m !== 0) {
      eredmeny += magyarSzam(m, jelző);
    }

    return eredmeny;
  } else if (n >= 10000 && n < 1000000) {
    const ezerBlokk = Math.floor(n / 1000);
    const rest = n % 1000;

    let ered = magyarSzam(ezerBlokk, true) + "ezer";

    if (rest !== 0) {
      ered += "-" + magyarSzam(rest, jelző);
    }

    return ered;
  } else if (n === 1000000) {
    return "egymillió";
  } else if (n > 1000000) {
    const m = Math.floor(n / 1000000);
    const rest = n % 1000000;

    let ered = magyarSzam(m, true) + "millió";

    if (rest !== 0) {
      ered += "-" + magyarSzam(rest, jelző);
    }

    return ered;
  } else if (n === 2 && jelző) {
    return "két";
  } else {
    return O[n];
  }
}

function tortSzam(n, jelző) {
  const egesz = Math.trunc(n);
  const frac = Math.abs(n - egesz);

  const s = frac.toFixed(10).replace(/0+$/, "");
  const digits = (s.split(".")[1] || "");

  if (digits.length === 0) return magyarSzam(egesz, jelző);

  const nev = digits.length === 1 ? "tized" : "század";
  const szam = parseInt(digits, 10);

  return `${magyarSzam(egesz, jelző)} egész ${magyarSzam(szam, true)} ${nev}`;
}

export function tizes(n) {
  return Math.floor(n / 10);
}

export function egyes(n) {
  return n % 10;
}

export function szazas(n) {
  return Math.floor(n / 100);
}

export function ezres(n) {
  return Math.floor(n / 1000);
}

export function maradek(n) {
  return n % 100;
}
