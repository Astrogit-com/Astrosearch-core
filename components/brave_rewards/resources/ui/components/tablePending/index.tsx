/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledDate,
  StyledRemove,
  StyledRemoveIcon,
  StyledLink
} from './style'
import GridPending, { GridPendingCell } from '../gridPending/index'
import Table, { Cell, Row } from 'brave-ui/components/dataTables/table/index'
import Profile, { Provider } from '../profile/index'
import Tokens from '../tokens/index'
import { getLocale } from 'brave-ui/helpers'
import { TrashOIcon } from 'brave-ui/components/icons'

interface ProfileCell {
  verified: boolean
  name: string
  src: string
  provider?: Provider
}

export type PendingType = 'tip' | 'ac' | 'recurring'

export interface DetailRow {
  profile: ProfileCell
  amount: {
    tokens: string
    converted: string
  }
  url: string
  type: PendingType
  date: React.ReactNode
  onRemove: () => void
}

export interface Props {
  id?: string
  children?: React.ReactNode
  rows?: DetailRow[]
  isMobile?: boolean
}

export default class TableDonation extends React.PureComponent<Props, {}> {
  getRow(row: DetailRow): Row {
    return {
      content: [
        {
          content: (
            <StyledLink href={row.url} target={'_blank'}>
              <Profile
                title={row.profile.name}
                provider={row.profile.provider}
                verified={row.profile.verified}
                src={row.profile.src}
              />
            </StyledLink>
          )
        },
        {
          content: (
            <>{getLocale(`pendingType${row.type}`)}</>
          )
        },
        {
          content: (
            <>{row.date}</>
          )
        },
        {
          content: (
            <Tokens
              value={row.amount.tokens}
              converted={row.amount.converted}
              size={'small'}
            />
          ),
          customStyle: {
            'text-align': 'right',
            'padding': '0 7px 0 10px',
            'max-width': '130px'
          }
        },
        {
          content: (
            <StyledRemove onClick={row.onRemove}>
              <StyledRemoveIcon><TrashOIcon /></StyledRemoveIcon>
            </StyledRemove>
          )
        }
      ]
    }
  }

  /* Layout: Grid
     ---------------------------------
     |   | 1 |   2   |       3       |
     --------------------------------- 
     | 1 | Site      |   RemoveIcon  |
     | 2 |   | Pending Amount        |
     | 3 |   | Type  |      Date     |
     ---------------------------------
  */
  getMobileRow(row: DetailRow): Row {
    return {
      content: [
        {
          content: (
            <GridPending>
              <GridPendingCell row={1} columnStart={1} columnEnd={3}>
                <StyledLink href={row.url} target={'_blank'}>
                  <Profile
                    title={row.profile.name}
                    provider={row.profile.provider}
                    verified={row.profile.verified}
                    src={row.profile.src}
                  />
                </StyledLink>
              </GridPendingCell>
              <GridPendingCell row={1} columnStart={3} justify={'end'}>
                <StyledRemove onClick={row.onRemove}>
                  <StyledRemoveIcon><TrashOIcon /></StyledRemoveIcon>
                </StyledRemove>
              </GridPendingCell>
              <GridPendingCell row={2} columnStart={2} columnEnd={-1} customStyle={{ 'padding-left': '12px' }}>
                <Tokens
                  value={row.amount.tokens}
                  converted={row.amount.converted}
                  size={'small'}
                />
              </GridPendingCell>
              <GridPendingCell row={3} columnStart={2} customStyle={{ 'padding-left': '12px' }}>
                {getLocale(`pendingType${row.type}`)}
              </GridPendingCell>
              <GridPendingCell row={3} columnStart={3} justify={'end'}>
                <StyledDate>
                  {'Pending until ' + row.date}
                </StyledDate>
              </GridPendingCell>
            </GridPending>
          )
        }
      ]
    }
  }

  getRows (rows?: DetailRow[], isMobile?: boolean): Row[] | undefined {
    if (!rows) {
      return
    }

    return rows.map(isMobile ? this.getMobileRow : this.getRow)
  }

  get headers (): Cell[] {
    const { isMobile } = this.props
    const customStyle = {
      'border': 'none',
      'border-bottom': '1px solid #696FDC',
      'padding': '0',
      'color': '#696FDC'
    }
    if (isMobile) {
      customStyle['border-bottom'] = '1px solid rgba(0, 0, 0, 0.12)'
    }

    if (isMobile) {
      return [
        {
          content: '',
          customStyle
        },
      ]
    } else {
      return [
        {
          content: getLocale('site'),
          customStyle
        },
        {
          content: getLocale('type'),
          customStyle
        },
        {
          content: getLocale('pendingUntil'),
          customStyle
        },
        {
          content: getLocale('amount'),
          customStyle: {
            ...customStyle,
            'text-align': 'right'
          }
        },
        {
          content: getLocale('remove'),
          customStyle: {
            ...customStyle,
            'text-align': 'center',
            'padding': '0 10px'
          }
        }
      ]
    }
  }

  render () {
    const { id, children, rows, isMobile } = this.props
    return (
      <div id={id}>
        <Table
          children={children}
          rows={this.getRows(rows, isMobile)}
          header={this.headers}
        />
      </div>
    )
  }
}
