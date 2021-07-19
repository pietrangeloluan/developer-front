import styled from 'styled-components'
import { Pagination } from '@material-ui/lab'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding-bottom: 0.05rem;
  display: flow-root;
  width: 100%;

  #table-scrolled {
    td,
    tr,
    th {
      cursor: text;
    }
    td:first-child,
    th:first-child {
      border-left: 0px;
    }

    td:last-child,
    th:last-child {
      border-right: 0px;
    }
  }
`

export const Teste = styled.div`
  display: flex;
  width: 100%;
`

export const TableBotton = styled.div`
  display: flex;
  place-content: center;
`

export const TablePagination = styled(Pagination)`
  padding: 2rem;
`

export const ScrollWrapper = styled.div`
  cursor: pointer;
  display: grid;
  overflow-x: auto;
  width: 100%;

  ::-webkit-scrollbar {
    height: 0.4rem;
    width: 1.2rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray.luminance(0.5)};
    border-radius: 2rem;
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  font-family: Arial, Helvetica, sans-serif;
  table-layout: auto;
  margin-bottom: auto;
`

export const Header = styled.th`
  border: 1px solid #ddd;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.1rem 1.6rem;
  white-space: nowrap;
  text-align: left;
  vertical-align: middle;
  line-height: 1.6rem;

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
`

export const Line = styled.tr`
  height: 4rem;
  :nth-child(even) {
    background-color: ${({ theme }) => theme.colors.primary.luminance(0.9)};
  }
`

export const Column = styled.td`
  border: 1px solid #ddd;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1.4rem;
  padding: 0 1.6rem;
  white-space: nowrap;
  text-align: left;
  vertical-align: middle;
  line-height: 1.6rem;

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }

  &#actions-column {
    padding: 0.6rem 0 0.6rem 0;
    div {
      margin: auto;
    }
    button {
      display: block;
      margin: auto;
    }
  }
`
