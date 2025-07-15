
import { useState } from 'react';
import { Wrench, Globe, Calculator, FileText, Search, Mail, Calendar, Code, Zap, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: any;
  category: 'core' | 'external' | 'custom';
  status: 'active' | 'inactive' | 'error';
  usage: number;
  lastUsed: string;
}

const Tools = () => {
  const [tools] = useState<Tool[]>([
    {
      id: '1',
      name: 'Web Search',
      description: 'Search the internet for real-time information',
      icon: Globe,
      category: 'external',
      status: 'active',
      usage: 234,
      lastUsed: '5 minutes ago'
    },
    {
      id: '2',
      name: 'Calculator',
      description: 'Perform mathematical calculations',
      icon: Calculator,
      category: 'core',
      status: 'active',
      usage: 89,
      lastUsed: '2 hours ago'
    },
    {
      id: '3',
      name: 'File Operations',
      description: 'Read, write, and manipulate files',
      icon: FileText,
      category: 'core',
      status: 'active',
      usage: 156,
      lastUsed: '1 hour ago'
    },
    {
      id: '4',
      name: 'Code Execution',
      description: 'Execute Python code safely',
      icon: Code,
      category: 'core',
      status: 'active',
      usage: 67,
      lastUsed: '3 hours ago'
    },
    {
      id: '5',
      name: 'Email Integration',
      description: 'Send and manage emails',
      icon: Mail,
      category: 'external',
      status: 'inactive',
      usage: 0,
      lastUsed: 'Never'
    },
    {
      id: '6',
      name: 'Calendar Access',
      description: 'Manage calendar events and schedules',
      icon: Calendar,
      category: 'external',
      status: 'error',
      usage: 12,
      lastUsed: '1 day ago'
    },
    {
      id: '7',
      name: 'Internship Matcher',
      description: 'Custom tool for matching internship opportunities',
      icon: Search,
      category: 'custom',
      status: 'active',
      usage: 45,
      lastUsed: '30 minutes ago'
    },
    {
      id: '8',
      name: 'Resume Optimizer',
      description: 'Analyze and improve resume content',
      icon: Zap,
      category: 'custom',
      status: 'active',
      usage: 78,
      lastUsed: '1 hour ago'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactive': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      case 'error': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'core': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'external': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'custom': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const filterTools = (category: string) => {
    if (category === 'all') return tools;
    return tools.filter(tool => tool.category === category);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Tools & Integrations</h1>
        <p className="text-slate-400">Manage available tools and external integrations</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-slate-800/50 border-slate-700/50">
          <TabsTrigger value="all" className="data-[state=active]:bg-blue-600/20 data-[state=active]:text-blue-400">
            All Tools ({tools.length})
          </TabsTrigger>
          <TabsTrigger value="core" className="data-[state=active]:bg-blue-600/20 data-[state=active]:text-blue-400">
            Core ({tools.filter(t => t.category === 'core').length})
          </TabsTrigger>
          <TabsTrigger value="external" className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400">
            External ({tools.filter(t => t.category === 'external').length})
          </TabsTrigger>
          <TabsTrigger value="custom" className="data-[state=active]:bg-orange-600/20 data-[state=active]:text-orange-400">
            Custom ({tools.filter(t => t.category === 'custom').length})
          </TabsTrigger>
        </TabsList>

        {['all', 'core', 'external', 'custom'].map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterTools(category).map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <Card key={tool.id} className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-white text-lg">{tool.name}</CardTitle>
                          </div>
                        </div>
                        <Switch checked={tool.status === 'active'} />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-slate-400 text-sm">{tool.description}</p>
                        
                        <div className="flex gap-2">
                          <Badge className={getCategoryColor(tool.category)}>
                            {tool.category}
                          </Badge>
                          <Badge className={getStatusColor(tool.status)}>
                            {tool.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-slate-400">Usage Count</p>
                            <p className="text-white font-medium">{tool.usage}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Last Used</p>
                            <p className="text-white font-medium">{tool.lastUsed}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 border-slate-600 text-slate-300 hover:text-white">
                            <Settings className="h-4 w-4 mr-2" />
                            Configure
                          </Button>
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
                            <Zap className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Tools;
