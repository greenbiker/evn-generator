import React, { useState } from 'react';
import { EVN } from '../evn';
import { RollingStockType, LocomotiveType } from '../types';
import { COUNTRY_CODES, COUNTRY_NAMES } from '../countryCodes';

const EVNGenerator: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedVehicleType, setSelectedVehicleType] = useState<
    RollingStockType | ''
  >('');
  const [selectedLocomotiveType, setSelectedLocomotiveType] = useState<
    LocomotiveType | ''
  >('');
  const [generatedEvn, setGeneratedEvn] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleGenerate = () => {
    try {
      setError('');
      const countryCode = selectedCountry || undefined;
      const vehicleType = selectedVehicleType || undefined;
      const locomotiveType = selectedLocomotiveType || undefined;

      const evn = EVN.random(countryCode, vehicleType, locomotiveType);
      setGeneratedEvn(evn);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Wystąpił błąd podczas generowania'
      );
    }
  };

  const getVehicleTypeLabel = (type: RollingStockType): string => {
    const labels = {
      [RollingStockType.TRACTION_VEHICLE]: 'Pojazd trakcyjny',
      [RollingStockType.PASSENGER_WAGON]: 'Wagon pasażerski',
      [RollingStockType.FREIGHT_WAGON]: 'Wagon towarowy',
      [RollingStockType.SPECIAL_VEHICLE]: 'Pojazd specjalny',
    };
    return labels[type];
  };

  const getLocomotiveTypeLabel = (type: LocomotiveType): string => {
    const labels = {
      [LocomotiveType.STEAM_LOCOMOTIVE]: 'Lokomotywa parowa',
      [LocomotiveType.ELECTRIC_LOCOMOTIVE]: 'Lokomotywa elektryczna',
      [LocomotiveType.DIESEL_LOCOMOTIVE]: 'Lokomotywa spalinowa',
      [LocomotiveType.ELECTRIC_MULTIPLE_UNIT]: 'Elektryczny zespół trakcyjny',
      [LocomotiveType.DIESEL_MULTIPLE_UNIT]: 'Spalinowy zespół trakcyjny',
      [LocomotiveType.BATTERY_MULTIPLE_UNIT]: 'Akumulatorowy zespół trakcyjny',
      [LocomotiveType.HYBRID_MULTIPLE_UNIT]: 'Hybrydowy zespół trakcyjny',
      [LocomotiveType.POWER_CAR]: 'Wagon napędowy',
      [LocomotiveType.SHUNTING_LOCOMOTIVE]: 'Lokomotywa manewrowa',
    };
    return labels[type];
  };

  return (
    <div className="generator">
      <h2>🚂 Generator kodów EVN</h2>

      <div className="form-group">
        <label htmlFor="country">Kraj (opcjonalnie):</label>
        <select
          id="country"
          value={selectedCountry}
          onChange={e => setSelectedCountry(e.target.value)}
        >
          <option value="">Losowy kraj</option>
          {Object.entries(COUNTRY_CODES).map(([code, iso]) => (
            <option key={code} value={code}>
              {COUNTRY_NAMES[iso]} ({code})
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="vehicleType">Typ pojazdu (opcjonalnie):</label>
        <select
          id="vehicleType"
          value={selectedVehicleType}
          onChange={e =>
            setSelectedVehicleType(e.target.value as RollingStockType)
          }
        >
          <option value="">Losowy typ</option>
          {Object.values(RollingStockType).map(type => (
            <option key={type} value={type}>
              {getVehicleTypeLabel(type)}
            </option>
          ))}
        </select>
      </div>

      {selectedVehicleType === RollingStockType.TRACTION_VEHICLE && (
        <div className="form-group">
          <label htmlFor="locomotiveType">Typ lokomotywy (opcjonalnie):</label>
          <select
            id="locomotiveType"
            value={selectedLocomotiveType}
            onChange={e =>
              setSelectedLocomotiveType(e.target.value as LocomotiveType)
            }
          >
            <option value="">Losowy typ lokomotywy</option>
            {Object.values(LocomotiveType).map(type => (
              <option key={type} value={type}>
                {getLocomotiveTypeLabel(type)}
              </option>
            ))}
          </select>
        </div>
      )}

      <button onClick={handleGenerate} className="generate-btn">
        Wygeneruj kod EVN
      </button>

      {error && (
        <div className="error">
          <span className="error-icon">⚠️</span>
          {error}
        </div>
      )}

      {generatedEvn && !error && (
        <div className="result">
          <h3>✅ Wygenerowany kod EVN:</h3>
          <div className="evn-code">{generatedEvn}</div>
          <div className="evn-formatted">
            Sformatowany:{' '}
            {(() => {
              try {
                return EVN.decode(generatedEvn).formattedEvn;
              } catch {
                return generatedEvn;
              }
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default EVNGenerator;
