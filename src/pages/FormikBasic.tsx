import { FormikErrors, useFormik } from 'formik'

interface FormValues {
  firstName: string
  lastName: string
  email: string
}

const FormikBasic = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {}
    if (!firstName) errors.firstName = 'Required'
    else if (firstName.length >= 15)
      errors.firstName = 'Must be 15 caractones or less'

    if (!lastName) errors.lastName = 'Required'
    else if (lastName.length >= 10)
      errors.lastName = 'Must be 10 characters or less'

    if (!email) errors.email = 'Required'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      errors.email = 'Invalid email address'

    return errors
  }

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: { firstName: '', lastName: '', email: '' },
      onSubmit: (values) => {
        console.log(values)
      },
      validate
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
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span className="text-red-500">{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          className="px-4 py-2 rounded-md focus:outline-nonec"
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && (
          <span className="text-red-500">{errors.lastName}</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          className="px-4 py-2 rounded-md focus:outline-nonec"
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
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

export default FormikBasic
