import * as S from './styled'

export type Props = {
  className?: string
  fill?: string
  height?: number
  icon: string
  width?: number
}

export function Icon({
  icon,
  className = '',
  fill = '#000',
  height = 48,
  width = 48
}: Props) {
  return (
    <S.Icon
      beforeInjection={svg => {
        svg.setAttribute('style', `height: ${height}px; width: ${width}px`)
        if (fill !== '#000') svg.setAttribute('fill', fill)
      }}
      className={className}
      fallback={() => null}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      src={`/icons/${icon}.svg`}
      width={width}
    />
  )
}
