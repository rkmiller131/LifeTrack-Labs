import React from 'react';

export default function RadioButtons({ label }) {
  return (
    <label>
      {label}
      <input
        type="radio"
      >
      </input>
    </label>
  );
}