import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function SearchInput() {
  return (
    <div className="relative mx-4">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-[15px] w-[15px] text-primary" />
      <Input
        className="text-xs outline outline-1 outline-black/40 rounded-[20px] pl-9 border-none bg-[#F5F5F5] placeholder:text-[#8B7E74]"
        placeholder="Search"
      />
    </div>
  );
}
