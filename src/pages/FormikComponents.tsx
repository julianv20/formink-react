import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormikComponents = () => {
  return (
    <div className="w-1/2">
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
        {() => (
          <Form className="grid gap-2 text-neutral-900">
            <label htmlFor="firstName">First Name</label>
            <Field
              className="px-4 py-2 rounded-md focus:outline-none"
              name="firstName"
              type="text"
            />
            <ErrorMessage
              className="text-red-500"
              component="span"
              name="firstName"
            />

            <label htmlFor="lastName">Last Name</label>
            <Field
              className="px-4 py-2 rounded-md focus:outline-none"
              name="lastName"
              type="text"
            />
            <ErrorMessage
              className="text-red-500"
              component="span"
              name="lastName"
            />

            <label htmlFor="email">Email</label>
            <Field
              className="px-4 py-2 rounded-md focus:outline-none"
              name="email"
              type="email"
            />
            <ErrorMessage
              className="text-red-500"
              component="span"
              name="email"
            />

            <label htmlFor="jobType">Job type</label>
            <Field
              className="px-4 py-2 rounded-md focus:outline-none"
              name="jobType"
              as="select"
            >
              <option value="developer">Deloper</option>
              <option value="designer">Designer</option>
              <option value="it-jr">Junior</option>
              <option value="it-senior">Senior</option>
            </Field>
            <ErrorMessage
              className="text-red-500"
              name="jobType"
              component="span"
            />

            <label>
              <Field
                className="px-4 py-2 rounded-md focus:outline-none"
                name="terms"
                type="checkbox"
              />
              Accept terms
            </label>

            <button
              type="submit"
              className="px-4 py-2 bg-neutral-800 text-sm rounded-md font-bold"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikComponents
