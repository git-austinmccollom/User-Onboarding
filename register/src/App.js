import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import styled from 'styled-components'
import formSchema from './Validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'
// import uuid from 'uuid'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  // terms: false
}

function App() {

  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ disabled, setDisabled ] = useState(true);

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        console.log(valid)
        setDisabled(!valid);
      })
  }, [formValues])

  const submitForm = evt => {
    const user = {
      // id: uuid(),
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
  }

  return (
    <div className="App">
      <Form formValues={formValues} setFormValues={setFormValues} submitForm={submitForm} disabled={disabled}/>
    </div>
  );
}

export default App;
