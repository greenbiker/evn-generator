import React, { useState } from 'react';
import EVNGenerator from './components/EVNGenerator';
import EVNValidator from './components/EVNValidator';
import EVNDecoder from './components/EVNDecoder';
import './App.css';

type ActiveTab = 'generator' | 'validator' | 'decoder';

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('generator');

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
        <h1>🚂 Generator kodów EVN</h1>
        <p>
          Narzędzie do generowania, walidacji i dekodowania kodów EVN dla taboru
          kolejowego
        </p>
      </header>

      <nav className="tabs">
        <button
          className={`tab ${activeTab === 'generator' ? 'active' : ''}`}
          onClick={() => setActiveTab('generator')}
        >
          Generator
        </button>
        <button
          className={`tab ${activeTab === 'validator' ? 'active' : ''}`}
          onClick={() => setActiveTab('validator')}
        >
          Walidator
        </button>
        <button
          className={`tab ${activeTab === 'decoder' ? 'active' : ''}`}
          onClick={() => setActiveTab('decoder')}
        >
          Dekoder
        </button>
      </nav>

      <main className="content">{renderActiveComponent()}</main>

      <footer className="App-footer">
        <p>
          Generator kodów EVN zgodnych z międzynarodowymi standardami
          kolejowymi.
          <br />
          <small>
            EVN (European Vehicle Number) to ujednolicony system numeracji
            taboru kolejowego w Europie.
          </small>
        </p>
      </footer>
    </div>
  );
}

export default App;
