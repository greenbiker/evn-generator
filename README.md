# Generator kodów EVN

Aplikacja React TypeScript do generowania, walidacji i dekodowania kodów EVN (European Vehicle Number) używanych w kolejnictwie.

## 🚀 Funkcjonalności

- 🎲 Generator kodów EVN
- 💡 Walidator kodów EVN
- 🔎 Dekoder kodów EVN

## 📋 Struktura kodów EVN

Kod EVN składa się z 12 cyfr:

```
XX XX XXXX XXX-X  (wagony)
XX XX XXX XXXX-X  (lokomotywy)
```

Gdzie:
- **Pozycje 1-2**: Typ pojazdu
- **Pozycje 3-4**: Kod kraju
- **Pozycje 5-8/7**: Charakterystyki techniczne
- **Pozycje 9-11/8-11**: Numer seryjny
- **Pozycja 12**: Cyfra kontrolna

### Typy pojazdów:
- **90-98**: Pojazdy trakcyjne (lokomotywy)
- **99**: Pojazdy specjalne
- **50-79**: Wagony pasażerskie
- **00-49, 80-89**: Wagony towarowe

## 🚦 Uruchomienie

### Wymagania
- Node.js 16+
- npm lub yarn

### Instalacja
```bash
# Instalacja zależności
npm install

# Uruchomienie aplikacji w trybie deweloperskim
npm start

# Aplikacja zostanie uruchomiona na http://localhost:3000
```

### Budowanie
```bash
# Budowanie aplikacji produkcyjnej
npm run build

```

## 🔧 Struktura projektu

```
src/
├── components/           # Komponenty React
│   ├── EVNGenerator.tsx  # Generator kodów
│   ├── EVNValidator.tsx  # Walidator kodów
│   └── EVNDecoder.tsx    # Dekoder kodów
├── evn.ts               # Klasa EVN z logiką biznesową
├── types.ts             # Definicje typów TypeScript
├── countryCodes.ts      # Kody krajów i ich nazwy
├── App.tsx              # Główny komponent aplikacji
├── App.css              # Stylizacja
└── index.tsx            # Punkt wejścia aplikacji
```

## 📖 Przykłady użycia

### Kod EVN dla polskiej lokomotywy spalinowej:
```
94 51 2150 0546  → 94 51 215 0054-6
```

### Dekodowanie:
- **Kraj**: Polska (51)
- **Typ**: Lokomotywa spalinowa (42)
- **Charakterystyki**: 215
- **Numer seryjny**: 0054
- **Cyfra kontrolna**: 6

## 📄 Licencja

Projekt edukacyjny - wykorzystuj zgodnie z potrzebami.