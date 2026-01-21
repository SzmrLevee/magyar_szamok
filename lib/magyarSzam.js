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
  }
export default function magyarSzam(n, jelző) {
  if(11 <= n && n <= 19){
    return "tizen" + magyarSzam(n-10, jelző);
  }else if(21 <= n && n <= 29){
    return "huszon" + magyarSzam(n-20, jelző);
  }else if(31 <= n && n <= 99 && egyes(n) !== 0){
    return O[tizes(n)*10] + magyarSzam(egyes(n), jelző);
  }else if(30 <= n && n <= 90 && egyes(n) === 0){
    return O[n];
  }else if(n === 2 && jelző){
      return "két";
    }

  else{
    return O[n];
  }
}

export function tizes(n){
  return Math.floor(n / 10);
}

export function egyes(n){
   return n % 10;
}
