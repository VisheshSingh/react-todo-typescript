import React from 'react';

interface TodoListProps {
  items: { id: number; title: string }[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
