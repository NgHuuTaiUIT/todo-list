'use client';

import { useEffect } from 'react';
import { ITodo } from '@/interfaces/todo';
import TodoItem from '@/components/todo-list/todo-item';
import { useTodos } from '@/context/todo-context';

type Props = {
  data: ITodo[];
};
export default function TodoList(props: Props) {
  // const [todos, setTodos] = useState<ITodo[]>(props.data);
  const { todos, setTodos } = useTodos();

  useEffect(() => {
    setTodos(props.data);
  }, [props.data]);

  return (
    <div className="p-4 flex-1 flex flex-col overflow-y-auto no-scrollbar">
      <h2 className="text-xl font-semibold mb-4 text-title">
        Today&#39;s tasks
      </h2>
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="space-y-3 p-1">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
        </div>
      </div>
    </div>
  );
}
