import * as S from './styled'

export function TableNotFoundHint({
  to,
  onClick
}: {
  to?: string
  onClick?: (_value: unknown) => void
}) {
  return (
    <S.Hint>
      Dados não encontrados.
      {Boolean(to) && <S.Link to={to}>Deseja adicionar?</S.Link>}
      {Boolean(onClick) && (
        <S.Link to={'#'} onClick={onClick}>
          Deseja adicionar?
        </S.Link>
      )}
    </S.Hint>
  )
}
