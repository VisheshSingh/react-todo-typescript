import React, { useState } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import { Todo } from './Todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoHandler = (todo: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random(), title: todo }]);
  };

  const deleteHandler = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className='App'>
      <NewTodo addTodo={todoHandler} />
      <TodoList items={todos} deleteTodo={deleteHandler} />
    </div>
  );
};

export default App;
