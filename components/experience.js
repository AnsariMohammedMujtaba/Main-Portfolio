import Link from "next/link"

export default function Experience() {
  const experiences = [
    {
      company: "Exposys Data Labs",
      companyLink: "https://www.exposysdata.com/",
      role: "Web Developer",
      roleLink: "#",
      period: "Sept 2021 - Oct 2021",
      points: [
        "Developed solutions using JavaScript and other web technologies",
        "Implemented responsive design principles",
        "Collaborated on UI/UX design and styling decisions",
        "Implemented automated testing and validation",
      ],
      position: "left",
    },
    {
      company: "Freelancing",
      companyLink: "#",
      role: "Full Stack Developer",
      roleLink: "#",
      period: "May 2023 - Jul 2024",
      points: [
        "Developed and maintained websites using JavaScript and other latest technologies",
        "Implemented responsive design principles",
        "Designed and built gaming sites and websites for different businesses",
        "Provided ongoing maintenance and troubleshooting for security issues and user login",
      ],
      position: "left",
    },
  ]

  return (
    <section className="section-spacing px-4 bg-gray-900/30" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 experience-line transform md:-translate-x-1/2" />
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${exp.position === "right" ? "md:ml-auto" : "md:mr-auto"} w-full md:w-[45%] pl-8 md:pl-0`}
              >
                <div className="p-8 rounded-lg bg-gray-800/20 border border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    <Link href={exp.companyLink} className="hover:text-purple-400 transition-colors">
                      {exp.company}
                    </Link>
                  </h3>
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    <Link href={exp.roleLink} className="hover:text-purple-300 transition-colors">
                      {exp.role}
                    </Link>
                  </h4>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-separator" />
    </section>
  )
}

