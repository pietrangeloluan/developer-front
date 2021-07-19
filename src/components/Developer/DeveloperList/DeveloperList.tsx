import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { AddButton } from 'components/AddButton'
import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { all } from 'store/Developer/Developer.selector'
import { developerActions } from 'store/Developer'

import { submitOnEnter } from 'utils/submitOnEnter'

import * as S from './styled'
import { DeveloperTable } from './DeveloperTable'
import { ModalFormDeveloper } from '../ModalFormDeveloper'
import { DeveloperType } from 'types/Developer.types'

import { INITIAL_STATE } from 'constants/developer.constants'

const FILTER_INITIAL_STATE = {
  name: '',
  hobby: ''
}

const schema = Yup.object().shape({
  name: Yup.string().label('Nome'),
  hobby: Yup.string().label('Hobby')
})

export function DeveloperList() {
  const dispatch = useDispatch()

  const [modalDeveloper, setModalDeveloper] = useState(false)
  const [developer, setDeveloper] = useState({} as DeveloperType)
  const { developers: selector, developer: editableDeveloper } =
    useSelector(all)

  useEffect(() => {
    dispatch(developerActions.fetchAll())
  }, [dispatch])

  useEffect(() => {
    setDeveloper(editableDeveloper)
    console.log('editableDeveloper: ', editableDeveloper)
    if (editableDeveloper.id) setModalDeveloper(true)
  }, [editableDeveloper])

  const [errors, setErrors] = useState({ ...FILTER_INITIAL_STATE })
  const [filter, setFilter] = useState({ ...FILTER_INITIAL_STATE })

  function handleInput(value: string | number, name: string) {
    setErrors({ ...errors, [name]: '' })
    setFilter({ ...filter, [name]: value })
  }

  async function onFilter() {
    try {
      const params = await schema.validate(filter, {
        abortEarly: false,
        stripUnknown: true
      })

      dispatch(developerActions.fetchAll({ params }))
    } catch (ex) {
      const pairs = ex.inner.map(({ path, message }) => [
        path,
        message.replace(`${path} `, '')
      ])
      setErrors(Object.fromEntries(pairs) as typeof FILTER_INITIAL_STATE)
    }
  }

  function clearFilter() {
    setFilter({ ...FILTER_INITIAL_STATE })
    setErrors({ ...FILTER_INITIAL_STATE })
    dispatch(developerActions.fetchAll())
  }

  function onCreateDeveloper() {
    setDeveloper({ ...INITIAL_STATE })
    setModalDeveloper(true)
  }

  function onExit() {
    setDeveloper({ ...INITIAL_STATE })
    setModalDeveloper(false)
  }

  return (
    <S.Wrapper container>
      {modalDeveloper && (
        <ModalFormDeveloper developer={developer} onExit={onExit} />
      )}
      <S.ButtonAdd onClick={onCreateDeveloper}>
        <AddButton />
      </S.ButtonAdd>
      <S.FullGrid item xs={12}>
        <S.GridHeader>
          <S.GridTitle item container xs={12}>
            <S.BoxTitle>Filtrar desenvolvedores</S.BoxTitle>
            <S.BoxLine />
          </S.GridTitle>
        </S.GridHeader>
        <S.GridFilter container>
          <S.GridInput item xs={12} sm={6} md={4}>
            <Input
              error={Boolean(errors.name)}
              helperText={errors.name}
              fullWidth
              label="Nome"
              value={filter.name}
              onKeyPress={submitOnEnter(onFilter)}
              onInput={value => handleInput(value, 'name')}
            />
          </S.GridInput>
          <S.GridInput item xs={12} sm={6} md={4}>
            <Input
              error={Boolean(errors.hobby)}
              helperText={errors.hobby}
              fullWidth
              label="Hobby"
              value={filter.hobby}
              onKeyPress={submitOnEnter(onFilter)}
              onInput={value => handleInput(value, 'hobby')}
            />
          </S.GridInput>
          <S.GridButtons item xs={12} sm={12} md={4}>
            <Button variant="gray" onClick={clearFilter} size="medium">
              <p>Limpar</p>
            </Button>
            <Button variant="blue" onClick={onFilter} size="medium">
              <p>Buscar</p>
            </Button>
          </S.GridButtons>
        </S.GridFilter>
        <S.GridTable>
          <DeveloperTable
            rows={selector.developers}
            pagination={selector.pagination}
            setNewDeveloper={onCreateDeveloper}
          />
        </S.GridTable>
      </S.FullGrid>
    </S.Wrapper>
  )
}
