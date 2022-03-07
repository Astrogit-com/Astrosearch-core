/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { GridPendingProps, GridPendingCellProps } from './index'

export const StyledGrid = styled('div')<GridPendingProps>`
  display: grid;
  grid-template-columns: 24px 1fr 1fr;
  grid-template-rows: 3;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
`

export const StyledGridCell = styled('div')<GridPendingCellProps>`
  grid-row-start: ${p => p.row};
  grid-row-end: ${p => p.row};
  grid-column-start: ${p => p.columnStart};
  grid-column-end: ${p => p.columnEnd ? p.columnEnd : p.columnStart};
  display: flex;
  justify-self: ${p => p.justify ? p.justify : 'start'};
  line-height: 24px;

  ${p => p.customStyle
    ? css`
      ${p.customStyle}
    `
    : ''
  };
`