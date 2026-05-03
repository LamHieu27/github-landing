export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Xin chào, mình là Hiếu 👋
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto">
        Frontend Developer chuyên React & Next.js. 
        Mình thích xây UI đẹp, tối ưu performance và trải nghiệm người dùng.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://github.com/"
          className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:opacity-80"
        >
          GitHub
        </a>
        <a
          href="#projects"
          className="border px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
        >
          Xem project
        </a>
      </div>
    </section>
  );
}