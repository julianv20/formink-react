import { createBrowserRouter } from 'react-router-dom'
import Layout from '../assets/layout/Layout'
import {
  FormikAbstract,
  FormikBasic,
  FormikComponents,
  FormikYupPage
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
      }
    ]
  }
])

export default router
