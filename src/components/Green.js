import React, {useContext} from 'react';

import NumberContext from '../contexts/NumberContext';

const Green = () => {
  const context = useContext(NumberContext);

  return (
    <div className="green">
      {context.number}
    </div>
  )
}

export default Green;
