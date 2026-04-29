import { motion } from "motion/react";
import { Link, Code2, Zap } from "lucide-react";

const PROJECTS = [
  {
    title: "Aura",
    category: "AI / Local-First Systems",
    description: "A self-hosted AI shell and research console built for solo builders. Features a hierarchical multi-agent system (ResearchAgent, CodeAgent, SynthesisAgent) with LangGraph orchestration, persistent SQLite memory, a full 8-tool filesystem suite, and 7-provider fallback routing — all running locally in Electron with zero cloud dependency.",
    tags: ["Electron", "LangGraph", "SQLite", "React 19", "TypeScript"],
    link: null,
    flagship: true,
  },
  {
    title: "Autonomous Enterprise Analyst",
    category: "AI / Multi-Agent Systems",
    description: "Engineered a self-correcting multi-agent workflow using n8n. Implemented a ReAct loop with adversarial Critic and Analyst nodes to synthesize verified intelligence while strictly mitigating hallucinations.",
    tags: ["n8n", "Gemini Pro", "ReAct Protocol"],
    link: null,
    flagship: false,
  },
  {
    title: "Agent Roulette",
    category: "AI / Prompt Engineering",
    description: "A live combinatorial prompt generator that assembles highly specialized AI system prompts on demand. Combines randomized role, toolchain, environment, and constraint variables to produce unique expert personas.",
    tags: ["React", "TypeScript", "Prompt Engineering"],
    link: "#agent-roulette",
    flagship: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-10 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-5xl font-bold uppercase tracking-tighter text-white mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-indigo-500" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">Selection // 2025–26</span>
            </div>
          </div>
          <div className="hidden md:block font-mono text-[10px] text-slate-500 max-w-[200px] text-right uppercase font-bold tracking-widest leading-loose">
            Local-first AI systems and autonomous agent architecture
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-[2.5rem] p-8 flex flex-col justify-between group transition-all hover:shadow-2xl ${
                project.flagship
                  ? "bg-indigo-600 border-none shadow-2xl shadow-indigo-500/20 md:col-span-2 lg:col-span-2"
                  : "bg-[#0a0a0a] border border-slate-800/50 hover:border-indigo-500/30 hover:shadow-indigo-500/5"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-3 rounded-2xl ${project.flagship ? "bg-white/10" : "bg-indigo-500/10"}`}>
                    <Zap className={`w-6 h-6 ${project.flagship ? "text-white" : "text-indigo-500"}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.flagship && (
                      <span className="text-[9px] font-black text-white/60 uppercase tracking-widest bg-white/10 px-2 py-1 rounded-full">Flagship</span>
                    )}
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${project.flagship ? "text-indigo-200/50" : "text-slate-600"}`}>0xQAID{index}</span>
                  </div>
                </div>

                <h3 className={`text-2xl font-bold mb-3 tracking-tight transition-colors ${project.flagship ? "text-white" : "text-white group-hover:text-indigo-400"}`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-8 ${project.flagship ? "text-indigo-100/70" : "text-slate-500"}`}>
                 