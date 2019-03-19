import React from 'react'
import { TodoItemType } from '../pages/App'
import TodoItem from '../molecules/TodoItem'
import Button from '../atoms/Button'
import styled from '@emotion/styled'

const InputArea = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`

const Input = styled.input`
  border: 1px solid cadetblue;
  margin-right: 10px;
`

interface Props {
  items: Array<TodoItemType>
}

const Todo: React.SFC<Props> = ({ items }) => {
  return (
    <div>
      <InputArea>
        <Input type='text'></Input>
        <Button type='submit'>Add</Button>
      </InputArea>
      {items.map((item, index) => <TodoItem key={index} item={item} />)}
    </div>
  )
}

export default Todo
