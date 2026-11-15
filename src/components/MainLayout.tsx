import { useCallback, useState } from "react";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SIdeMenu";

// import Sidebar from "./Sidebar";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileSidebar = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div className='min-h-screen flex bg-gray-50'>
      <Sidebar
        collapsed={collapsed}
        onToggle={toggleSidebar}
        mobileOpen={mobileOpen}
        onClose={closeMobileSidebar}
      />

      <div className='flex-1 min-w-0 flex flex-col'>
        {/* Header */}
        <header
          className='
          h-16 shrink-0 bg-white border-b
          flex items-center px-4 sm:px-6 gap-4
        '
        >
          <button
            onClick={() => setMobileOpen(true)}
            className='
              md:hidden p-2 rounded-lg
              hover:bg-gray-100
            '
            aria-label='Open navigation'
            aria-controls='app-sidebar'
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>

          <h2 className='font-semibold text-gray-800'>Workspace</h2>
        </header>

        {/* Page Content */}
        <main
          className='
          flex-1 min-w-0
          p-4 sm:p-6 lg:p-8
          overflow-x-hidden
        '
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
