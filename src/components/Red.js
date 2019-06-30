import React, {useContext} from 'react';

import Blue from './Blue';
import NumberContext from '../contexts/NumberContext';

const Red = () => {
  const context = useContext(NumberContext);

  return (
    <div className="red">
      red: {context.number}
      <Blue />
    </div>
  )
}

export default Red;
