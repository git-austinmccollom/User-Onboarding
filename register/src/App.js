import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import User from './Components/User'
import styled from 'styled-components'
import formSchema from './Validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'
// import uuid from 'react-uuid'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: 'false'
}

const initialErrorValues = {
  name: '',
  email: '',
  password: '',
  terms: ''
}

function App() {

  const [ users, setUsers ] = useState([])
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ disabled, setDisabled ] = useState(true);
  const [ errors, setErrors ] = useState(initialErrorValues);

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [formValues])

  const changeFormValues = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors,
        [name]: "",
      })
    })
    /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0],
      })
    })

  setFormValues({
    ...formValues,
    [name]: value // NOT AN ARRAY
  })
    setFormValues({ ...formValues, [name]: value })
  }

  const submitForm = evt => {
    const user = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(user)
  }

  const postNewUser = user => {
    axios.post('https://reqres.in/api/users', user)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  return (
    <div className="App">
      <Form formValues={formValues} setFormValues={setFormValues} changeFormValues={changeFormValues} submitForm={submitForm} disabled={disabled} errors={errors}/>
      {
        users.map( usr => {
          return <User key={Math.random * Math.Random * 100} user={usr}/>
        })
      }
    </div>
  );
}

export default App;
