import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: { firstName: '', lastName: '', email: '' },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('Requerido'),
      lastName: Yup.string()
        .max(10, 'Debe de tener 10 caracteres o menos')
        .required('Requerido'),
      email: Yup.string().email('Email invalido').required('Requerido')
    })
  })
  return (
    <div className="w-1/2">
      <form
        className="flex flex-col gap-2 text-neutral-900"
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          className="px-4 py-2 rounded-md focus:outline-nonec"
          type="text"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && (
          <span className="text-red-500">{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          className="px-4 py-2 rounded-md focus:outline-nonec"
          type="text"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && (
          <span className="text-red-500">{errors.lastName}</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          className="px-4 py-2 rounded-md focus:outline-nonec"
          type="email"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && (
          <span className="text-red-500">{errors.email}</span>
        )}

        <button
          type="submit"
          className="px-4 py-2 bg-neutral-800 text-sm rounded-md font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormikYupPage
