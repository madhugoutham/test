import { CodeBracketIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: "Enhanced Image Classification for Unseen Class Detection",
      period: "Oct 2024 - Dec 2024",
      technologies: ["Python", "TensorFlow", "GANs"],
      description: [
        "Constructed a hybrid framework merging GANs with segmentation for unseen class detection, achieving 70.25% accuracy.",
        "Synthesized attribute-conditioned, segmentation-enhanced features to enrich visual representations for zero-shot tasks.",
        "Analyzed operational data to reduce network downtime by 25% and boosted system performance via data-driven optimizations."
      ]
    },
    {
      title: "Predicting Cancer Prevalence from Satellite Imagery",
      period: "Jul 2024 – Aug 2024",
      technologies: ["Python", "TensorFlow", "Deep Learning"],
      description: [
        "Designed 5 ML models to analyze 1M satellite images, forecasting a 20% cancer prevalence.",
        "Utilized OpenCV and computer vision techniques to extract relevant features from satellite images.",
        "Augmented prediction accuracy by 35% while curtailing data processing time by 40%."
      ]
    },
    {
      title: "Assessing Reproducibility of Jupyter Notebooks",
      period: "Dec 2023",
      technologies: ["Jupyter Notebooks", "Python", "MPI", "Dask"],
      description: [
        "Optimized notebooks for extreme-scale computing, increasing computational efficiency by 25%.",
        "Streamlined real-time data analysis workflows using MPI and Dask, achieving 10x faster processing.",
        "Created interactive data visualizations to illustrate the impact of various factors on notebook reproducibility."
      ]
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-primary" />
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {project.period}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  {project.description.map((desc, descIdx) => (
                    <li key={descIdx} className="flex">
                      <span className="text-primary mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
