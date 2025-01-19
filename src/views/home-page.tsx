import React from 'react';
import TodoList from '@/components/todo-list/todo-list';
import { Calendar } from '@/components/calendar';
import { getTodos } from '@/apis/todos';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SearchInput } from '@/components/search';

export default async function HomePage() {
  const response = await getTodos();
  return (
    <div className="max-w-md mx-auto h-full min-h-[620px] flex flex-col rounded-[30px]">
      {/* Header */}
      <div className="pt-[30px] px-3 space-y-2.5">
        <div className="flex flex-col gap-4 px-3">
          <Avatar>
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20screen-2tH4JUPulGb2GbUmn5jeysMGLAVXlk.png"
              alt="Profile"
            />
            <AvatarFallback>IV</AvatarFallback>
          </Avatar>
          <h1 className="text-[16px] w-fit p-1 text-[#4A4A4A] bg-foreground">
            Good evening, Ivy
          </h1>
        </div>
        <Calendar />
        <SearchInput />
      </div>

      {/* Todos */}
      <TodoList data={response.todos} />
    </div>
  );
}
