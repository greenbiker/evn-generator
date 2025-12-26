import React, { useState } from 'react';
import { EVN } from '../evn';
import { RollingStockType, LocomotiveType } from '../types';
import { COUNTRY_CODES, COUNTRY_NAMES } from '../countryCodes';
import { useTranslation } from '../i18n/useTranslation';

const EVNGenerator: React.FC = () => {
  const { t } = useTranslation();
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
      setError(err instanceof Error ? err.message : t.errors.generationError);
    }
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
    <div className="generator">
      <h2>{t.generator.title}</h2>

      <div className="form-group">
        <label htmlFor="country">
          {t.common.country} ({t.common.optional}):
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={e => setSelectedCountry(e.target.value)}
        >
          <option value="">
            {t.common.random} {t.common.country.toLowerCase()}
          </option>
          {Object.entries(COUNTRY_CODES).map(([code, iso]) => (
            <option key={code} value={code}>
              {COUNTRY_NAMES[iso]} ({code})
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="vehicleType">
          {t.common.vehicleType} ({t.common.optional}):
        </label>
        <select
          id="vehicleType"
          value={selectedVehicleType}
          onChange={e =>
            setSelectedVehicleType(e.target.value as RollingStockType)
          }
        >
          <option value="">{t.common.random} typ</option>
          {Object.values(RollingStockType).map(type => (
            <option key={type} value={type}>
              {getVehicleTypeLabel(type)}
            </option>
          ))}
        </select>
      </div>

      {selectedVehicleType === RollingStockType.TRACTION_VEHICLE && (
        <div className="form-group">
          <label htmlFor="locomotiveType">
            {t.common.locomotiveType} ({t.common.optional}):
          </label>
          <select
            id="locomotiveType"
            value={selectedLocomotiveType}
            onChange={e =>
              setSelectedLocomotiveType(e.target.value as LocomotiveType)
            }
          >
            <option value="">
              {t.common.random} {t.common.locomotiveType.toLowerCase()}
            </option>
            {Object.values(LocomotiveType).map(type => (
              <option key={type} value={type}>
                {getLocomotiveTypeLabel(type)}
              </option>
            ))}
          </select>
        </div>
      )}

      <button onClick={handleGenerate} className="generate-btn">
        {t.generator.generateEvn}
      </button>

      {error && (
        <div className="error">
          <span className="error-icon">⚠️</span>
          {error}
        </div>
      )}

      {generatedEvn && !error && (
        <div className="result">
          <h3>{t.generator.generated}</h3>
          <div className="evn-code">{generatedEvn}</div>
          <div className="evn-formatted">
            {t.generator.formatted}{' '}
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
