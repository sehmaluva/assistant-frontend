
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
    <Card className={cn("bg-[hsl(var(--card))] border-[hsl(var(--border))] hover:bg-[hsl(var(--card))/0.85] transition-colors", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[hsl(var(--muted-foreground))]">{title}</p>
            <p className="text-2xl font-bold text-[hsl(var(--foreground))] mt-1">{value}</p>
            {description && (
              <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">{description}</p>
            )}
            {trend && (
              <p className={cn(
                "text-sm mt-2 flex items-center gap-1",
                trend.value > 0 ? "text-green-400" : trend.value < 0 ? "text-red-400" : "text-[hsl(var(--muted-foreground))]"
              )}>
                <span>{trend.value > 0 ? '+' : ''}{trend.value}%</span>
                <span className="text-[hsl(var(--muted-foreground))]">{trend.label}</span>
              </p>
            )}
          </div>
          <div className="w-12 h-12 rounded-md flex items-center justify-center bg-[hsl(var(--muted))] border border-[hsl(var(--border))]">
            <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
