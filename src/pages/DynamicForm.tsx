import { Form, Formik } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup'

export const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value
  if (!input.validations) continue
  let schema = Yup.object()
  for (const rule of input.validations) {
    if (rule.type === 'required') schema = schema.required('Required')
  }
  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

const DynamicForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(formik) => (
          <Form className="grid gap-5 bg-neutral-800 p-5 rounded-md">
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                  />
                )
              } else if (type === 'select') {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value="">Select an option</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                )
              }
              return <span>Type: {type} No es soportado</span>
            })}
            <button
              className="bg-amber-600 px-4 py-2 rounded-md text-sm font-semibold"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DynamicForm
