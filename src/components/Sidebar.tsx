
import { NavLink } from 'react-router-dom';
import { 
  MessageSquare, 
  Brain, 
  Database, 
  Wrench, 
  NotebookPen,
  CalendarCheck2,
  ListTodo,
  BarChart3,
  Settings2,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const navigation = [
    { name: 'Chat', href: '/', icon: MessageSquare },
    { name: 'Tasks', href: '/tasks', icon: ListTodo },
    { name: 'Notes', href: '/notes', icon: NotebookPen },
    { name: 'Planner', href: '/planner', icon: CalendarCheck2 },
    { name: 'Memory', href: '/memory', icon: Database },
    { name: 'Models', href: '/models', icon: Brain },
    { name: 'Tools', href: '/tools', icon: Wrench },
    { name: 'Insights', href: '/analytics', icon: BarChart3 },
  ];

  const personalization = [
    { name: 'Routines (Soon)', href: '/features/routines', icon: Sparkles, disabled: true },
    { name: 'Preferences', href: '/features/preferences', icon: Settings2, disabled: true },
  ];

  return (
    <aside className={cn(
      "bg-[hsl(var(--sidebar-background))] backdrop-blur-sm border-r border-[hsl(var(--sidebar-border))] transition-all duration-300 flex flex-col",
      isOpen ? "w-64" : "w-16"
    )}>
      <nav className="flex-1 px-3 py-6">
        <div className="space-y-8">
          {/* Core Navigation */}
          <div>
            {isOpen && (
              <h3 className="px-3 text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-3">
                Daily Assistant
              </h3>
            )}
            <div className="space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive
                        ? "bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.35)]"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted)/0.35)]"
                    )
                  }
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {isOpen && <span className="ml-3">{item.name}</span>}
                </NavLink>
              ))}
            </div>
          </div>
          {/* Personalization */}
          <div>
            {isOpen && (
              <h3 className="px-3 text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-3">
                Personalization
              </h3>
            )}
            <div className="space-y-1">
              {personalization.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      item.disabled && "opacity-50 cursor-not-allowed",
                      isActive && !item.disabled
                        ? "bg-[hsl(var(--accent)/0.18)] text-[hsl(var(--accent))] border border-[hsl(var(--accent)/0.35)]"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted)/0.35)]"
                    )
                  }
                  onClick={(e) => item.disabled && e.preventDefault()}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {isOpen && (
                    <span className="ml-3 flex items-center justify-between w-full">
                      {item.name}
                      {item.disabled && (
                        <span className="text-xs text-[hsl(var(--muted-foreground))]">Soon</span>
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
