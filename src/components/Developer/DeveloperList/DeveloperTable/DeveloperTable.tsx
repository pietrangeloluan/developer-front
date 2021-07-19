import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ModalDeleteDeveloper } from '../../ModalDeleteDeveloper/ModalDeleteDeveloper'
import { TableNotFoundHint } from 'components/TableNotFoundHint'
import { DeveloperDropdown } from './DeveloperDropdown'

import { DeveloperType, PaginationType } from 'types/Developer.types'

import { developerActions } from 'store/Developer'
import { deleteDeveloper, fetchOne } from 'store/Developer/Developer.actions'

import * as S from './styled'

const initPagination = {
  perPage: 10,
  page: 1,
  total: 1
}

type DeveloperTableProps = {
  rows: any
  pagination: PaginationType
  setNewDeveloper?: () => void
}

export function DeveloperTable({
  rows = [],
  pagination = initPagination,
  setNewDeveloper
}: DeveloperTableProps) {
  const dispatch = useDispatch()

  const [_deleteDeveloper, _setDeleteDeveloper] = useState({} as DeveloperType)

  function onExit() {
    _setDeleteDeveloper({} as DeveloperType)
  }

  function onRemoveDeveloper() {
    dispatch(
      deleteDeveloper({
        id: _deleteDeveloper.id
      })
    )
    _setDeleteDeveloper({} as DeveloperType)
  }

  const handleChange = (_event, value) => {
    dispatch(developerActions.fetchAll({ params: { page: value } }))
  }

  function onEdit(id) {
    return function () {
      dispatch(fetchOne(id))
    }
  }

  return (
    <S.Wrapper data-testid="DeveloperTable">
      {Object.keys(_deleteDeveloper).length > 0 ? (
        <ModalDeleteDeveloper
          name={_deleteDeveloper.name}
          onExit={onExit}
          onRemove={onRemoveDeveloper}
        />
      ) : null}
      <S.Teste>
        <S.Table id="table-fixed">
          <tbody>
            <S.Line id="header">
              <S.Header>Nome</S.Header>
            </S.Line>
            {rows.map((each, key) => (
              <S.Line id="values" key={key}>
                <S.Column>{each.name}</S.Column>
              </S.Line>
            ))}
          </tbody>
        </S.Table>
        <S.ScrollWrapper>
          <S.Table id="table-scrolled">
            <tbody>
              <S.Line id="header">
                <S.Header className="right">Idade</S.Header>
                <S.Header>Sexo</S.Header>
                <S.Header className="right">Data de nascimento</S.Header>
                <S.Header>Hobby</S.Header>
              </S.Line>
              {rows.map((each, key) => (
                <S.Line id="values" key={key}>
                  <S.Column className="right">{each.age}</S.Column>
                  <S.Column>{each.sex}</S.Column>
                  <S.Column className="right">{each.birthdate}</S.Column>
                  <S.Column>{each.hobby}</S.Column>
                </S.Line>
              ))}
            </tbody>
          </S.Table>
        </S.ScrollWrapper>
        <S.Table id="table-fixed">
          <tbody>
            <S.Line id="header">
              <S.Header>Ações</S.Header>
            </S.Line>
            {rows.map((each, key) => (
              <S.Line key={key}>
                <S.Column id="actions-column">
                  <DeveloperDropdown
                    id={each.id}
                    onEdit={onEdit}
                    setDeleteDeveloper={() => _setDeleteDeveloper(each)}
                  ></DeveloperDropdown>
                </S.Column>
              </S.Line>
            ))}
          </tbody>
        </S.Table>
      </S.Teste>
      {!rows.length && <TableNotFoundHint onClick={setNewDeveloper} />}
      {pagination && (
        <S.TableBotton>
          <S.TablePagination
            count={pagination.total}
            page={pagination.page}
            onChange={handleChange}
          />
        </S.TableBotton>
      )}
    </S.Wrapper>
  )
}
