import React, { useState } from 'react';
import { EVN } from '../evn';
import { useTranslation } from '../i18n/useTranslation';

const EVNValidator: React.FC = () => {
  const { t } = useTranslation();
  const [evnInput, setEvnInput] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string>('');

  const handleValidate = () => {
    if (!evnInput.trim()) {
      setError(t.errors.enterEvn);
      setIsValid(null);
      return;
    }

    try {
      const valid = EVN.validate(evnInput);
      setIsValid(valid);
      setError('');
    } catch (err) {
      setIsValid(false);
      setError(err instanceof Error ? err.message : t.errors.validationError);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvnInput(e.target.value);
    setIsValid(null);
    setError('');
  };

  return (
    <div className="validator">
      <h2>{t.validator.title}</h2>

      <div className="form-group">
        <label htmlFor="evnInput">{t.validator.enterEvn}:</label>
        <input
          id="evnInput"
          type="text"
          value={evnInput}
          onChange={handleInputChange}
          placeholder={t.validator.placeholder}
          maxLength={17}
        />
      </div>

      <button onClick={handleValidate} className="validate-btn">
        {t.common.checkValidity}
      </button>

      {isValid === true && (
        <div className="result success">
          <span className="success-icon">✅</span>
          <strong>{t.validator.validEvn}</strong>
        </div>
      )}

      {isValid === false && (
        <div className="result error">
          <span className="error-icon">❌</span>
          <strong>{t.validator.invalidEvn}</strong>
          {error && <div className="error-details">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default EVNValidator;
