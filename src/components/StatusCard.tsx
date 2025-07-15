
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatusCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  className?: string;
}

const StatusCard = ({ title, value, description, icon: Icon, trend, className }: StatusCardProps) => {
  return (
    <Card className={cn("bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400">{title}</p>
            <p className="text-2xl font-bold text-white mt-1">{value}</p>
            {description && (
              <p className="text-sm text-slate-500 mt-1">{description}</p>
            )}
            {trend && (
              <p className={cn(
                "text-sm mt-2 flex items-center gap-1",
                trend.value > 0 ? "text-green-400" : trend.value < 0 ? "text-red-400" : "text-slate-400"
              )}>
                <span>{trend.value > 0 ? '+' : ''}{trend.value}%</span>
                <span className="text-slate-500">{trend.label}</span>
              </p>
            )}
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
            <Icon className="h-6 w-6 text-blue-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
