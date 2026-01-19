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
    11: "tizenegy",
    12: "tizenkettő",
    19: "tizenkilenc",
  }
export default function magyarSzam(n, jelző) {
  if(11 <= n && n <= 19){
    return "tizen" + magyarSzam(n-10, jelző);
  }else if(n === 2 && jelző){
      return "két";
    }

  else{
    return O[n];
  }
}
