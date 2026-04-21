export default function Footer() {
  return (
    <footer className="py-12 px-10 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-600 tracking-[0.2em] uppercase">
        <div className="mb-4 md:mb-0">© 2026 DEV_STUDIO // NEXUS</div>
        
        <div className="flex gap-8 mb-4 md:mb-0">
          <a href="#" className="hover:text-white transition-colors">Github</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        
        <div className="text-right">Built for high precision</div>
      </div>
    </footer>
  );
}
