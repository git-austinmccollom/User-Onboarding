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
        .required('Must include a password')
})

export default formSchema