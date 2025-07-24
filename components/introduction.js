export default function Introduction() {
  const roles = [
    {
      title: "Web Developer",
      icon: "🌐",
      description: "Creating responsive and intuitive user interfaces",
    },
    {
      title: "Cloud Data Engineer",
      icon: "☁️",
      description: "Designing and implementing scalable data solutions",
    },
    {
      title: "Backend Developer",
      icon: "⚙️",
      description: "Building robust and efficient server-side applications",
    },
  ];

  return (
    <section className="section-spacing px-4" id="introduction">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Introduction</h2>
        <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-xl leading-relaxed">
          I'm Ansari Mohammed Mujtaba, a Computer Engineer with a B.E in Computer Science. I specialize in cloud data
          solutions and have a passion for web design and development. With over <strong>2 years of experience as a Data Engineer</strong>,
          I combine technical expertise and creativity to create digital products that drive business success and enhance user experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-5xl mb-6 block">{role.icon}</span>
              <h3 className="text-2xl font-semibold text-white mb-4">{role.title}</h3>
              <p className="text-gray-400">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-separator" />
    </section>
  );
}
