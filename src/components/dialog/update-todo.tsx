import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { updateTodo } from '@/apis/todos';
import { useState } from 'react';
import EditIcon from '@/components/icons/edit';
import { ITodo } from '@/interfaces/todo';

export function UpdateTodo({
  data,
  onUpdate,
}: {
  data: ITodo;
  onUpdate: (todo: ITodo) => void;
}) {
  const [todo, setTodo] = useState(data.todo);
  const [open, setOpen] = useState(false);

  const handleUpdateTodo = async () => {
    const updatedTodo = await updateTodo(data.id, {
      todo,
      completed: false,
    });
    onUpdate(updatedTodo);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 hover:bg-transparent"
        >
          <EditIcon className="h-4 text-[#8B7E74]" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[80svw]">
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="todo" className="text-right">
              Todo
            </Label>
            <Input
              onChange={(e) => setTodo(e.target.value)}
              id="todo"
              value={todo}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-primary"
            onClick={handleUpdateTodo}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
