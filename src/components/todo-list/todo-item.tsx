import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ITodo } from '@/interfaces/todo';
import TrashIcon from '@/components/icons/trash';
import { cn } from '@/lib';
import { UpdateTodoDialog } from '@/components/dialog';
import { Dispatch, SetStateAction } from 'react';
import { deleteTodo, updateTodo } from '@/apis/todos';

export default function TodoItem(props: {
  todo: ITodo;
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}) {
  const onUpdate = (newData: ITodo) => {
    props.setTodos((pre) =>
      pre.map((todo) => (todo.id === newData.id ? newData : todo))
    );
  };

  const onDelete = async () => {
    const deletedTodo = await deleteTodo(props.todo.id);
    props.setTodos((pre) => pre.filter((todo) => todo.id !== deletedTodo.id));
  };

  const toggleTodo = async () => {
    const updatedTodo = await updateTodo(props.todo.id, {
      todo: props.todo.todo || '',
      completed: !props.todo.completed,
    });
    props.setTodos((pre) =>
      pre.map((todo) => (todo.id === props.todo.id ? updatedTodo : todo))
    );
  };

  return (
    <div className="flex h-[72px] items-center outline-2 outline-border outline justify-between px-2.5 rounded-[20px] bg-transparent shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
      <div className="flex h-full w-[calc(100%-50px)] items-center gap-4 p-2">
        <Checkbox
          checked={props.todo.completed}
          onCheckedChange={toggleTodo}
          className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
        />
        <div className="content h-full flex flex-col justify-between max-w-full">
          <p className="text-[13px] text-paragraph">
            {props.todo.time ?? '8:00'}
          </p>
          <p
            className={cn('text-paragraph text-[16px] truncate', {
              'line-through': props.todo.completed,
            })}
          >
            {props.todo.todo}
          </p>
        </div>
      </div>
      <div className="flex gap-4 flex-col">
        <UpdateTodoDialog data={props.todo} onUpdate={onUpdate} />
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 hover:bg-transparent justify-start"
          onClick={onDelete}
        >
          <TrashIcon className="h-4 text-[#8B7E74]" />
        </Button>
      </div>
    </div>
  );
}
