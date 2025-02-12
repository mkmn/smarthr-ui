import React, { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

import { useSpacing } from '../../hooks/useSpacing'
import { Center, Gap } from '../Layout'

import { Td } from './Td'

type Padding = Gap | { vertical?: Gap; horizontal?: Gap }

type Props = PropsWithChildren<{
  /** 境界とコンテンツの間の余白 */
  padding?: Padding
}>

export const EmptyTableBody: React.FC<Props> = ({ children, padding = 4 }) => {
  return (
    <tbody>
      <tr>
        <StyledTd colSpan={1000} padding={padding}>
          <Center>{children}</Center>
        </StyledTd>
      </tr>
    </tbody>
  )
}

const StyledTd = styled(Td)<{ padding: Padding }>`
  ${({ padding }) => {
    if (padding instanceof Object) {
      return css`
        ${padding.vertical &&
        `
          padding-top: ${useSpacing(padding.vertical)};
          padding-bottom: ${useSpacing(padding.vertical)};
        `}
        ${padding.horizontal &&
        `
          padding-left: ${useSpacing(padding.horizontal)};
          padding-right: ${useSpacing(padding.horizontal)};
        `}
      `
    } else {
      return css`
        ${padding && `padding: ${useSpacing(padding)};`}
      `
    }
  }}
`
