/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledGrid, StyledGridCell } from './style'


export interface GridPendingProps {
  id?: string
  children?: React.ReactNode
}

export default class GridPending extends React.PureComponent<GridPendingProps, {}> {
  render () {
    const { id, children } = this.props
    return (
      <StyledGrid id={id}>
        {children}
      </StyledGrid>
    )
  } 
}

export interface GridPendingCellProps {
  id?: string
  columnStart: number
  columnEnd?: number
  row: number
  justify?: string
  customStyle?: {[key: string]: string}
  children?: React.ReactNode
}

export class GridPendingCell extends React.PureComponent<GridPendingCellProps, {}> {
  render () {
    const { id, columnStart, columnEnd, row, justify, customStyle, children } = this.props
    return (
      <StyledGridCell
        id={id}
        columnStart={columnStart}
        columnEnd={columnEnd}
        row={row}
        justify={justify}
        customStyle={customStyle}
      >
        {children}
      </StyledGridCell>
    )
  }
}