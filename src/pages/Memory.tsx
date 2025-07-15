
import { Database, Clock, HardDrive, Trash2, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Memory = () => {
  const memoryStores = [
    {
      id: 'short-term',
      name: 'Short-term Context',
      type: 'In-Memory',
      size: '124 MB',
      items: 2847,
      retention: '2 hours',
      status: 'Active',
      usage: 68
    },
    {
      id: 'long-term',
      name: 'Long-term Knowledge',
      type: 'Vector DB',
      size: '2.1 GB',
      items: 15293,
      retention: 'Permanent',
      status: 'Active',
      usage: 45
    },
    {
      id: 'episodic',
      name: 'Episodic Memory',
      type: 'SQL Database',
      size: '890 MB',
      items: 7421,
      retention: '30 days',
      status: 'Active',
      usage: 32
    },
    {
      id: 'cache',
      name: 'Response Cache',
      type: 'Redis',
      size: '67 MB',
      items: 1203,
      retention: '1 hour',
      status: 'Active',
      usage: 23
    }
  ];

  const recentMemories = [
    {
      id: '1',
      content: 'User preferences: prefers detailed explanations, works in tech industry',
      type: 'Profile',
      timestamp: '2 minutes ago',
      importance: 'High'
    },
    {
      id: '2',
      content: 'Internship application for Google Summer of Code discussed',
      type: 'Context',
      timestamp: '15 minutes ago',
      importance: 'Medium'
    },
    {
      id: '3',
      content: 'Technical skills: Python, JavaScript, Machine Learning',
      type: 'Skills',
      timestamp: '1 hour ago',
      importance: 'High'
    },
    {
      id: '4',
      content: 'Previous conversation about resume optimization',
      type: 'History',
      timestamp: '3 hours ago',
      importance: 'Low'
    }
  ];

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'High': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Memory Management</h1>
        <p className="text-slate-400">Monitor and manage AI memory stores and context retention</p>
      </div>

      {/* Memory Stores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {memoryStores.map((store) => (
          <Card key={store.id} className="bg-slate-800/50 border-slate-700/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">{store.name}</CardTitle>
                    <p className="text-slate-400 text-sm">{store.type}</p>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  {store.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">Size</p>
                    <p className="text-white font-medium">{store.size}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Items</p>
                    <p className="text-white font-medium">{store.items.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Retention</p>
                    <p className="text-white font-medium">{store.retention}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Usage</p>
                    <p className="text-white font-medium">{store.usage}%</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Memory Usage</span>
                    <span className="text-white">{store.usage}%</span>
                  </div>
                  <Progress value={store.usage} className="h-2" />
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-slate-600 text-slate-300 hover:text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Memories */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-400" />
            Recent Memory Entries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentMemories.map((memory) => (
              <div key={memory.id} className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm mb-1">{memory.content}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <HardDrive className="h-3 w-3" />
                      {memory.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {memory.timestamp}
                    </span>
                  </div>
                </div>
                <Badge className={getImportanceColor(memory.importance)}>
                  {memory.importance}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Memory;
