import React, { useState } from 'react';
import EVNGenerator from './components/EVNGenerator';
import EVNValidator from './components/EVNValidator';
import EVNDecoder from './components/EVNDecoder';
import LanguageSelector from './components/LanguageSelector';
import TranslationProvider from './i18n/TranslationProvider';
import { useTranslation } from './i18n/useTranslation';
import './App.css';

type ActiveTab = 'generator' | 'validator' | 'decoder';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('generator');
  const { t } = useTranslation();

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'generator':
        return <EVNGenerator />;
      case 'validator':
        return <EVNValidator />;
      case 'decoder':
        return <EVNDecoder />;
      default:
        return <EVNGenerator />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-top">
          <div className="header-content">
            <h1>{t.header.title}</h1>
            <p>{t.header.description}</p>
          </div>
          <LanguageSelector />
        </div>
      </header>

      <nav className="tabs">
        <button
          className={`tab ${activeTab === 'generator' ? 'active' : ''}`}
          onClick={() => setActiveTab('generator')}
        >
          {t.common.generator}
        </button>
        <button
          className={`tab ${activeTab === 'validator' ? 'active' : ''}`}
          onClick={() => setActiveTab('validator')}
        >
          {t.common.validator}
        </button>
        <button
          className={`tab ${activeTab === 'decoder' ? 'active' : ''}`}
          onClick={() => setActiveTab('decoder')}
        >
          {t.common.decoder}
        </button>
      </nav>

      <main className="content">{renderActiveComponent()}</main>

      <footer className="App-footer">
        <p>
          {t.footer.description}
          <br />
          <small>{t.footer.evnDescription}</small>
        </p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
}

export default App;
