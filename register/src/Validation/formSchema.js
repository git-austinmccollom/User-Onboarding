import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Must include your name'),
    email: yup
        .string().min(6)
        .email()
        .required('Must include your email'),
    password: yup
        .string()
        .required('Must include a password'),
    terms: yup
        .bool()
        .required('You must agree to our Terms of Service before we register your account')
})

export default formSchema