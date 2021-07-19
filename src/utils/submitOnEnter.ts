import { KeyboardEvent } from 'react'

export function submitOnEnter(fn: Function, args: any[] = []) {
  return function (e: KeyboardEvent) {
    if (e.key === 'Enter') fn.apply(args)
  }
}
