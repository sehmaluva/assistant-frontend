
import { Menu, Cpu, Activity, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Header = ({ onMenuToggle, isMenuOpen }: HeaderProps) => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuToggle}
          className="text-slate-300 hover:text-white"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Cpu className="h-4 w-4 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-white">AI Assistant Framework</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Activity className="h-4 w-4 text-green-500" />
          <span>System Online</span>
        </div>
        <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
