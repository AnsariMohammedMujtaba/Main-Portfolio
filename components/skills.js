export default function Skills() {
  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Apache Spark', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Databricks', icon: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg' },
    { name: 'Excel', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
    { name: 'ChatGPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'SQL', icon: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'JDBC', icon: 'https://www.oracle.com/a/ocom/img/jdbc.svg' },
    { name: 'Android Studio', icon: 'https://developer.android.com/studio/images/studio-icon.svg' },
    { name: 'GCP', icon: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' },
  ]

  return (
    <section className="section-spacing px-4" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800/10 hover:bg-gray-800/20 transition-colors backdrop-blur-sm"
            >
              <img
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <span className="text-gray-300 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="section-separator" />
    </section>
  )
}

