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
import { Plus } from 'lucide-react';
import { createTodo } from '@/apis/todos';
import { useState } from 'react';
import { useTodos } from '@/context/todo-context';

export function AddTodo() {
  const [todo, setTodo] = useState('');
  const [open, setOpen] = useState(false);
  const { todos, setTodos } = useTodos();
  const handleAddTodo = async () => {
    const response = await createTodo({
      todo,
      completed: false,
      userId: 1,
    });
    setTodos([response, ...todos]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-[#E8B972] hover:bg-[#E8B972] shadow-lg"
        >
          <Plus className="h-6 w-6 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[80svw]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
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
          <Button type="submit" className="bg-primary" onClick={handleAddTodo}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
