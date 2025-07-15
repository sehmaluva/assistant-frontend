
import { NavLink } from 'react-router-dom';
import { 
  MessageSquare, 
  Brain, 
  Database, 
  Wrench, 
  GraduationCap, 
  Mail, 
  Search,
  BarChart3,
  Layers,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const navigation = [
    { name: 'Chat Interface', href: '/', icon: MessageSquare },
    { name: 'Model Management', href: '/models', icon: Brain },
    { name: 'Memory Stores', href: '/memory', icon: Database },
    { name: 'Tools & Plugins', href: '/tools', icon: Wrench },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  ];

  const features = [
    { name: 'Internship Assistant', href: '/features/internship', icon: GraduationCap },
    { name: 'Email Assistant', href: '/features/email', icon: Mail, disabled: true },
    { name: 'Research Assistant', href: '/features/research', icon: Search, disabled: true },
  ];

  const infrastructure = [
    { name: 'Training Pipeline', href: '/training', icon: Layers },
    { name: 'System Health', href: '/health', icon: Zap },
  ];

  return (
    <aside className={cn(
      "bg-slate-900/90 backdrop-blur-sm border-r border-slate-800/50 transition-all duration-300 flex flex-col",
      isOpen ? "w-64" : "w-16"
    )}>
      <nav className="flex-1 px-3 py-6">
        <div className="space-y-8">
          {/* Core Navigation */}
          <div>
            {isOpen && (
              <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Core System
              </h3>
            )}
            <div className="space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    )
                  }
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {isOpen && <span className="ml-3">{item.name}</span>}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            {isOpen && (
              <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Features
              </h3>
            )}
            <div className="space-y-1">
              {features.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      item.disabled && "opacity-50 cursor-not-allowed",
                      isActive && !item.disabled
                        ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    )
                  }
                  onClick={(e) => item.disabled && e.preventDefault()}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {isOpen && (
                    <span className="ml-3 flex items-center justify-between w-full">
                      {item.name}
                      {item.disabled && (
                        <span className="text-xs text-slate-500">Soon</span>
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Infrastructure */}
          <div>
            {isOpen && (
              <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Infrastructure
              </h3>
            )}
            <div className="space-y-1">
              {infrastructure.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    )
                  }
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {isOpen && <span className="ml-3">{item.name}</span>}
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
