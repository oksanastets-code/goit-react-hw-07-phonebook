import React from 'react';

const Controls = ({ step, onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
     + { step}
    </button>
    <button type="button" onClick={onDecrement}>
      - {step}
    </button>
  </div>
);

export default Controls;
