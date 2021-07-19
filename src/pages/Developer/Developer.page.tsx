import { Base } from 'layouts'
import { DeveloperList } from 'components'

import * as S from './styled'

export function Developer() {
  return (
    <Base>
      <S.GridContainer container>
        <DeveloperList />
      </S.GridContainer>
    </Base>
  )
}
