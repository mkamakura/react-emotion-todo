import React from 'react'
import styled from '@emotion/styled'

const NormalButton = styled.button`
  background-color: #f06;
  border-radius: 4px;
  color: black;
  &:hover {
    color: white;
  }
  padding-left: 10px;
  padding-right: 10px;
`

interface Props {
  children: React.ReactNode,
  type?: 'button' | 'submit'
}

const Button: React.SFC<Props> = ({ children, type = 'button' }) => {
  return (
    <NormalButton type={type}>{children}</NormalButton>
  )
}

export default Button
