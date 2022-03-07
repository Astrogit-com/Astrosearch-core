/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const root = styled.div`
  font-family: var(--brave-font-heading);
  position: absolute;
  left: 0px;
  top: 8px;
  width: 100%;
  height: calc(100% - 16px);
  max-width: 700px;
  min-height: 545px;
  background: var(--brave-palette-white);
  border-radius: 8px;
  display: block;

  TablePending td {
    padding-top: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
`

export const header = styled.div`
  margin: 21px 24px;
  display: grid;
  grid-template-columns: 1fr 30px;
  grid-template-rows: 1;
  align-items: center;

  ModalCloseButton {
    grid-area: 1/2/1/2;
    justify-self: end;
  }
`

export const title = styled.span`
  grid-area: 1/1/1/1;
  justify-self: start;
  line-height: 24px;
  font-size: 22px;
  font-weight: 500;
  font-color: rgba(33, 37, 41, 1);
`