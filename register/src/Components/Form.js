import React from 'react'
import styled from 'styled-components'

const FormBox = styled.form`
    width: 50%;
    margin: auto;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    label {
        margin: 5px 0;
    }
    input {
        margin: 0 5px;
    }
    .innerForm {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .errorDiv {
        color: red;
    }
    .inlineDiv {
        display: flex;
    }
`

export default function Form(props) {

    const {formValues, setFormValues, changeFormValues, submitForm, disabled, errors} = props
    
    const onInputChange = evt => {
        const value = evt.target.value
        const name = evt.target.name
        changeFormValues(name, value)
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
            <div className="innerForm">
                <h1>Sign Up</h1>
                <div className='inlineDiv'>
                    <div>{errors.name}</div>
                    <label>Name:
                        <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        value={formValues.name}
                        onChange={onInputChange}
                        /> 
                    </label>
                </div>
                <div className='inlineDiv'>
                    <div className="errorDiv">{errors.email}</div>
                    <label>Email:
                        <input
                        name='email'
                        type='email'
                        placeholder='Email'
                        value={formValues.email}
                        onChange={onInputChange}
                        /> 
                    </label>
                </div>
                <div className='inlineDiv'>
                    <div>{errors.password}</div>
                    <label>Password:
                        <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={formValues.password}
                        onChange={onInputChange}
                        /> 
                    </label>
                </div>
                <div className='inlineDiv'>
                    <div>{errors.terms}</div>
                    <label>Do you agree to the Terms of Service?:
                        <input
                        id='terms'
                        name='terms'
                        type='checkbox'
                        value={formValues.terms}
                        onClick={onChecked}
                        /> 
                    </label>
                </div>
                <button disabled={disabled}>submit</button>
            </div>
        </FormBox>
    )
}