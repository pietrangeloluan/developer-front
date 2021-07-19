import * as Yup from 'yup'

export const DeveloperFormSchema = Yup.object().shape({
  name: Yup.string().required().label('Nome'),
  age: Yup.number()
    .moreThan(14)
    .lessThan(100)
    .nullable(false)
    .typeError('Idade é obrigatório')
    .required()
    .label('Idade'),
  hobby: Yup.string().required().label('Hobby'),
  sex: Yup.string()
    .required()
    .oneOf(['F', 'M'], 'Valor inválido.')
    .label('Sexo'),
  birthdate: Yup.date()
    .typeError('Data de nascimento é obrigatório')
    .required()
    .label('Data')
})

export type DeveloperFormYup = Yup.InferType<typeof DeveloperFormSchema>
