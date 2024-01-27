import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'

const RegisterFormik = () => {
  return (
    <div className="bg-neutral-800 rounded-md p-10">
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Required')
            .max(15, 'Debe tener un máximo de 15 caracteres'),
          lastName: Yup.string()
            .required('Required')
            .max(10, 'Debe tener un máximo de 10 caracteres'),
          email: Yup.string().email('Email invalido').required('Required'),
          password: Yup.string()
            .required('Required')
            .min(8, 'Debe tener un mínimo de 8 caracteres'),
          passwordConfirmation: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
        })}
      >
        <Form className="grid gap-2">
          <MyTextInput label="Name" name="name" />
          <MyTextInput label="Last name" name="lastName" />
          <MyTextInput label="Email" name="email" type="email" />
          <MyTextInput label="Password" name="password" type="password" />
          <MyTextInput
            label="Password Confirm"
            name="passwordConfirmation"
            type="password"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-slate-700 text-sm rounded-md font-bold"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterFormik
