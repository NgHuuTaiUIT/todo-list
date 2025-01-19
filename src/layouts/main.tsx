import { cn } from '@/lib';
import { ComponentProps } from 'react';

// ---------------------------------------------------------------------------------------------------

const Main = (props: ComponentProps<'main'>) => {
  return (
    <main
      {...props}
      className={cn(
        'bg-background h-screen w-screen overflow-y-scroll no-scrollbar',
        props.className
      )}
    >
      {props.children}
      <div id="portal-root" />
    </main>
  );
};

export default Main;
