import React from 'react';

import './TodoList.css';

interface TodoListProps {
  items: { id: number; title: string }[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, deleteTodo }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
