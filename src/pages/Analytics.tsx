
import { BarChart3, TrendingUp, Clock, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatusCard from '@/components/StatusCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const usageData = [
    { name: 'Mon', conversations: 24, tools: 12, models: 8 },
    { name: 'Tue', conversations: 32, tools: 18, models: 11 },
    { name: 'Wed', conversations: 28, tools: 15, models: 9 },
    { name: 'Thu', conversations: 45, tools: 22, models: 14 },
    { name: 'Fri', conversations: 38, tools: 19, models: 12 },
    { name: 'Sat', conversations: 15, tools: 8, models: 5 },
    { name: 'Sun', conversations: 22, tools: 11, models: 7 },
  ];

  const modelUsage = [
    { name: 'GPT-4 Turbo', value: 45, color: '#3B82F6' },
    { name: 'Claude 3.5', value: 30, color: '#8B5CF6' },
    { name: 'Local Model', value: 15, color: '#10B981' },
    { name: 'Fine-tuned', value: 10, color: '#F59E0B' },
  ];

  const responseTimeData = [
    { time: '00:00', avgTime: 1.2 },
    { time: '04:00', avgTime: 0.9 },
    { time: '08:00', avgTime: 1.8 },
    { time: '12:00', avgTime: 2.1 },
    { time: '16:00', avgTime: 1.6 },
    { time: '20:00', avgTime: 1.3 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
        <p className="text-slate-400">Performance metrics and usage analytics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard
          title="Total Conversations"
          value="1,247"
          icon={BarChart3}
          trend={{ value: 12, label: "this week" }}
        />
        <StatusCard
          title="Avg Response Time"
          value="1.4s"
          icon={Clock}
          trend={{ value: -8, label: "improvement" }}
        />
        <StatusCard
          title="Tool Activations"
          value="3,456"
          icon={Zap}
          trend={{ value: 23, label: "this month" }}
        />
        <StatusCard
          title="Success Rate"
          value="96.8%"
          icon={TrendingUp}
          trend={{ value: 2, label: "this week" }}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Usage Over Time */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">Weekly Usage Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }} 
                />
                <Bar dataKey="conversations" fill="#3B82F6" />
                <Bar dataKey="tools" fill="#8B5CF6" />
                <Bar dataKey="models" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Model Usage Distribution */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">Model Usage Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={modelUsage}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {modelUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Response Time Chart */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">Response Time Throughout Day</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F3F4F6'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="avgTime" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
