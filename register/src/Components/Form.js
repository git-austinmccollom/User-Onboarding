import React from 'react'
import styled from 'styled-components'

const FormBox = styled.form`
    width: 50%;
    margin: auto;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        margin: 5px 0;
    }
    input {
        margin: 0 5px;
    }
`

export default function Form(props) {

    const {formValues, setFormValues, submitForm, disabled} = props
    
    const onInputChange = evt => {
        const value = evt.target.value
        const name = evt.target.name
        setFormValues({ ...formValues, [name]: value })
    }

    const onChecked = evt => {
        if (evt.target.value === 'false') {
            const value = 'true'
            const name = evt.target.name
            setFormValues({ ...formValues, [name]: value })
        } else {
            const value = 'false'
            const name = evt.target.name
            setFormValues({ ...formValues, [name]: value })
        }
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submitForm()
    }

    return (
        <FormBox onSubmit={onSubmit}>
            <h1>Sign Up</h1>
            <label>Name:
                <input
                   name='name'
                   type='text'
                   placeholder='Name'
                   value={formValues.name}
                   onChange={onInputChange}
                /> 
            </label>
            <label>Email:
                <input
                   name='email'
                   type='email'
                   placeholder='Email'
                   value={formValues.email}
                   onChange={onInputChange}
                /> 
            </label>
            <label>Password:
                <input
                   name='password'
                   type='password'
                   placeholder='Password'
                   value={formValues.password}
                   onChange={onInputChange}
                /> 
            </label>
            <label>Do you agree to the Terms of Service?:
                <input
                   id='terms'
                   name='terms'
                   type='checkbox'
                   value={formValues.terms}
                   onClick={onChecked}
                /> 
            </label>
            <button disabled={disabled}>submit</button>
        </FormBox>
    )
}