import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Header from './components/Header';
import './components/TodoComponents/Todo.css';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false

  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
   super();
    this.state = {
      
    }
  }  

  render() {
    return (
      <>
      <Header />
      <TodoForm />
      <TodoList />
      </>
    );
  }
}

export default App;
