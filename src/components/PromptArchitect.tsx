/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePromptArchitect } from '../hooks/usePromptArchitect';
import { Terminal, Upload, Sparkles, Copy, Check, AlertCircle, RefreshCw } from 'lucide-react';

export default function PromptArchitect() {
  const [text, setText] = useState('');
  const [action, setAction] = useState('Initialize New Session');
  const [files, setFiles] = useState<FileList | null>(null);
  const [copied, setCopied] = useState(false);
  
  const { generatePrompt, loading, result, error, reset } = usePromptArchitect();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generatePrompt(text, action, files);
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.masterPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="architect" className="py-32 px-10 border-t border-slate-800/30 tech-grid">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold uppercase tracking-tighter text-white mb-4">
            Prompt <span className="text-gradient">Architect</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-indigo-500" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              v1.0 // n8n POWERED WORKFLOW
            </span>
          </div>
        </div>

        <div className="glass border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="bg-slate-900/50 px-8 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest">ARCHITECTURE_ENGINE.EXE</span>
          </div>

          <div className="p-8 md:p-12">
            {!result ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                      Target Action
                    </label>
                    <select 
                      value={action} 
                      onChange={(e) => setAction(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option>Initialize New Session</option>
                      <option>Debug Existing Logic</option>
                      <option>Refactor Codebase</option>
                      <option>Optimize Performance</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                      Context Files
                    </label>
                    <div className="relative">
                      <input 
                        type="file" 
                        multiple 
                        onChange={(e) => setFiles(e.target.files)}
                        className="hidden" 
                        id="file-upload"
                      />
                      <label 
                        htmlFor="file-upload"
                        className="flex items-center gap-3 w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-slate-400 cursor-pointer hover:border-slate-700 transition-colors"
                      >
                        <Upload className="w-4 h-4 text-indigo-500" />
                        <span className="truncate">
                          {files ? `${files.length} files selected` : "Upload source files..."}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                    System Instructions
                  </label>
                  <textarea 
                    placeholder="Describe the logic, constraints, or specific goals for the Master Prompt..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 h-40 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none font-mono"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="group relative w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:cursor-not-allowed text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all shadow-xl shadow-indigo-500/20 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Architecting Logic...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Generate Master Prompt
                      </>
                    )}
                  </span>
                  {loading && (
                    <motion.div 
                      className="absolute inset-0 bg-indigo-400/20"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs leading-relaxed"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <p>{error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Check className="w-4 h-4 text-emerald-500" />
                    </div>
                    <h3 className="text-white font-bold tracking-tight">Master Prompt Compiled</h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    Tokens: {result.tokens}
                  </span>
                </div>

                <div className="relative group">
                  <pre className="bg-[#050505] border border-slate-800 rounded-3xl p-6 text-slate-300 text-xs leading-relaxed font-mono whitespace-pre-wrap max-h-[400px] overflow-y-auto">
                    {result.masterPrompt}
                  </pre>
                  <button 
                    onClick={handleCopy}
                    className="absolute top-4 right-4 p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all active:scale-95"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <button 
                  onClick={reset}
                  className="w-full py-4 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-700 font-bold uppercase tracking-widest text-[10px] rounded-2xl transition-all"
                >
                  Start New Session
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}