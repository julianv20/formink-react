import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'

const FormikAbstract = () => {
  return (
    <div className="bg-neutral-800 rounded-md p-10">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(10, 'Debe de tener 10 caracteres o menos')
            .required('Requerido'),
          email: Yup.string().email('Email invalido').required('Requerido'),
          terms: Yup.boolean()
            .oneOf([true], 'Debe aceptar los terminos')
            .required('Requerido'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opcion no es permitida')
            .required('Requerido')
        })}
      >
        {(formik) => (
          <Form className="grid gap-2 text-neutral-900">
            <MyTextInput label="First name" name="firstName" />
            <MyTextInput label="Last name" name="lastName" />
            <MyTextInput label="email" name="email" type="email" />
            <MySelect label="Job Type" name="jobType">
              <option value="developer">Deloper</option>
              <option value="designer">Designer</option>
              <option value="it-jr">Junior</option>
              <option value="it-senior">Senior</option>
            </MySelect>
            <MyCheckbox label="Terms and conditions" name="terms" />

            <button
              type="submit"
              className="px-4 py-2 bg-slate-700 text-sm rounded-md font-bold"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikAbstract
