import React, { useState } from 'react';
import { EVN } from '../evn';
import { RollingStockType, LocomotiveType } from '../types';
import { useTranslation } from '../i18n/useTranslation';

const EVNDecoder: React.FC = () => {
  const { t } = useTranslation();
  const [evnInput, setEvnInput] = useState<string>('');
  const [decodedEvn, setDecodedEvn] = useState<EVN | null>(null);
  const [error, setError] = useState<string>('');

  const handleDecode = () => {
    if (!evnInput.trim()) {
      setError(t.errors.enterEvn);
      setDecodedEvn(null);
      return;
    }

    try {
      const decoded = EVN.decode(evnInput);
      setDecodedEvn(decoded);
      setError('');
    } catch (err) {
      setDecodedEvn(null);
      setError(err instanceof Error ? err.message : t.errors.decodingError);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvnInput(e.target.value);
    setDecodedEvn(null);
    setError('');
  };

  const getVehicleTypeLabel = (type: RollingStockType): string => {
    // Mapowanie RollingStockType na klucze tłumaczeń
    const typeKey =
      type === RollingStockType.TRACTION_VEHICLE ? 'LOCOMOTIVE' : type;
    return t.vehicleTypes[typeKey as keyof typeof t.vehicleTypes];
  };

  const getLocomotiveTypeLabel = (type: LocomotiveType): string => {
    // Mapowanie z wartości enumeracji do kluczy tłumaczeń
    const typeMapping: { [key: string]: keyof typeof t.locomotiveTypes } = {
      '0': 'STEAM_LOCOMOTIVE',
      '1': 'ELECTRIC_LOCOMOTIVE',
      '2': 'DIESEL_LOCOMOTIVE',
      '3': 'ELECTRIC_MULTIPLE_UNIT',
      '4': 'DIESEL_MULTIPLE_UNIT',
      '5': 'BATTERY_MULTIPLE_UNIT',
      '6': 'HYBRID_MULTIPLE_UNIT',
      '7': 'POWER_CAR',
      '8': 'SHUNTING_LOCOMOTIVE',
    };
    return t.locomotiveTypes[typeMapping[type]];
  };

  return (
    <div className="decoder">
      <h2>{t.decoder.title}</h2>

      <div className="form-group">
        <label htmlFor="evnInput">{t.decoder.enterEvn}</label>
        <input
          id="evnInput"
          type="text"
          value={evnInput}
          onChange={handleInputChange}
          placeholder={t.decoder.placeholder}
          maxLength={17}
        />
      </div>

      <button onClick={handleDecode} className="decode-btn">
        {t.common.decode}
      </button>

      {error && (
        <div className="error">
          <span className="error-icon">⚠️</span>
          {error}
        </div>
      )}

      {decodedEvn && !error && (
        <div className="result">
          <h3>{t.decoder.evnInfo}</h3>

          <div className="evn-info">
            <div className="info-row">
              <span className="label">{t.decoder.originalCode}</span>
              <span className="value">{decodedEvn.rawEvn}</span>
            </div>

            <div className="info-row">
              <span className="label">{t.decoder.formattedCode}</span>
              <span className="value formatted">{decodedEvn.formattedEvn}</span>
            </div>

            <div className="info-row">
              <span className="label">{t.common.country}:</span>
              <span className="value">
                {decodedEvn.countryName} ({decodedEvn.countryCode})
              </span>
            </div>

            <div className="info-row">
              <span className="label">{t.common.vehicleType}:</span>
              <span className="value">
                {getVehicleTypeLabel(decodedEvn.vehicleType)}
              </span>
            </div>

            {decodedEvn.locomotiveType && (
              <div className="info-row">
                <span className="label">{t.common.locomotiveType}:</span>
                <span className="value">
                  {getLocomotiveTypeLabel(decodedEvn.locomotiveType)}
                </span>
              </div>
            )}

            <div className="info-row">
              <span className="label">
                {t.decoder.technicalCharacteristics}:
              </span>
              <span className="value">
                {decodedEvn.technicalCharacteristics}
              </span>
            </div>

            <div className="info-row">
              <span className="label">{t.decoder.serialNumber}:</span>
              <span className="value">{decodedEvn.serialNumber}</span>
            </div>

            <div className="info-row">
              <span className="label">{t.decoder.checkDigit}:</span>
              <span className="value">{decodedEvn.checkDigit}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EVNDecoder;
