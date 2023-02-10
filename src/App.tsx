import React from 'react';
import './App.css';
import TodoList from './TodoList';

const App: React.FC = () => {
  const todos = [{id: 1, title: 'Buy milk'}, {id: 2, title: 'Get some gas'}]
  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
