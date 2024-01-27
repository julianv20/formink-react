import { createBrowserRouter } from 'react-router-dom'
import Layout from '../assets/layout/Layout'
import {
  FormikAbstract,
  FormikBasic,
  FormikComponents,
  FormikYupPage,
  RegisterFormik,
  DynamicForm
} from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'formik-basic',
        element: <FormikBasic />
      },
      {
        path: 'formik-yup',
        element: <FormikYupPage />
      },
      {
        path: 'formik-components',
        element: <FormikComponents />
      },
      {
        path: 'formik-abstract',
        element: <FormikAbstract />
      },
      {
        path: 'formik-register',
        element: <RegisterFormik />
      },
      {
        path: 'formik-dynamic',
        element: <DynamicForm />
      }
    ]
  }
])

export default router
