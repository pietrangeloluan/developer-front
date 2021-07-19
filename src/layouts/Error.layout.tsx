import { Helmet } from 'react-helmet'

export function Error({ children }) {
  return (
    <main>
      <Helmet title="Erro" titleTemplate="Luan Carlos Pietrangelo - %s" />
      {children}
    </main>
  )
}
