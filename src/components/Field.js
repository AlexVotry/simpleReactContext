import React, {useContext} from 'react';
import DefaultContext from '../contexts/DefaultContext';

const Field = () => {

  const context = useContext(DefaultContext);

  return (
    <div className="ui label">
      {context}
      <div className="ui input">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  )
}

export default Field;
