import React, { useRef } from 'react';

interface NewTodoProps {
  addTodo: (t: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = textInputRef.current!.value;
    addTodo(newTodo);
    textInputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        id='new-todo'
        placeholder='Add a new Todo'
        ref={textInputRef}
      />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
