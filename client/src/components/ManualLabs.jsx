import React, { useState } from 'react';
import { useFormik } from 'formik';

import '../css/manualLabs.css';

const initialValues = {
  email: '',
  glucose: undefined,
  insulin: undefined,
  hba1c: undefined,
  blilirubin: undefined,
  ggt: undefined,
  tag: undefined
}

export default function ManualLabs({manualLabEntry}) {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      manualLabEntry(values);
    }
  })
  return (
    <div className="manual-lab-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <h3>Email: </h3>
          <input type="email" {...formik.getFieldProps('email')} />
        </div>
        <div className="input-container">
          <h3>Fasting Glucose (mg/dL): </h3>
          <input type="text" {...formik.getFieldProps('glucose')} />
        </div>
        <div className="input-container">
          <h3>Fasting Insulin (mU/L)</h3>
          <input type="text" {...formik.getFieldProps('insulin')} />
        </div>
        <div className="input-container">
          <h3>HbA1c (% total Hgb): </h3>
          <input type="text" {...formik.getFieldProps('hba1c')} />
        </div>
        <div className="input-container">
          <h3>Bilirubin (mg/dL): </h3>
          <input type="text" {...formik.getFieldProps('bilirubin')} />
        </div>
        <div className="input-container">
          <h3>GGT (U/L): </h3>
          <input type="text" {...formik.getFieldProps('ggt')} />
        </div>
        <div className="input-container">
          <h3>Triglycerides (TAG, mg/dL): </h3>
          <input type="text" {...formik.getFieldProps('tag')} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}