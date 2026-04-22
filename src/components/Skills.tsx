import { motion } from "motion/react";
import { BrainCircuit, Workflow, Code2, Terminal } from "lucide-react";

const SKILLS = [
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Agentic Workflows",
    items: ["n8n Automation", "Multi-Agent Systems", "API Integrations", "Vertex AI"],
    featured: true
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI Engineering",
    items: ["Gemini Pro", "Prompt Architecture", "ReAct Protocol", "Structured JSON"],
    featured: false
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Modern Web",
    items: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    featured: false
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Systems & Security",
    items: ["Python Auditing", "Git Control", "OpenSSL", "Heuristic Logic"],
    featured: false
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl font-bold uppercase tracking-tighter text-white mb-4">Technical <span className="text-gradient">Environment</span></h2>
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-indigo-500" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">Process // STACK</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[2rem] p-10 flex flex-col justify-between h-[340px] relative overflow-hidden transition-transform hover:scale-[1.02] ${
                skill.featured 
                ? "bg-indigo-600 shadow-2xl shadow-indigo-500/10 border-none" 
                : "bg-slate-900/40 border border-slate-800/50 hover:border-slate-700/50"
              }`}
            >
              {skill.featured && (
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/5 blur-2xl rounded-full pointer-events-none"></div>
              )}
              
              <div>
                <span className={`text-[10px] uppercase font-bold tracking-widest mb-10 block flex items-center gap-3 ${skill.featured ? "text-indigo-200" : "text-slate-600"}`}>
                  {skill.icon}
                  {skill.title}
                </span>
                <div className="space-y-4">
                  {skill.items.map((item, i) => (
                    <div key={i} className={`text-xl font-bold font-sans tracking-tight ${skill.featured ? "text-white" : "text-slate-300"}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                 <div className={`w-1.5 h-1.5 rounded-full ${skill.featured ? "bg-white animate-pulse" : "bg-indigo-500"}`}></div>
                 <span className={`text-[9px] font-bold uppercase tracking-widest ${skill.featured ? "text-indigo-100" : "text-slate-500"}`}>
                   Architect Ready
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
