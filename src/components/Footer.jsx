export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} BlockPlay. Built with love for creativity.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
