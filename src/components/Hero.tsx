import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-10 pt-32 tech-grid overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 w-fit mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              Status: Shipping Code
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-8"
          >
            Building <br />
            <span className="text-gradient">Performant</span> Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mb-10"
          >
            Software engineer focused on scalable architectures, low-latency APIs, and human-centric design interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-12 items-center pt-4"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white tracking-tight">120+</span>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Commits / Mo</span>
            </div>
            <div className="h-10 w-[1px] bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white tracking-tight">14</span>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Active Nodes</span>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:flex col-span-5 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full aspect-square relative"
          >
            <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative h-full w-full glass rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-5xl font-black text-white/10 select-none">CODE</div>
                <div className="text-xs font-mono text-indigo-400/50 uppercase tracking-[0.5em] mt-4">Development Environment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-600 tracking-widest uppercase">
          <span>0x7F42A / London</span>
          <div className="w-8 h-[1px] bg-slate-800"></div>
          <span>Built for High Precision</span>
        </div>
      </div>
    </section>
  );
}
