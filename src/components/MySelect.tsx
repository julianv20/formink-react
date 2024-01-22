import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  placeholder?: string
  children: React.ReactNode
}

const MySelect = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label className="text-white" htmlFor={props.name}>
        {label}
      </label>
      <select
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
    </>
  )
}

export default MySelect
