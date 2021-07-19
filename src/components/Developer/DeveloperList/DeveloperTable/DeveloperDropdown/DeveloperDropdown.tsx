import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { Dropdown } from 'components/Dropdown'
import { Icon } from 'components/Icon'

import * as S from './styles'

type DeveloperDropdownProps = {
  id: string
  onEdit: (_id: string) => () => void
  setDeleteDeveloper?: () => void
}

export const DeveloperDropdown = ({
  id,
  onEdit,
  setDeleteDeveloper
}: DeveloperDropdownProps) => {
  return (
    <S.Wrapper>
      <Dropdown
        title={
          <IconButton
            id="action"
            color="inherit"
            aria-label="open drawer"
            onClick={() => {}}
            size="medium"
            edge="start"
          >
            <Icon
              icon="itens-interface-actions"
              width={12}
              height={12}
              aria-label="action"
            />
          </IconButton>
        }
      >
        <S.Nav>
          <Link to={'#'} onClick={onEdit(id)}>
            <S.Link>
              <span>Editar</span>
            </S.Link>
          </Link>
          <S.Link onClick={setDeleteDeveloper}>
            <span>Excluir</span>
          </S.Link>
        </S.Nav>
      </Dropdown>
    </S.Wrapper>
  )
}
