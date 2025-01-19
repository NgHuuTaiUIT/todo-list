import React from 'react';
import { ThemeProvider } from 'next-themes';
import { TodosProvider } from '@/context/todo-context';

//-------------------------------------------------------------------------------------------

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableColorScheme>
      <TodosProvider>{children}</TodosProvider>
    </ThemeProvider>
  );
}
