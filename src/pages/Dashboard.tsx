
import { useState } from 'react';
import { Brain, Database, Cpu, TrendingUp, Zap, Users } from 'lucide-react';
import StatusCard from '@/components/StatusCard';
import ChatInterface from '@/components/ChatInterface';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">AI Assistant Dashboard</h1>
        <p className="text-slate-400">Monitor and interact with your modular AI framework</p>
      </div>

      {/* Status Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatusCard
          title="Active Models"
          value="3"
          description="OpenAI GPT-4, Local Fine-tuned, Claude"
          icon={Brain}
          trend={{ value: 15, label: "this week" }}
        />
        <StatusCard
          title="Memory Usage"
          value="2.4GB"
          description="Vector embeddings & context"
          icon={Database}
          trend={{ value: 8, label: "growth" }}
        />
        <StatusCard
          title="Tools Available"
          value="12"
          description="Search, calc, file ops, etc."
          icon={Zap}
        />
        <StatusCard
          title="Conversations"
          value="147"
          description="This month"
          icon={Users}
          trend={{ value: 23, label: "vs last month" }}
        />
        <StatusCard
          title="Processing Speed"
          value="1.2s"
          description="Avg response time"
          icon={Cpu}
          trend={{ value: -12, label: "improvement" }}
        />
        <StatusCard
          title="Model Accuracy"
          value="94.2%"
          description="Evaluation metrics"
          icon={TrendingUp}
          trend={{ value: 3, label: "improvement" }}
        />
      </div>

      {/* Chat Interface */}
      <div className="h-96">
        <ChatInterface />
      </div>
    </div>
  );
};

export default Dashboard;
