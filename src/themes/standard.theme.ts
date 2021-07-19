import chroma from 'chroma-js'

export const standard = {
  colors: {
    background: chroma('#F4F8F7'),
    darkGray: chroma('#464A53'),
    error: chroma('#de4f4f'),
    gray: chroma('#707070'),
    lightGray: chroma('#abafb3'),
    primary: chroma('#3684ab'),
    success: chroma('#3FAB36'),
    white: chroma('#ffffff')
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
}
