import BN from 'bn.js'
import React from 'react'

import { InfoTitle, InfoValue } from './Modal'
import { Tooltip, TooltipDefault } from './Tooltip'
import { TokenValue } from './typography'

export interface TransactionInfoProps {
  title: string
  value?: BN
  tooltipText?: React.ReactNode
  tooltipTitle?: string
  tooltipLinkText?: React.ReactNode
  tooltipLinkURL?: string
}

export const TransactionInfo = ({
  title,
  value,
  tooltipText,
  tooltipTitle,
  tooltipLinkText,
  tooltipLinkURL,
}: TransactionInfoProps) => {
  return (
    <>
      <InfoTitle>{title}</InfoTitle>
      <InfoValue>
        <TokenValue value={value} />
      </InfoValue>
      {tooltipText ? (
        <Tooltip
          tooltipTitle={tooltipTitle}
          tooltipLinkText={tooltipLinkText}
          tooltipText={tooltipText}
          tooltipLinkURL={tooltipLinkURL}
        >
          <TooltipDefault />
        </Tooltip>
      ) : (
        <span></span>
      )}
    </>
  )
}
