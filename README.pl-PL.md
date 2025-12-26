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

### Typy lokomotyw:
- **0**: Lokomotywa parowa
- **1**: Lokomotywa elektryczna
- **2**: Lokomotywa spalinowa
- **3**: Elektryczny zespół trakcyjny
- **4**: Spalinowy zespół trakcyjny
- **5**: Zespół trakcyjny na baterie
- **6**: Hybrydowy zespół trakcyjny
- **7**: Wagon motorowy
- **8**: Lokomotywa manewrowa

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

Ten projekt jest udostępniony na licencji **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**  
🔗 https://creativecommons.org/licenses/by-nc/4.0/

✅ Możesz:
- przeglądać, używać i modyfikować kod
- wykorzystywać go w celach **niekomercyjnych**

❌ Nie możesz:
- wykorzystywać projektu ani jego pochodnych w celach **komercyjnych**
