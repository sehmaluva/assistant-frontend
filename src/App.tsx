
import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Models from "./pages/Models";
import Memory from "./pages/Memory";
import Tools from "./pages/Tools";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
            <Header 
              onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
              isMenuOpen={sidebarOpen}
            />
            
            <div className="flex flex-1">
              <Sidebar isOpen={sidebarOpen} />
              
              <main className="flex-1 p-6 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/models" element={<Models />} />
                  <Route path="/memory" element={<Memory />} />
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/analytics" element={<Analytics />} />
                  {/* Feature routes - placeholder for now */}
                  <Route path="/features/internship" element={<div className="text-white">Internship Assistant - Coming Soon</div>} />
                  <Route path="/features/email" element={<div className="text-white">Email Assistant - Coming Soon</div>} />
                  <Route path="/features/research" element={<div className="text-white">Research Assistant - Coming Soon</div>} />
                  <Route path="/training" element={<div className="text-white">Training Pipeline - Coming Soon</div>} />
                  <Route path="/health" element={<div className="text-white">System Health - Coming Soon</div>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
