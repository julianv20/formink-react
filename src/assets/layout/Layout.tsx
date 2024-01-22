import { Outlet, useNavigate } from 'react-router-dom'

const rutas = [
  {
    id: 1,
    name: 'Formik abstraction',
    route: '/formik-abstract'
  },
  {
    id: 2,
    name: 'Formik Basic',
    route: '/formik-basic'
  },
  {
    id: 3,
    name: 'Formik yup',
    route: 'formik-yup'
  },
  {
    id: 4,
    name: 'Formik components',
    route: 'formik-components'
  }
]

const Layout = () => {
  const navigate = useNavigate()
  return (
    <section>
      <nav className="flex justify-center gap-10 bg-neutral-900 p-4 mb-20">
        {rutas.map((ruta) => (
          <div
            className="cursor-pointer"
            key={ruta.id}
            onClick={() => navigate(`${ruta.route}`)}
          >
            <h3>{ruta.name}</h3>
          </div>
        ))}
      </nav>
      <main className="flex justify-center">
        <Outlet />
      </main>
    </section>
  )
}

export default Layout
