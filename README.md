# 🇭🇺 Magyar Számok - Hungarian Number Converter

> Egy teljes körű és hatékony JavaScript könyvtár számok magyar nyelvre történő konvertálásához.

## 📋 Tartalomjegyzék

- [Telepítés](#-telepítés)
- [Használat](#-használat)
- [API Dokumentáció](#-api-dokumentáció)
- [Tesztelés](#-tesztelés)
- [Példák](#-példák)
- [Fejlesztés](#-fejlesztés)
- [Licenc](#-licenc)

## 🚀 Telepítés

```bash
pnpm install
```

## 🎯 Használat

```javascript
import magyarSzam from './lib/magyarSzam.js';

// Alapvető használat
console.log(magyarSzam(5)); // "öt"
console.log(magyarSzam(12)); // "tizenkettő"
console.log(magyarSzam(45)); // "negyvenöt"
console.log(magyarSzam(1000)); // "ezer"
console.log(magyarSzam(1000000)); // "egymillió"

// Jelzős használat
console.log(magyarSzam(2, true)); // "két"
console.log(magyarSzam(32, true)); // "harminckét"
console.log(magyarSzam(200, true)); // "kétszáz"

// Negatív számok
console.log(magyarSzam(-5)); // "mínusz öt"

// Tört számok
console.log(magyarSzam(2.5)); // "kettő egész öt tized"
console.log(magyarSzam(0.25)); // "nulla egész huszonöt század"
```

## 📖 API Dokumentáció

### `magyarSzam(number, jelző?)`

Konvertál egy számot magyar szövegre.

#### Paraméterek

- **number** (`number`): A konvertálandó szám (negatív számok, egész számok, tört számok támogatottak)
- **jelző** (`boolean`, opcionális): Ha `true`, akkor jelzős alakot ad vissza ahol releváns

#### Visszatérési érték

- **string**: A szám magyar megfelelője

#### Támogatott számok

- **Egész számok**: 0-től több millióig
- **Negatív számok**: mínusz előtaggal
- **Tört számok**: egész + tized/század formátumban
- **0-10**: nulla, egy, kettő, három, négy, öt, hat, hét, nyolc, kilenc, tíz
- **11-19**: tizenegy, tizenkettő, tizenhárom, ... tizenkilenc
- **20-99**: húsz, huszonegy, ... kilencvenkilenc
- **100-999**: száz, kétszáz, ... kilencszázkilencvenkilenc
- **1000+**: ezer, kétezer, egymillió, stb.
- **Jelzős alakok**: két, harminckét, kétszáz, stb.

## 🧪 Tesztelés

A projekt Vitest keretrendszert használ a teszteléshez.

```bash
# Tesztek futtatása
pnpm test

# Tesztek futtatása watch módban
pnpm test --watch
```

### Teszt lefedettség

A könyvtár az alábbi eseteket teszteli:

- ✅ 0-10 számok alapvető konvertálása
- ✅ 11-19 számok (tizen-es számok)
- ✅ 20-99 számok (összetett tízes számok)
- ✅ 100-999 számok (század értékek)
- ✅ 1000+ számok (ezer, millió)
- ✅ Negatív számok
- ✅ Tört számok (tized, század)
- ✅ Jelzős alakok (két, harminckét, kétszáz, stb.)
- ✅ Helyiérték függvények (egyes, tizes, százas, ezres)
- ✅ Boundary értékek tesztelése

## 📝 Példák

### Alapvető számok

```javascript
magyarSzam(0);  // "nulla"
magyarSzam(1);  // "egy"
magyarSzam(5);  // "öt"
magyarSzam(10); // "tíz"
```

### Nagy számok

```javascript
magyarSzam(100);    // "száz"
magyarSzam(999);    // "kilencszázkilencvenkilenc"
magyarSzam(1000);   // "ezer"
magyarSzam(15652);  // "tizenötezer-hatszázötvenkét" (jelzős módban)
magyarSzam(1000000); // "egymillió"
magyarSzam(3605121); // "hárommillió-hatszázötezer-százhuszonegy"
```

### Negatív és tört számok

```javascript
magyarSzam(-1);    // "mínusz egy"
magyarSzam(-5);    // "mínusz öt"
magyarSzam(2.5);   // "kettő egész öt tized"
magyarSzam(0.2);   // "nulla egész két tized"
magyarSzam(-2.05); // "mínusz kettő egész öt század"
```

### Tizen-es és összetett számok

```javascript
magyarSzam(11); // "tizenegy"
magyarSzam(15); // "tizenöt"
magyarSzam(22); // "huszonkettő"
magyarSzam(45); // "negyvenöt"
magyarSzam(68); // "hatvannyolc"
magyarSzam(80); // "nyolcvan"
```

### Jelzős alakok

```javascript
magyarSzam(2);       // "kettő"
magyarSzam(2, true); // "két"

magyarSzam(32);       // "harminckettő"
magyarSzam(32, true); // "harminckét"

magyarSzam(200);       // "kettőszáz"
magyarSzam(200, true); // "kétszáz"
```

## 🛠 Fejlesztés

### Projekt struktúra

```
MAGYAR_SZAMOK/
├── lib/
│   └── magyarSzam.js      # Fő könyvtár és helyiérték függvények
├── tests/
│   ├── magyarSzamok.test.js # Fő tesztek (0-millió tartomány)
│   └── helyiertek.test.js   # Helyiérték függvények tesztjei
├── package.json
├── pnpm-lock.yaml
└── README.md
```

### Elérhető függvények

A könyvtár a fő `magyarSzam` függvényen kívül több segéd függvényt is exportál:

```javascript
import magyarSzam, { 
  egyes,    // egyes helyiérték kinyerése
  tizes,    // tizes helyiérték kinyerése  
  szazas,   // százas helyiérték kinyerése
  ezres,    // ezres helyiérték kinyerése
  maradek   // utolsó két számjegy (n % 100)
} from './lib/magyarSzam.js';

// Példa használat:
console.log(egyes(42));   // 2
console.log(tizes(42));   // 4
console.log(szazas(342)); // 3
console.log(ezres(3421)); // 3
console.log(maradek(142)); // 42
```

### Fejlesztési workflow

1. **Függőségek telepítése**:
   ```bash
   pnpm install
   ```

2. **Tesztek futtatása fejlesztés közben**:
   ```bash
   pnpm test --watch
   ```

3. **Új funkció hozzáadása**:
   - Írj tesztet az új funkcióra
   - Implementáld a funkciót
   - Ellenőrizd, hogy minden teszt sikeres

### Technológiai stack

- **JavaScript ES6+**: Modern JavaScript szintaxis és modulok
- **Vitest**: Gyors és modern teszt framework
- **PNPM**: Hatékony package manager

### Speciális funkciók

- **Negatív számok**: Automatikus "mínusz" előtag hozzáadása
- **Tört számok**: Intelligens tized/század konverzió
- **Nagy számok**: Kötőjeles formátum 10,000+ számokhoz
- **Jelzős alakok**: Kontextusfüggő "két" vs "kettő" kezelés
- **Helyiérték függvények**: Math műveletek magyar nyelvű abstrakciója

## 🔄 Fejlesztési történet

Ez a projekt egy TDD (Test Driven Development) megközelítést demonstrál:

1. **Kezdeti lépések**: Projekt inicializálás és Vitest telepítés
2. **Első tesztek**: Egyszerű számok konvertálása (0-10)
3. **Jelzős alakok**: Speciális esetek kezelése (két vs. kettő)
4. **Tizen-es számok**: Összetett logika (11-19)
5. **Huszon-os számok**: További összetett esetek (20-29)
6. **Teljes 0-99 spektrum**: Alapvető tartomány lefedése
7. **Százas számok**: 100-999 tartomány implementálása
8. **Ezres számok**: 1000+ támogatás
9. **Millió+ számok**: Nagy számok kezelése kötőjeles formátummal
10. **Negatív számok**: Mínusz előtag hozzáadása
11. **Tört számok**: Decimális számok támogatása
12. **Helyiérték függvények**: Segéd függvények exportálása
13. **Teljes refaktorálás**: Kód optimalizálás és hibák javítása

## 🚦 Állapot

- ✅ 0-9,999,999+ számok teljes támogatása
- ✅ Negatív számok támogatása (mínusz előtag)
- ✅ Tört számok támogatása (tized/század formátum)
- ✅ Jelzős alakok minden releváns számnál
- ✅ Helyiérték segéd függvények
- ✅ Teljes teszt lefedettség
- ✅ Hibamentes működés
- 🔄 Nagyobb számok formázásának javítása (jövőbeli fejlesztés)

## 📜 Licenc

ISC

---

**Készítette**: SzmrLevee
**Verzió**: 1.0.0
**Utolsó frissítés**: 2026. január 21.

> 💡 **Tipp**: Ez a projekt kiváló példa a Test Driven Development (TDD) megközelítésre JavaScript környezetben.
