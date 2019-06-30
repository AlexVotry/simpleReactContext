import React, {useContext} from 'react';

import Green from './Green';
import NumberContext from '../contexts/NumberContext';

const Blue = () => {
  const context = useContext(NumberContext);

  return (
    <div className="blue">
    <h1>parent and child of blue are effected by change.</h1>
      <button className="ui icon button" onClick={context.inc}>
        <i className="hand point up icon"></i>
      </button>
      <button className="ui icon button" onClick={context.dec}>
        <i className="hand point down icon"></i>
      </button>
      <Green />
    </div>
  )
}

export default Blue;
