export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
      <h1 className="font-bold text-lg">Hiếu.dev</h1>
      <div className="space-x-4 text-sm">
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
}