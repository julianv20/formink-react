import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
}

const MyCheckbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <>
      <label className="text-white">
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage
        name={props.name}
        component="span"
        className="text-red-500"
      />
      {/* {meta.touched && meta.error && (
        <span className="text-red-500">{meta.error}</span>
      )} */}
    </>
  )
}

export default MyCheckbox
