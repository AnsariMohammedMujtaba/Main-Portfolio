import Link from "next/link"

export default function Experience() {
  const experiences = [
    {
      company: "Dreamcare Developers",
      companyLink: "https://dreamcaredevelopers.com/",
      role: "Azure Data Engineer",
      roleLink: "#",
      period: "July 2023 – Present", // updated duration
      points: [
        "Built and maintained end-to-end data pipelines in Azure Data Factory (ADF) to automate the ingestion, transformation, and orchestration of large-scale data from diverse on-premise and cloud-based sources.",
        "Worked as a member of development team to created Pipelines in ADF using Linked Services/Datasets/Pipeline/ to Extract, Transform and load data from different sources like SQL, ORACLE, SAP etc.",
        "Enhanced ETL processes using Databricks and Spark (PySpark, DLT) to support scalable data analytics, achieving a 30% increase in data processing.",
        "Developed Spark Application Using Pyspark and Spark SQL for data extraction, transformation and aggregation from multiple file format for analyzing & transforming data to uncover insight into the customer usage patterns.",
        "Collaborated with teams to align business requirements with data engineering best practices, achieving a 95% client satisfaction rate.",
        "Integrated Azure Key Vault for secure storage of secrets, connection strings, and API keys, ensuring compliance with organizational security standards.",
        "Deployed code and pipelines via CI/CD pipelines and performed data curation and validation using Azure Databricks.",
        "Created Generic pipeline for scheduling the required jobs on particular day, worked on daily tasks based on Technical and Business rules.",
        "Achieved a 35% reduction in operational costs by implementing optimal job cluster configurations in Azure Databricks, enhancing efficiency and resource utilization."
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
