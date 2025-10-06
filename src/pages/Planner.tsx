import { useState } from 'react';
import { CalendarDays, Clock, ListChecks } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Block {
  id: string;
  label: string;
  period: string;
  intent: string;
}

const Planner = () => {
  const [blocks, setBlocks] = useState<Block[]>([
    { id: '1', label: 'Morning Focus', period: '08:00 - 10:00', intent: 'Deep work: architecture draft' },
    { id: '2', label: 'Midday Review', period: '12:30 - 13:00', intent: 'Task triage & inbox' },
    { id: '3', label: 'Afternoon Build', period: '14:00 - 16:30', intent: 'Feature implementation' }
  ]);
  const [energy, setEnergy] = useState('balanced');

  const energyAdvice: Record<string, string> = {
    high: 'Great time for deep or creative tasks. Consider tackling your hardest item.',
    balanced: 'Steady energy. Maintain momentum with medium-complexity tasks.',
    low: 'Might be a good time for admin, review, or documentation work.'
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Daily Planner</h1>
        <p className="text-slate-400">Time blocks + contextual guidance your assistant can optimize.</p>
      </div>

      <Card className="bg-[hsl(var(--card))] border-[hsl(var(--border))]">
        <CardHeader className="pb-4">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-[hsl(var(--accent))]" />
            Today's Blocks
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {blocks.map(b => (
            <div key={b.id} className="p-4 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--muted))]">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-[hsl(var(--foreground))]">{b.label}</p>
                <span className="text-xs text-[hsl(var(--muted-foreground))] flex items-center gap-1"><Clock className="h-3 w-3" /> {b.period}</span>
              </div>
              <p className="text-[hsl(var(--foreground))] text-sm">{b.intent}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-[hsl(var(--card))] border-[hsl(var(--border))]">
        <CardHeader className="pb-4">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-[hsl(var(--primary))]" />
            Energy & Guidance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-full md:w-60">
              <Select value={energy} onValueChange={setEnergy}>
                <SelectTrigger className="bg-[hsl(var(--muted))] border-[hsl(var(--border))] text-[hsl(var(--foreground))]">
                  <SelectValue placeholder="Current energy" />
                </SelectTrigger>
                <SelectContent className="bg-[hsl(var(--card))] border-[hsl(var(--border))]">
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="balanced">Balanced</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-sm text-[hsl(var(--foreground))] flex-1 leading-relaxed">{energyAdvice[energy]}</p>
          </div>
          <p className="text-[10px] uppercase tracking-wide text-[hsl(var(--muted-foreground))]">This guidance is local and not shared externally.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Planner;
