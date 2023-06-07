import React, { useState } from 'react';

export default function RadioButtons({ label, qId, question, updateSubQScore, row }) {
  const [selectedButton, setSelectedButton] = useState(-1);

  function handleButtonSelect(e) {
    const { value } = e.target;
    setSelectedButton(Number(value));
    updateSubQScore(row, Number(value));
  }

  return (
    <label>
      {label}
      <input
        type="radio"
        value={label}
        name={question}
        defaultChecked={label === selectedButton}
        onChange={handleButtonSelect}
      >
      </input>
    </label>
  );
}