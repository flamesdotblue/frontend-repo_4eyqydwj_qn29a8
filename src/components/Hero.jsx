import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_80%_at_50%_20%,black,transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            Live 3D — Interactive building blocks
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Playful 3D creativity for curious minds
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore a shiny, animated world of orange building blocks. Design, experiment, and learn through play — right in your browser.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#features" className="px-4 py-2.5 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-black transition-colors">Explore features</a>
            <a href="#showcase" className="px-4 py-2.5 rounded-lg border border-gray-300 bg-white font-medium text-gray-900 hover:bg-gray-50 transition-colors">See it in action</a>
          </div>
        </div>
      </div>
    </section>
  );
}
