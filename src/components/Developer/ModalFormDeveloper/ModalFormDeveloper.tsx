import { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { InputDate } from 'components/InputDate'
import { InputSelect } from 'components/InputSelect'
import { Modal } from 'components/Modal'

import { INITIAL_STATE } from 'constants/developer.constants'
import { YupValidator } from 'services/yupValidator.service'
import { DeveloperFormSchema } from 'store/Developer/Developer.validator'

// import { UserStorageService } from 'services'
import { DeveloperType } from 'types/Developer.types'
// import { changePassword, cleanUser } from 'store/User/User.actions'
// import { all } from 'store/User/User.selector'
import {
  createDeveloper,
  editDeveloper
} from 'store/Developer/Developer.actions'

import * as S from './styled'

const sexType = [
  { title: 'Feminino', value: 'F' },
  { title: 'Masculino', value: 'M' }
]

export type ModalProps = {
  developer?: DeveloperType
  onExit?: () => void
}

export function ModalFormDeveloper({
  developer = INITIAL_STATE,
  onExit
}: ModalProps) {
  const [form, setForm] = useState({ ...INITIAL_STATE })
  const [errors, setErrors] = useState({ ...INITIAL_STATE })
  const dispatch = useDispatch()

  useEffect(() => setForm(developer), [developer])

  function handleInput(value: string | Date, name: string) {
    setErrors({ ...errors, [name]: '' })
    setForm({ ...form, [name]: value })
  }

  function handleSelected(name: string) {
    return function handle(value) {
      setErrors({ ...errors, [name]: '' })
      setForm({ ...form, [name]: value.value })
    }
  }

  async function submit() {
    setErrors({ ...INITIAL_STATE })

    const [isValid, validationError] = await new YupValidator(
      DeveloperFormSchema
    ).validate(form)

    if (!isValid) {
      return setErrors(validationError as typeof INITIAL_STATE)
    }

    if (developer.id) return dispatch(editDeveloper(form))
    dispatch(createDeveloper(form))
  }

  const button = (
    <Button onClick={submit} size="medium">
      {developer.id ? <p>Alterar</p> : <p>Salvar</p>}
    </Button>
  )

  const content = (
    <S.Wrapper>
      <S.DivTitle>
        <S.GridHeader>
          <S.GridTitle item container xs={12}>
            <S.BoxTitle>Usuário</S.BoxTitle>
          </S.GridTitle>
        </S.GridHeader>
        <S.Line />
      </S.DivTitle>

      <S.GridFields container spacing={2}>
        <S.GridInput item sm={12}>
          <Input
            error={Boolean(errors.name)}
            fullWidth
            helperText={errors.name}
            label="Nome"
            onInput={value => handleInput(value, 'name')}
            value={form.name}
          />
        </S.GridInput>
        <S.GridInput item sm={12}>
          <Input
            error={Boolean(errors.age)}
            fullWidth
            helperText={errors.age}
            label="Idade"
            type="number"
            onInput={value => handleInput(value, 'age')}
            value={form.age}
          />
        </S.GridInput>
        <S.GridInput item sm={12}>
          <InputSelect
            error={Boolean(errors.sex)}
            fullWidth
            helperText={errors.sex}
            label="Sexo"
            onSelected={handleSelected('sex')}
            optionLabel="title"
            optionValue="value"
            options={sexType}
            value={form.sex}
          />
        </S.GridInput>
        <S.GridInput item sm={12}>
          <Input
            error={Boolean(errors.hobby)}
            fullWidth
            helperText={errors.hobby}
            label="Hobby"
            onInput={value => handleInput(value, 'hobby')}
            value={form.hobby}
          />
        </S.GridInput>
        <S.GridInput item sm={12}>
          <InputDate
            error={Boolean(errors.birthdate)}
            fullWidth
            helperText={errors.birthdate}
            label="Data de Nascimento"
            onInput={value => handleInput(value, 'birthdate')}
            value={form.birthdate}
          />
        </S.GridInput>
      </S.GridFields>
    </S.Wrapper>
  )

  return (
    <Modal
      button={button}
      content={content}
      isActionsEnabled={true}
      width={60}
      onExit={onExit}
    />
  )
}
