import React, {useState} from 'react';
import './App.css';
import CountryContext from './contexts/CountryContext';
import ColorContext from './contexts/ColorContext';
import NumberContext from './contexts/NumberContext';

import UserCreate from './components/UserCreate';
import Red from './components/Red';

const App = () => {
  const [country, setCountry] = useState('us');
  const [number, setNumber] = useState(4);
  const inc = () => setNumber(number + 1);
  const dec = () => setNumber(number - 1);
  const initialState = { number, inc, dec };

  const renderFlags = () => {
    return (
      <React.Fragment>
        <div>
          <i className="us flag" onClick={() => setCountry('US')}></i>
          <i className="ca flag" onClick={() => setCountry('Canada')}></i>
        </div>
        <ColorContext.Provider value="green">
          <CountryContext.Provider value={country}>
            <UserCreate/>
          </CountryContext.Provider>
        </ColorContext.Provider>
      </React.Fragment>
    )
  }

const renderNumbers = () => {
  return (
    <React.Fragment>
      <NumberContext.Provider value={initialState}>
        <Red />
      </NumberContext.Provider>
    </React.Fragment>
  )
}

  return (
    <div className="ui container">
      {renderFlags()}
      {renderNumbers()}
   </div>
  )
}

export default App;
