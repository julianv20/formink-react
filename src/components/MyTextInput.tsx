import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'time'
    | 'week'
    | undefined
  placeholder?: string
}

const MyTextInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <div className="grid">
      <label className="text-white" htmlFor={props.name}>
        {label}
      </label>
      <input
        className="px-4 py-2 rounded-md focus:outline-none"
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className="text-red-500"
      />
      {/* {meta.touched && meta.error && (
        <span className="text-red-500">{meta.error}</span>
      )} */}
    </div>
  )
}

export default MyTextInput
