import * as S from './styles'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <S.Wrapper data-testid="footer">
      <S.Title>© {year} - Pietrangelo</S.Title>
    </S.Wrapper>
  )
}
