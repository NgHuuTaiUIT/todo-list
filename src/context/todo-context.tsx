'use client';

import React from 'react';
import { ITodo } from '@/interfaces/todo';

//-----------------------------------------------------------------------------------------------

interface TodosContextType {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodosContext = React.createContext<TodosContextType | undefined>(
  undefined
);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = React.useContext(TodosContext);
  if (!context) {
    throw new Error('useTodos must be used within an TodoProvider');
  }
  return context;
};
