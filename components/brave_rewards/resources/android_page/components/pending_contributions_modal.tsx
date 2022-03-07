/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import TablePending, { DetailRow } from '../../ui/components/tablePending/index'
import { LocaleContext } from '../../shared/lib/locale_context'
import { Modal, ModalCloseButton } from '../../shared/components/modal'

import * as style from './pending_contributions_modal.style'

interface Props {
  rows: DetailRow[]
  onClose: () => void
  isMobile?: boolean
}

export function PendingContributionsModal(props: Props) {
  const { getString } = React.useContext(LocaleContext)
  return (
    <Modal>
      <style.root>
        <style.header>
          <style.title>
            {getString('pendingContributions')}
          </style.title>
          <ModalCloseButton onClick={props.onClose} />
        </style.header>
        <TablePending
          id={'pendingContributionTable'}
          rows={props.rows}
          children={getString('pendingContributionEmpty')}
          isMobile={props.isMobile}
        />
      </style.root>
    </Modal>
  )
}
