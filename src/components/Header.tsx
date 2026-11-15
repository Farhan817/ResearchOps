import { Search, Bell, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className='h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-30'>
      <div className='flex items-center gap-4'>
        <button
          onClick={onMenuClick}
          className='p-2 rounded-lg hover:bg-gray-100 lg:hidden'
        >
          <Menu size={20} />
        </button>

        <div className='relative hidden sm:block'>
          <Search
            size={18}
            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
          />
          <input
            placeholder='Search anything...'
            className='pl-10 pr-4 py-2 w-72 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-primary'
          />
        </div>
      </div>

      <div className='flex items-center gap-5'>
        <button className='relative text-gray-500 hover:text-gray-900'>
          <Bell size={21} />
          <span className='absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full' />
        </button>

        <div className='flex items-center gap-3 cursor-pointer'>
          <div className='w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm'>
            FM
          </div>

          <div className='hidden sm:block'>
            <p className='text-sm font-semibold text-gray-800'>Farhan</p>
            <p className='text-xs text-gray-500'>Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
