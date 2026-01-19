# 🇭🇺 Magyar Számok - Hungarian Number Converter

![Magyar Számok](https://raw.githubusercontent.com/SzmrLevee/magyar_szamok/main/logo.png)

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
console.log(magyarSzam(1)); // "egy"
console.log(magyarSzam(2)); // "kettő"
console.log(magyarSzam(12)); // "tizenkettő"

// Jelzős használat
console.log(magyarSzam(2, true)); // "két"
console.log(magyarSzam(12, true)); // "tizenkét"
```

## 📖 API Dokumentáció

### `magyarSzam(number, jelző?)`

Konvertál egy számot magyar szövegre.

#### Paraméterek

- **number** (`number`): A konvertálandó szám (0-19)
- **jelző** (`boolean`, opcionális): Ha `true`, akkor jelzős alakot ad vissza ahol releváns

#### Visszatérési érték

- **string**: A szám magyar megfelelője

#### Támogatott számok

- **0-10**: nulla, egy, kettő, három, négy, öt, hat, hét, nyolc, kilenc, tíz
- **11-19**: tizenegy, tizenkettő, tizenhárom, ... tizenkilenc
- **Jelzős alakok**: két, tizenkét

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
- ✅ Jelzős alakok (két, tizenkét)
- ✅ Boundary értékek tesztelése

## 📝 Példák

### Alapvető számok

```javascript
magyarSzam(0);  // "nulla"
magyarSzam(1);  // "egy"
magyarSzam(5);  // "öt"
magyarSzam(10); // "tíz"
```

### Tizen-es számok

```javascript
magyarSzam(11); // "tizenegy"
magyarSzam(15); // "tizenöt"
magyarSzam(19); // "tizenkilenc"
```

### Jelzős alakok

```javascript
magyarSzam(2);       // "kettő"
magyarSzam(2, true); // "két"

magyarSzam(12);       // "tizenkettő"
magyarSzam(12, true); // "tizenkét"
```

## 🛠 Fejlesztés

### Projekt struktúra

```
MAGYAR_SZAMOK/
├── lib/
│   └── magyarSzam.js      # Fő könyvtár
├── tests/
│   └── magyarSzamok.test.js # Tesztek
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
2. **Első tesztek**: Egyszerű számok konvertálása
3. **Jelzős alakok**: Speciális esetek kezelése (két vs. kettő)
4. **Refaktorálás**: Kód optimalizálás objektum használatával
5. **Tizen-es számok**: Összetettebb logika implementálása

## 🚦 Állapot

- ✅ 0-19 számok támogatása
- ✅ Jelzős alakok
- ✅ Teljes teszt lefedettség
- 🔄 További számok támogatása (jövőbeli fejlesztés)

## 📜 Licenc

ISC

---

**Készítette**: SzmrLevee  
**Verzió**: 1.0.0  
**Utolsó frissítés**: 2026. január 19.

> 💡 **Tipp**: Ez a projekt kiváló példa a Test Driven Development (TDD) megközelítésre JavaScript környezetben.
