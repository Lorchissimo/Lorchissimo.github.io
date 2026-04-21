import { motion } from "motion/react";
import { ExternalLink, Code2, Zap } from "lucide-react";

const PROJECTS = [
  {
    title: "Hyperion Engine",
    category: "Rust / networking",
    image: "https://picsum.photos/seed/hyperion/800/600",
    description: "Custom Rust-based networking layer for high-throughput synchronization and low-latency data streaming.",
    tags: ["Rust", "QUIC", "WASM"]
  },
  {
    title: "Vortex Interface",
    category: "TypeScript / UI",
    image: "https://picsum.photos/seed/vortex/800/600",
    description: "A spatial computing interface for the browser, leveraging WebGL for high-precision data visualization.",
    tags: ["WebGL", "GLSL", "React"]
  },
  {
    title: "Aura Protocol",
    category: "Blockchain / Security",
    image: "https://picsum.photos/seed/aura/800/600",
    description: "Decentralized identity protocol ensuring privacy-preserving verification through zero-knowledge proofs.",
    tags: ["Solidity", "ZK-Proofs", "Go"]
  }
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
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">Selection // 2024</span>
            </div>
          </div>
          <div className="hidden md:block font-mono text-[10px] text-slate-500 max-w-[200px] text-right uppercase font-bold tracking-widest leading-loose">
            Exploration of distributed systems and high-throughput architectures
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
              className="bg-[#0a0a0a] border border-slate-800/50 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/5"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-indigo-500/10 rounded-2xl">
                    <Zap className="w-6 h-6 text-indigo-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 font-bold tracking-widest uppercase">0x7F42{index}</span>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-900 rounded-lg text-[9px] text-slate-400 font-black uppercase border border-slate-800 tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
