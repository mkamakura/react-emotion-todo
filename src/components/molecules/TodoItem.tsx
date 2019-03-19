import React from 'react'
import styled from '@emotion/styled'
import Button from '../atoms/Button'
import { TodoItemType } from '../pages/App'

const Item = styled.div`
  border-bottom: 1px solid dodgerblue;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const ItemTitle = styled.span`
  text-decoration: ${(props: { done: boolean }) => props.done ? 'line-through' : 'none'};
`

export interface Props {
  item: TodoItemType,
}

const TodoItem: React.SFC<Props> = ({ item: { title, done } }) => {
  return (
    <Item>
      <ItemTitle done={done}>{title}</ItemTitle>
      <Button>Done</Button>
    </Item>
  )
}

export default TodoItem
