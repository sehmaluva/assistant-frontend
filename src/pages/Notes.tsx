import { useState } from 'react';
import { FileText, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Note {
  id: string;
  content: string;
  created: Date;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([
    { id: '1', content: 'Meeting summary: Discussed roadmap, need to draft follow-up email.', created: new Date() },
    { id: '2', content: 'Idea: Let assistant auto-summarize daily task changes.', created: new Date() }
  ]);
  const [draft, setDraft] = useState('');

  const addNote = () => {
    if (!draft.trim()) return;
    setNotes(prev => [{ id: Date.now().toString(), content: draft.trim(), created: new Date() }, ...prev]);
    setDraft('');
  };

  const removeNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Notes</h1>
        <p className="text-slate-400">Quick scratchpad your assistant can recall for context.</p>
      </div>

      <Card className="bg-[hsl(var(--card))] border-[hsl(var(--border))]">
        <CardHeader className="pb-4">
          <CardTitle className="text-white text-lg">New Note</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Textarea
            placeholder="Capture a thought, idea, or context reminder..."
            value={draft}
            onChange={e => setDraft(e.target.value)}
            className="bg-[hsl(var(--muted))] border-[hsl(var(--border))] text-[hsl(var(--foreground))] min-h-[120px]"
          />
          <div className="flex justify-end">
            <Button onClick={addNote} className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:brightness-110" disabled={!draft.trim()}>
              <Plus className="h-4 w-4 mr-1" /> Save
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {notes.map(note => (
          <Card key={note.id} className="bg-[hsl(var(--card))] border-[hsl(var(--border))] relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-[hsl(var(--foreground))] flex items-center gap-2">
                <FileText className="h-4 w-4 text-[hsl(var(--accent))]" />
                Note
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-[hsl(var(--foreground))] whitespace-pre-wrap leading-relaxed">{note.content}</p>
              <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-wide text-[hsl(var(--muted-foreground))]">
                <span>{note.created.toLocaleTimeString()}</span>
                <button onClick={() => removeNote(note.id)} className="hover:text-[hsl(var(--destructive))]">
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notes;
