import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Settings, ChevronLeft, X } from "lucide-react";

import { navigation } from "../utils/routes";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  collapsed,
  onToggle,
  mobileOpen,
  onClose,
}: SidebarProps) {
  // Close drawer on Escape and prevent background scrolling
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, onClose]);

  // Close mobile drawer when viewport reaches desktop size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [onClose]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-3 rounded-lg
     transition-colors
     ${
       isActive
         ? "bg-primary text-white"
         : "text-gray-400 hover:bg-gray-800 hover:text-white"
     }`;

  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={onClose}
        aria-hidden='true'
        className={`
          fixed inset-0 z-40 bg-black/50
          transition-opacity duration-300 md:hidden
          ${
            mobileOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      <aside
        id='app-sidebar'
        aria-label='Main navigation'
        className={`
          fixed md:sticky top-0 left-0 z-50
          h-screen shrink-0
          bg-gray-900 text-white
          flex flex-col
          transition-all duration-300 ease-in-out

          w-64
          ${collapsed ? "md:w-20" : "md:w-64"}

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className='h-16 px-5 flex items-center justify-between border-b border-gray-800 shrink-0'>
          <h1
            className={`
              text-xl font-bold whitespace-nowrap
              ${collapsed ? "md:hidden" : ""}
            `}
          >
            Workspace
          </h1>

          <button
            onClick={onToggle}
            className='hidden md:flex p-2 hover:bg-gray-800 rounded-lg'
            aria-label='Collapse sidebar'
            aria-expanded={!collapsed}
          >
            <ChevronLeft
              size={20}
              className={`transition-transform ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>

          <button
            onClick={onClose}
            className='md:hidden p-2 hover:bg-gray-800 rounded-lg'
            aria-label='Close navigation'
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className='flex-1 p-3 space-y-1 mt-4 overflow-y-auto'>
          {navigation.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              title={collapsed ? name : undefined}
              onClick={onClose}
              className={linkClass}
            >
              <Icon size={20} className='shrink-0' />

              <span
                className={`
                  text-sm font-medium whitespace-nowrap
                  ${collapsed ? "md:hidden" : ""}
                `}
              >
                {name}
              </span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
