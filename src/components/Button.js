import React, {useContext} from 'react';
import CountryContext from '../contexts/CountryContext';
import ColorContext from '../contexts/ColorContext';


const Button = () => {

  const changeColor = color => {
    return (
        <button className={`ui button ${color}`}>
        {country}
        </button>
    )
  }
  const country = useContext(CountryContext);
  return (
    <ColorContext.Consumer>
      {color => changeColor(color)}
    </ColorContext.Consumer>
  )
}

export default Button;
