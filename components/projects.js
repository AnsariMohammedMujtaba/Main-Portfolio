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
      title: 'NYC Taxi Data Engineering Project',
      description:
        'Processed 1 year of raw NYC taxi data using Pandas and PySpark in Azure Databricks. Implemented incremental and dynamic loading through Azure Data Factory pipelines. Stored data efficiently in Delta Tables on Azure Data Lake Gen2.',
      image: '', // Add image URL here
      link: '',  // Add GitHub or live link here
      tags: ['Azure Data Factory', 'Databricks', 'PySpark', 'Delta Lake', 'ETL'],
    },
    {
      title: 'Supply Chain Data Engineering Project',
      description:
        'Built a data pipeline using ADF to move data from SQL Server to ADLS as Delta Tables. Used Databricks for large-scale data processing and regional transformation workflows. Ensured quality with validation rules and checklists.',
      image: '', // Add image URL here
      link: '',  // Add GitHub or live link here
      tags: ['Azure', 'ADF', 'Databricks', 'Delta Tables', 'SQL Server'],
    },
  ];

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
              <div className="relative h-48 bg-gray-800">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm italic">Image Coming Soon</div>
                )}
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
                {project.link ? (
                  <a
                    href={project.link}
                    className="inline-block text-purple-400 hover:text-purple-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Project →
                  </a>
                ) : (
                  <span className="text-gray-500 italic text-sm">Link Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-separator" />
    </section>
  );
}
