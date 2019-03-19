import React, { Component } from 'react';
import Todo from '../organisms/Todo'
import Header from '../organisms/Header'
import { injectGlobal } from 'emotion'

injectGlobal `
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #282c34;
    color: #ffffff;
  }
`

export interface TodoItemType {
  title: string,
  done: boolean
}

const initialTodoItems = [
  {
    title: 'milk',
    done: false, 
  },
  {
    title: 'carrot',
    done: true,
  },
  {
    title: 'cantaloupe',
    done: false,
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Todo items={initialTodoItems} />
      </div>
    );
  }
}

export default App;
