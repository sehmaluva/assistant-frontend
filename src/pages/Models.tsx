
import { useState } from 'react';
import { Brain, Settings, Play, Pause, BarChart3, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

interface Model {
  id: string;
  name: string;
  type: 'commercial' | 'local' | 'fine-tuned';
  status: 'active' | 'inactive' | 'training';
  performance: number;
  lastUsed: string;
  description: string;
}

const Models = () => {
  const [models] = useState<Model[]>([
    {
      id: '1',
      name: 'GPT-4 Turbo',
      type: 'commercial',
      status: 'active',
      performance: 94.2,
      lastUsed: '2 minutes ago',
      description: 'OpenAI\'s flagship model for complex reasoning'
    },
    {
      id: '2',
      name: 'Claude 3.5 Sonnet',
      type: 'commercial',
      status: 'active',
      performance: 91.8,
      lastUsed: '1 hour ago',
      description: 'Anthropic\'s balanced model for general tasks'
    },
    {
      id: '3',
      name: 'Local Llama 3.1',
      type: 'local',
      status: 'inactive',
      performance: 87.3,
      lastUsed: '3 days ago',
      description: 'Self-hosted model for privacy-sensitive tasks'
    },
    {
      id: '4',
      name: 'Internship-Tuned GPT',
      type: 'fine-tuned',
      status: 'training',
      performance: 96.1,
      lastUsed: 'Training...',
      description: 'Custom model fine-tuned for internship management'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactive': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      case 'training': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'commercial': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'local': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'fine-tuned': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Model Management</h1>
          <p className="text-slate-400">Configure and monitor your AI models</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh Status
        </Button>
      </div>

      <div className="grid gap-6">
        {models.map((model) => (
          <Card key={model.id} className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">{model.name}</CardTitle>
                    <p className="text-slate-400 text-sm">{model.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Badge className={getTypeColor(model.type)}>
                    {model.type}
                  </Badge>
                  <Badge className={getStatusColor(model.status)}>
                    {model.status}
                  </Badge>
                  <Switch checked={model.status === 'active'} />
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Performance</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${model.performance}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{model.performance}%</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-slate-400 mb-1">Last Used</p>
                  <p className="text-white text-sm">{model.lastUsed}</p>
                </div>
                
                <div className="md:col-span-2 flex gap-2 justify-end">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                  {model.status === 'active' ? (
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
                      <Pause className="h-4 w-4 mr-2" />
                      Pause
                    </Button>
                  ) : (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      <Play className="h-4 w-4 mr-2" />
                      Activate
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Models;
