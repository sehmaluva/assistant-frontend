import { useState } from 'react';
import { CheckCircle2, Circle, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Task {
  id: string;
  title: string;
  done: boolean;
  created: Date;
  category?: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Review project notes', done: false, created: new Date(), category: 'work' },
    { id: '2', title: 'Draft daily summary', done: true, created: new Date(), category: 'planning' },
    { id: '3', title: 'Add meeting follow-up tasks', done: false, created: new Date(), category: 'work' }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks(prev => [...prev, { id: Date.now().toString(), title: newTask.trim(), done: false, created: new Date() }]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const remaining = tasks.filter(t => !t.done).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Tasks</h1>
        <p className="text-slate-400">Lightweight personal task tracking your assistant can reference.</p>
      </div>

      <Card className="bg-[hsl(var(--card))] border-[hsl(var(--border))]">
        <CardHeader className="pb-4">
          <CardTitle className="text-white text-lg">Add Task</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="e.g. Prepare weekly planning summary"
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addTask()}
              className="bg-[hsl(var(--muted))] border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
            />
            <Button onClick={addTask} className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:brightness-110">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">Remaining: {remaining} / {tasks.length}</p>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {tasks.map(task => (
          <Card key={task.id} className="bg-[hsl(var(--card))] border-[hsl(var(--border))] hover:bg-[hsl(var(--card))/0.9] transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <button
                onClick={() => toggleTask(task.id)}
                className="w-6 h-6 flex items-center justify-center rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--primary))]"
              >
                {task.done ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
              </button>
              <div className="flex-1">
                <p className={`text-sm ${task.done ? 'line-through text-[hsl(var(--muted-foreground))]' : 'text-[hsl(var(--foreground))]'}`}>{task.title}</p>
                <p className="text-[10px] uppercase tracking-wide text-[hsl(var(--muted-foreground))] mt-1">{task.category || 'general'}</p>
              </div>
              <button onClick={() => removeTask(task.id)} className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--destructive))]">
                <Trash2 className="h-4 w-4" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
