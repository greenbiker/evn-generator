# Multilanguage README Pattern
[![pl](https://img.shields.io/badge/lang-pl-red.svg)](https://github.com/greenbiker/evn-generator/blob/main/README.pl-PL.md)

# EVN Code Generator

React TypeScript application for generating, validating, and decoding EVN (European Vehicle Number) codes used in railway transport.

## 🌍 Language Support

- 🇵🇱 **Polish**
- 🇬🇧 **English**
- 🇩🇪 **German** 

*The application automatically detects your browser language and saves your language preference.*

## 🚀 Features

- 🎲 EVN code generator
- 💡 EVN code validator  
- 🔎 EVN code decoder
- 🌐 Multi-language interface (Polish, English, German)
- 📱 Responsive design

## 📋 EVN Code Structure

EVN code consists of 12 digits:

```
XX XX XXXX XXX-X  (wagons)
XX XX XXX XXXX-X  (locomotives)
```

Where:
- **Positions 1-2**: Vehicle type
- **Positions 3-4**: Country code
- **Positions 5-8/7**: Technical characteristics
- **Positions 9-11/8-11**: Serial number
- **Position 12**: Check digit

### Vehicle Types:
- **90-98**: Traction vehicles (locomotives)
- **99**: Special vehicles
- **50-79**: Passenger wagons
- **00-49, 80-89**: Freight wagons

### Locomotive Types:
- **0**: Steam locomotive
- **1**: Electric locomotive
- **2**: Diesel locomotive
- **3**: Electric multiple unit
- **4**: Diesel multiple unit
- **5**: Battery multiple unit
- **6**: Hybrid multiple unit
- **7**: Power car
- **8**: Shunting locomotive

## 🚦 Getting Started

### Requirements
- Node.js 16+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Application will run on http://localhost:3000
```

### Building
```bash
# Build production application
npm run build
```

## 📖 Usage Examples

### EVN code for Polish diesel locomotive:
```
94 51 2150 0546  → 94 51 215 0054-6
```

### Decoding:
- **Country**: Poland (51)
- **Type**: Diesel locomotive (2)
- **Characteristics**: 215
- **Serial number**: 0054
- **Check digit**: 6

## 📄 License

This project is licensed under **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**  
🔗 https://creativecommons.org/licenses/by-nc/4.0/

✅ You may:
- view, use and modify the code
- use it for **non-commercial** purposes

❌ You may not:
- use the project or its derivatives for **commercial** purposes
