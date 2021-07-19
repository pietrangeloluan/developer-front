import { Error } from 'layouts'

import * as S from './styled'

export function PageNotFound() {
  return (
    <Error>
      <S.Wrapper>
        <S.Error>
          <S.Code>404</S.Code>
          <S.Message>Conteúdo não encontrado!</S.Message>
        </S.Error>
      </S.Wrapper>
    </Error>
  )
}
