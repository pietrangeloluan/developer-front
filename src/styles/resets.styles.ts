import { css } from 'styled-components'
import 'leaflet/dist/leaflet.css'

export const resets = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button,
  a {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }

  *::before,
  *,
  *::after {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif, 'Open Sans', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    font-stretch: normal;
    font-style: normal;
    text-rendering: optimizeLegibility;
  }

  html {
    font-size: 10px;
  }

  .MuiPaper-root,
  .MuiDrawer-paper,
  .makeStyles-drawer-6,
  .makeStyles-drawerOpen-7,
  .MuiDrawer-docked,
  .MuiDrawer-paperAnchorLeft,
  .MuiDrawer-paperAnchorDockedLeft,
  .MuiPaper-elevation0,
  .MuiAutocomplete-paper,
  .MuiPickersCalendarHeader-dayLabel,
  .MuiPickersDay-day p,
  .MuiPickersCalendarHeader-transitionContainer p {
    z-index: 100 !important;
    font-size: 1.4rem !important;
  }
  /* .makeStyles-root-1 .MuiPaper-root .MuiDrawer-paper {
    z-index: 2 !important;
  } */
  footer {
    display: grid;
    z-index: 101;
  }

  .makeStyles-drawerClose-8 {
    width: 73px;
  }

  .MuiIconButton-root {
    padding: 6px;
  }

  .MuiAutocomplete-option {
    min-height: 2.6rem !important;
  }
`
