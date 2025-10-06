
import { useState } from 'react';
import { Send, Bot, User, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  tools?: string[];
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hey! I'm here to help you stay organized. You can ask me to plan your day, capture a note, add tasks, recall past context, or summarize something you're working on. What would you like to do first?",
      timestamp: new Date(),
      tools: ['tasks', 'notes', 'memory']
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'I understand your request. Let me process this using my available tools and knowledge base...',
        timestamp: new Date(),
        tools: ['analysis', 'memory_retrieval']
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Card className="bg-[hsl(var(--card))] border-[hsl(var(--border))] h-full flex flex-col">
      <CardHeader className="border-b border-[hsl(var(--border))]">
        <CardTitle className="text-white flex items-center gap-2">
          <Bot className="h-5 w-5 text-[hsl(var(--primary))]" />
          Personal Assistant
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-[hsl(var(--primary))]/30 text-[hsl(var(--primary))]' 
                      : 'bg-[hsl(var(--accent))]/25 text-[hsl(var(--accent))]'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  
                  <div className={`rounded-md p-3 ${
                    message.type === 'user'
                      ? 'bg-[hsl(var(--primary))/0.15] border border-[hsl(var(--primary))/0.35]'
                      : 'bg-[hsl(var(--muted))] border border-[hsl(var(--border))]'
                  }`}>
                    <p className="text-[hsl(var(--foreground))] text-sm leading-relaxed">{message.content}</p>
                    
                    {message.tools && (
                      <div className="flex gap-1 mt-2">
                        {message.tools.map((tool) => (
                          <span
                            key={tool}
                            className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-[hsl(var(--accent))/0.18] text-[hsl(var(--accent))] rounded border border-[hsl(var(--accent))/0.35]"
                          >
                            <Zap className="h-3 w-3" />
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <p className="text-xs text-slate-400 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))/0.25] flex items-center justify-center">
                  <Bot className="h-4 w-4 text-[hsl(var(--accent))]" />
                </div>
                <div className="bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-md p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="border-t border-[hsl(var(--border))] p-4 bg-[hsl(var(--card))]">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="bg-[hsl(var(--muted))] border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]"
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button 
              onClick={handleSend}
              className="bg-[hsl(var(--primary))] hover:brightness-110 text-[hsl(var(--primary-foreground))]"
              disabled={!input.trim() || isTyping}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;
