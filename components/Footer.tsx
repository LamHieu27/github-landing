export default function Footer() {
  return (
    <footer
      id="contact"
      className="text-center py-10 border-t border-gray-800 mt-20"
    >
      <p className="text-gray-400">
        © {new Date().getFullYear()} Hiếu. Built with Next.js
      </p>
    </footer>
  );
}