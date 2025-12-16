import React, { useState } from 'react';
import { EVN } from '../evn';
import { RollingStockType, LocomotiveType } from '../types';

const EVNDecoder: React.FC = () => {
  const [evnInput, setEvnInput] = useState<string>('');
  const [decodedEvn, setDecodedEvn] = useState<EVN | null>(null);
  const [error, setError] = useState<string>('');

  const handleDecode = () => {
    if (!evnInput.trim()) {
      setError('Wprowadź kod EVN');
      setDecodedEvn(null);
      return;
    }

    try {
      const decoded = EVN.decode(evnInput);
      setDecodedEvn(decoded);
      setError('');
    } catch (err) {
      setDecodedEvn(null);
      setError(
        err instanceof Error ? err.message : 'Wystąpił błąd podczas dekodowania'
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvnInput(e.target.value);
    setDecodedEvn(null);
    setError('');
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
    <div className="decoder">
      <h2>🔎 Dekoder kodów EVN</h2>

      <div className="form-group">
        <label htmlFor="evnInput">Kod EVN:</label>
        <input
          id="evnInput"
          type="text"
          value={evnInput}
          onChange={handleInputChange}
          placeholder="np. 94 51 2150 054-6 lub 94512150054-6"
          maxLength={17}
        />
      </div>

      <button onClick={handleDecode} className="decode-btn">
        Dekoduj kod EVN
      </button>

      {error && (
        <div className="error">
          <span className="error-icon">⚠️</span>
          {error}
        </div>
      )}

      {decodedEvn && !error && (
        <div className="result">
          <h3>📋 Informacje o kodzie EVN:</h3>

          <div className="evn-info">
            <div className="info-row">
              <span className="label">Kod oryginalny:</span>
              <span className="value">{decodedEvn.rawEvn}</span>
            </div>

            <div className="info-row">
              <span className="label">Kod sformatowany:</span>
              <span className="value formatted">{decodedEvn.formattedEvn}</span>
            </div>

            <div className="info-row">
              <span className="label">Kraj:</span>
              <span className="value">
                {decodedEvn.countryName} ({decodedEvn.countryCode})
              </span>
            </div>

            <div className="info-row">
              <span className="label">Typ pojazdu:</span>
              <span className="value">
                {getVehicleTypeLabel(decodedEvn.vehicleType)}
              </span>
            </div>

            {decodedEvn.locomotiveType && (
              <div className="info-row">
                <span className="label">Typ lokomotywy:</span>
                <span className="value">
                  {getLocomotiveTypeLabel(decodedEvn.locomotiveType)}
                </span>
              </div>
            )}

            <div className="info-row">
              <span className="label">Charakterystyki techniczne:</span>
              <span className="value">
                {decodedEvn.technicalCharacteristics}
              </span>
            </div>

            <div className="info-row">
              <span className="label">Numer seryjny:</span>
              <span className="value">{decodedEvn.serialNumber}</span>
            </div>

            <div className="info-row">
              <span className="label">Cyfra kontrolna:</span>
              <span className="value">{decodedEvn.checkDigit}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EVNDecoder;
