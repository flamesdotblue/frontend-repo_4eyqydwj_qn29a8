import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-400 to-yellow-300 grid place-items-center shadow-md">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight">BlockPlay</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 text-sm font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">Sign in</button>
          <button className="px-3 sm:px-4 py-2 text-sm font-semibold rounded-lg text-white bg-gray-900 hover:bg-black transition-colors">Get started</button>
        </div>
      </div>
    </header>
  );
}
