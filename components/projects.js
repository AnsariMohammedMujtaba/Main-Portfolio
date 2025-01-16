export default function Projects() {
  const projects = [
    {
      title: 'Veiled Face Recognition',
      description: 'This project develops a system that detects and recognizes individuals, even with masks, by focusing on the eye region.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face.PNG-lp2c1M4CbcBfSYRuBSfchev25MqHeT.png',
      link: 'https://github.com/AnsariMohammedMujtaba/Face-Recognition-using-Limited-Features',
      tags: ['Python', 'OpenCV', 'MachineLearning'],
    },
    {
      title: 'Department Management System',
      description: 'This project is a Java and MySQL system for managing student, faculty, and timetable data.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dept.PNG-WyscyQ0GlZ2Fm2dOLo7v12y0gFv9w7.png',
      link: 'https://github.com/AnsariMohammedMujtaba/Department-Mng-System',
      tags: ['Java', 'MySQL', 'DatabaseManagement'],
    },
    {
      title: 'Nobtex Composites - Client Website',
      description: 'Developed and Managed Business Website using WordPress',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nobtex.PNG-zr0j6qfP4GD0ytCfkvwwde73xM6dTc.png',
      link: 'https://nobtexcomposites.in/',
      tags: ['WordPress', 'Hostinger', 'GitHub'],
    },
    {
      title: 'TD Mortgage Calculator',
      description: 'Web-based platform that allows users to Calculate Mortgage.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cal.PNG-mJZPHe2RJRrx0NhwEvnF6DkbCi2Y4b.png',
      link: 'https://ansarimohammedmujtaba.github.io/TdMortgage/',
      tags: ['JavaScript', 'CSS', 'Bootstrap'],
    },
    {
      title: 'Car Game',
      description: 'Web Based Car Game Using Html,CSS, Javascript',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cargame.PNG-jguv8pUtX1r0UqDMV6OCpyBzvWVsQH.png',
      link: 'https://ansarimohammedmujtaba.github.io/Car-Game/',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ]

  return (
    <section className="section-spacing px-4 bg-gray-900/30" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Projects</h2>
        <p className="text-gray-300 mb-12 text-xl">
          Following projects showcase my skills and experience through real-world examples of my work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-colors flex flex-col bg-gray-800/20 hover:bg-gray-800/30">
              <div className="relative h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  className="inline-block text-purple-400 hover:text-purple-300 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-separator" />
    </section>
  )
}

