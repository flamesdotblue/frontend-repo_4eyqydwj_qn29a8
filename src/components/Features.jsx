import { Star, Palette, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Instant 3D',
    desc: 'A smooth, interactive 3D scene loads instantly and works across devices.'
  },
  {
    icon: Palette,
    title: 'Playful Design',
    desc: 'Bright, friendly visuals inspired by building blocks spark creativity.'
  },
  {
    icon: Shield,
    title: 'Safe & Simple',
    desc: 'Clean UI, no clutter. Explore freely with helpful guidance along the way.'
  },
  {
    icon: Star,
    title: 'Made to Inspire',
    desc: 'Great for education, gaming concepts, and rapid prototyping.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What you can do</h2>
          <p className="mt-3 text-gray-600">Build, learn, and play with a delightful 3D block world — in one click.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-400 to-yellow-300 text-white grid place-items-center shadow-md">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
