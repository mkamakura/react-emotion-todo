import React from 'react'
import styled from '@emotion/styled'

const Title = styled.div`
  border-bottom: 1px solid skyblue;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 20px;
`

const Header: React.SFC = () => {
  return (
    <div>
      <Title>TODO</Title>
    </div>
  )
}

export default Header
