import { Button } from '@/components/ui/button';
import {
  BellIcon,
  CalendarIcon,
  HomeIcon,
  LayoutIcon,
} from '@/components/icons';
import { AddTodoDialog } from '@/components/dialog'; //-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------

export default function BottomNavigationBar() {
  return (
    <div className="bg-[#F5F5F5] p-2 rounded-t-xl fixed bottom-0 w-full bg-transparent">
      <div className="inner-curve absolute inset-0 w-full"></div>
      <div className="flex justify-between items-center max-w-md mx-auto relative px-4">
        <Button variant="ghost" className="h-12 w-12 hover:bg-transparent">
          <HomeIcon className="!h-[28px] text-[#8B7E74]" />
        </Button>
        <Button variant="ghost" className="h-12 w-12 hover:bg-transparent">
          <CalendarIcon className="h-[28px] text-[#8B7E74]" />
        </Button>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
          <AddTodoDialog />
        </div>
        <Button variant="ghost" className="h-12 w-12 hover:bg-transparent">
          <BellIcon className="h-[28px] text-[#8B7E74]" />
        </Button>
        <Button variant="ghost" className="h-12 w-12 hover:bg-transparent">
          <LayoutIcon className="h-[28px] text-[#8B7E74]" />
        </Button>
      </div>
    </div>
  );
}
