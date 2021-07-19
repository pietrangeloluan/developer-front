import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from 'components'

type Props = {
  children: ReactNode
  lang?: string
  title?: string
  name?: string
}

export function Base({
  children,
  lang = 'pt-BR',
  name = 'Developer',
  title = ''
}: Props) {
  return (
    <>
      <main>
        <Helmet
          htmlAttributes={{ lang }}
          title={title}
          titleTemplate={title ? `%s | ${name}` : name}
        />
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
