import React, { useState } from 'react';
import { EVN } from '../evn';

const EVNValidator: React.FC = () => {
  const [evnInput, setEvnInput] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string>('');

  const handleValidate = () => {
    if (!evnInput.trim()) {
      setError('Wprowadź kod EVN');
      setIsValid(null);
      return;
    }

    try {
      const valid = EVN.validate(evnInput);
      setIsValid(valid);
      setError('');
    } catch (err) {
      setIsValid(false);
      setError(
        err instanceof Error ? err.message : 'Wystąpił błąd podczas walidacji'
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvnInput(e.target.value);
    setIsValid(null);
    setError('');
  };

  return (
    <div className="validator">
      <h2>🔍 Walidator kodów EVN</h2>

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

      <button onClick={handleValidate} className="validate-btn">
        Sprawdź poprawność
      </button>

      {isValid === true && (
        <div className="result success">
          <span className="success-icon">✅</span>
          <strong>Kod EVN jest poprawny!</strong>
        </div>
      )}

      {isValid === false && (
        <div className="result error">
          <span className="error-icon">❌</span>
          <strong>Kod EVN jest niepoprawny</strong>
          {error && <div className="error-details">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default EVNValidator;
