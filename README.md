# 🇭🇺 Magyar Számok - Hungarian Number Converter

> Egy egyszerű és hatékony JavaScript könyvtár számok magyar nyelvre történő konvertálásához.

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
console.log(magyarSzam(68)); // "hatvannyolc"

// Jelzős használat
console.log(magyarSzam(2, true)); // "két"
console.log(magyarSzam(32, true)); // "harminckét"
```

## 📖 API Dokumentáció

### `magyarSzam(number, jelző?)`

Konvertál egy számot magyar szövegre.

#### Paraméterek

- **number** (`number`): A konvertálandó szám (0-99)
- **jelző** (`boolean`, opcionális): Ha `true`, akkor jelzős alakot ad vissza ahol releváns

#### Visszatérési érték

- **string**: A szám magyar megfelelője

#### Támogatott számok

- **0-10**: nulla, egy, kettő, három, négy, öt, hat, hét, nyolc, kilenc, tíz
- **11-19**: tizenegy, tizenkettő, tizenhárom, ... tizenkilenc
- **20-29**: húsz, huszonegy, huszonkettő, ... huszonkilenc
- **30-99**: harminc, harmincegy, ... kilencvenkilenc
- **Jelzős alakok**: két, harminckét, negyvenkét, stb.

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
- ✅ 20-29 számok (huszon-os számok)
- ✅ 30-99 számok (összetett tízes számok)
- ✅ Jelzős alakok (két, harminckét, stb.)
- ✅ Boundary értékek tesztelése

## 📝 Példák

### Alapvető számok

```javascript
magyarSzam(0);  // "nulla"
magyarSzam(1);  // "egy"
magyarSzam(5);  // "öt"
magyarSzam(10); // "tíz"
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
```

## 🛠 Fejlesztés

### Projekt struktúra

```
MAGYAR_SZAMOK/
├── lib/
│   └── magyarSzam.js      # Fő könyvtár
├── tests/
│   ├── magyarSzamok.test.js # Fő tesztek
│   └── helyiertek.test.js   # Helyiérték tesztek
├── package.json
└── README.md
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

- **JavaScript ES6+**: Modern JavaScript szintaxis
- **Vitest**: Gyors és modern teszt framework
- **PNPM**: Hatékony package manager

## 🔄 Fejlesztési történet

Ez a projekt egy TDD (Test Driven Development) megközelítést demonstrál:

1. **Kezdeti lépések**: Projekt inicializálás és Vitest telepítés
2. **Első tesztek**: Egyszerű számok konvertálása (0-10)
3. **Jelzős alakok**: Speciális esetek kezelése (két vs. kettő)
4. **Tizen-es számok**: Összetett logika (11-19)
5. **Huszon-os számok**: További összetett esetek (20-29)
6. **Teljes spektrum**: 30-99 számok támogatása
7. **Refaktorálás**: Kód optimalizálás és hibák javítása

## 🚦 Állapot

- ✅ 0-99 számok teljes támogatása
- ✅ Jelzős alakok minden releváns számnál
- ✅ Teljes teszt lefedettség
- ✅ Hibamentes működés
- 🔄 100+ számok támogatása (jövőbeli fejlesztés)

## 📜 Licenc

ISC

---

**Készítette**: SzmrLevee
**Verzió**: 1.0.0
**Utolsó frissítés**: 2026. január 21.

> 💡 **Tipp**: Ez a projekt kiváló példa a Test Driven Development (TDD) megközelítésre JavaScript környezetben.
