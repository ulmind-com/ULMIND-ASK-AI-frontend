'use client';

import { Activity, MessageSquare, Database, Zap, ArrowUpRight } from 'lucide-react';

export default function AdminOverview() {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <header>
        <h1 className="text-4xl font-bold text-white tracking-tight">Dashboard Overview</h1>
        <p className="text-zinc-400 mt-2 text-lg font-light">Monitor AI performance, usage, and system health across ULMIND.</p>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl hover:-translate-y-1 group">
          <div className="flex items-center justify-between mb-4">
            <div className="text-zinc-400 font-medium text-sm tracking-wide uppercase">Total Chats</div>
            <MessageSquare size={20} className="text-rose-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-5xl font-bold text-white tracking-tighter">1,284</div>
          <div className="text-sm text-emerald-400 mt-3 flex items-center gap-1 font-medium">
            <ArrowUpRight size={14} /> 12.5% from last week
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl hover:-translate-y-1 group">
          <div className="flex items-center justify-between mb-4">
            <div className="text-zinc-400 font-medium text-sm tracking-wide uppercase">Vector DB Capacity</div>
            <Database size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-5xl font-bold text-white tracking-tighter">45%</div>
          <div className="text-sm text-zinc-500 mt-3 font-medium">
            Pinecone (15,200 vectors)
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl hover:-translate-y-1 group">
          <div className="flex items-center justify-between mb-4">
            <div className="text-zinc-400 font-medium text-sm tracking-wide uppercase">Avg Response</div>
            <Zap size={20} className="text-yellow-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-5xl font-bold text-white tracking-tighter">1.2s</div>
          <div className="text-sm text-emerald-400 mt-3 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Streaming enabled
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl hover:-translate-y-1 group">
          <div className="flex items-center justify-between mb-4">
            <div className="text-zinc-400 font-medium text-sm tracking-wide uppercase">Escalation Rate</div>
            <Activity size={20} className="text-purple-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-5xl font-bold text-white tracking-tighter">4.2%</div>
          <div className="text-sm text-emerald-400 mt-3 font-medium flex items-center gap-1">
            <ArrowUpRight size={14} className="rotate-90" /> 2.1% from last week
          </div>
        </div>
      </div>

      {/* Recent Escalations Table */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Live Escalations</h2>
          <button className="text-sm text-rose-400 hover:text-rose-300 font-medium transition-colors">View All →</button>
        </div>
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-xl shadow-2xl">
          <table className="w-full text-left text-sm text-zinc-400">
            <thead className="bg-white/5 text-zinc-300 border-b border-white/10">
              <tr>
                <th className="px-8 py-5 font-semibold tracking-wide">Session ID</th>
                <th className="px-8 py-5 font-semibold tracking-wide">Trigger Topic</th>
                <th className="px-8 py-5 font-semibold tracking-wide">Time</th>
                <th className="px-8 py-5 font-semibold tracking-wide">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                <td className="px-8 py-5 font-mono text-xs group-hover:text-white transition-colors">req_9x2bJd8P</td>
                <td className="px-8 py-5 group-hover:text-white transition-colors">Enterprise API Pricing</td>
                <td className="px-8 py-5 group-hover:text-white transition-colors">2 mins ago</td>
                <td className="px-8 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                    Pending Human
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                <td className="px-8 py-5 font-mono text-xs group-hover:text-white transition-colors">req_2mA9kL4</td>
                <td className="px-8 py-5 group-hover:text-white transition-colors">Technical Architecture Review</td>
                <td className="px-8 py-5 group-hover:text-white transition-colors">15 mins ago</td>
                <td className="px-8 py-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Agent Assigned
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
