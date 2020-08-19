import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import styled from 'styled-components'
import formSchema from './Validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
}

function App() {

  const [ formValues, setFormValues ] = useState(initialFormValues);

  return (
    <div className="App">
      <Form formValues={formValues} setFormValues={setFormValues}/>
    </div>
  );
}

export default App;
