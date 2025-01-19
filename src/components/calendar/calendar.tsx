import { Button } from '@/components/ui/button';
import { cn } from '@/lib';
import React from 'react';

export function Calendar() {
  const days = [
    { day: 'Thur', date: 5 },
    { day: 'Fri', date: 6 },
    { day: 'Sat', date: 7 },
    { day: 'Sun', date: 8, current: true },
    { day: 'Mon', date: 9 },
    { day: 'Tues', date: 10 },
    { day: 'Wed', date: 11 },
  ];
  
  return (
    <div className="flex justify-between px-3">
      {days.map(({ day, date, current }) => (
        <div
          key={day}
          className="flex flex-col justify-center items-center h-[70px]"
        >
          <Button
            variant={current ? 'default' : 'ghost'}
            className={cn(
              ' p-0 rounded-full',
              current
                ? 'bg-primary hover:bg-primary text-white w-10 min-h-10 mb-3'
                : 'text-[13px] text-white hover:text-[#8B7E74] bg-[#4D4117] size-[25px] mb-4'
            )}
          >
            {date}
          </Button>
          <span
            className={cn(
              'text-sm text-[#8B7E74]',
              current ? 'text-[15px]' : 'text-xs'
            )}
          >
            {day}
          </span>
        </div>
      ))}
    </div>
  );
}
