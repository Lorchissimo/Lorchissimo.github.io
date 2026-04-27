import { motion } from "motion/react";
import { ExternalLink, Calendar, BookOpen } from "lucide-react";

const ARTICLES = [
  {
    title: "Architecting Multi-Agent Systems with n8n",
    date: "Oct 24, 2024",
    readTime: "8 min read",
    summary: "A deep dive into building autonomous, self-correcting workflows using the ReAct protocol and adversarial agent patterns.",
    link: "#",
  },
  {
    title: "Zero-Trust Security in Modern Web Apps",
    date: "Sep 12, 2024",
    readTime: "5 min read",
    summary: "Exploring heuristic logic and robust auditing practices to secure React and Vite applications deployed on the edge.",
    link: "#",
  },
  {
    title: "Dynamic Prompt Engineering for AI Personas",
    date: "Aug 05, 2024",
    readTime: "6 min read",
    summary: "How combinatorial prompt generation can yield highly specialized and accurate AI responses in production environments.",
    link: "#",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="py-32 px-10 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-5xl font-bold uppercase tracking-tighter text-white mb-4">Latest <span className="text-indigo-500">Articles</span></h2>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-indigo-500" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">Publications // 2024</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-slate-800/50 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/5"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-indigo-500/10 rounded-2xl">
                    <BookOpen className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {article.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50 items-center justify-between">
                <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">
                  {article.readTime}
                </span>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Read Post <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}