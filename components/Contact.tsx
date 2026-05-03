export default function Contact() {
  const contact = {
    name: "Lâm Trung Hiếu",
    dob: "27/06/2005",
    phone: "+84 0975146090",
    email: "lamtrunghieu2706@gmail.com",
    avatar: "/avatars/hieu.png",
    school: "ĐH Công Thương TP.HCM",
    interests: ["Web Development", "UI/UX Design", "React", "Next.js"],
  };

  return (
    <section id="contact" className="px-6 py-20 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-12">Contact</h3>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-48 h-48 rounded-lg object-cover border border-gray-800"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">{contact.name}</h2>
            <p className="text-gray-400">Frontend Developer</p>
          </div>

          <div className="space-y-3 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-gray-500 font-medium min-w-24">Ngày sinh:</span>
              <span>{contact.dob}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-500 font-medium min-w-24">Số điện thoại:</span>
              <a href={`tel:${contact.phone}`} className="hover:text-white transition">
                {contact.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-500 font-medium min-w-24">Email:</span>
              <a href={`mailto:${contact.email}`} className="hover:text-white transition">
                {contact.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-500 font-medium min-w-24">Trường học:</span>
              <span>{contact.school}</span>
            </div>
          </div>

          {/* Interests */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Sở thích</h4>
            <div className="flex flex-wrap gap-2">
              {contact.interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm hover:border-white transition"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 pt-4">
            <a
              href="https://github.com"
              className="px-4 py-2 border border-gray-800 rounded-lg hover:border-white hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="px-4 py-2 border border-gray-800 rounded-lg hover:border-white hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
