import React from 'react'
import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'
import Container from '../Layout/Container'

const Outer = styled(Box)<{ background?: string }>`
  width:100%;
  margin-top:3%;
  border-radius: 10px;
  background: ${({ theme, background }) => background || theme.colors.gradients.bubblegum};
`

const Inner = styled(Container)`
  width:100%;
  padding-top: 10px;
  padding-bottom: 20px;
`

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
