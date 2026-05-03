const projects = [
  {
    name: "Portfolio Website",
    desc: "Website cá nhân bằng Next.js",
    link: "#",
  },
  {
    name: "E-commerce UI",
    desc: "UI shop tối ưu conversion",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-10">Projects</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className="border border-gray-800 p-6 rounded-xl hover:border-white transition"
          >
            <h4 className="text-xl font-semibold mb-2">{p.name}</h4>
            <p className="text-gray-400">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}