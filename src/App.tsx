import React from 'react';
import './App.css';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

const App: React.FC = () => {
  const todos = [
    { id: 1, title: 'Buy milk' },
    { id: 2, title: 'Get some gas' },
  ];

  const todoHandler = (todo: string) => {
    console.log(todo);
  };

  return (
    <div className='App'>
      <NewTodo addTodo={todoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
