const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      skills: ["Python", "Java", "SQL", "C++", "Scala", "R", "iOS (Swift, Objective-C)", "Bash/Shell Scripting"]
    },
    {
      title: "Machine Learning/AI",
      skills: [
        "TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "XGBoost", "LightGBM", "CatBoost", "Transfer Learning",
        "Reinforcement Learning (OpenAI Gym, Stable Baselines)",
        "Natural Language Processing (spaCy, NLTK, Hugging Face Transformers, GPT-3/4, Diffusion Models)",
        "Deep Learning", "Feature Engineering", "Data Mining", "Predictive Analytics", "A/B Testing",
        "Recommendation Systems", "SHAP", "LIME", "PCA", "t-SNE", "UMAP"
      ]
    },
    {
      title: "MLOps & Deployment",
      skills: [
        "MLflow", "Kubeflow", "TensorFlow Extended (TFX)", "Apache Airflow", "Weights & Biases", "Flask", "FastAPI",
        "Streamlit", "CI/CD (Jenkins, GitHub Actions, GitLab CI)"
      ]
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "RESTful APIs"]
    },
    {
      title: "Big Data and ETL",
      skills: [
        "Apache Spark", "Hadoop", "Apache Kafka", "Apache Flink", "ETL Pipelines", "Data Warehousing",
        "Real-Time Data Processing", "Spark Streaming"
      ]
    },
    {
      title: "Databases",
      skills: ["Oracle SQL", "Microsoft SQL Server", "Spark SQL"]
    },
    {
      title: "Cloud and DevOps",
      skills: [
        "AWS (EC2, S3, RDS, Lambda, VPC)", "CloudFormation", "Docker", "Kubernetes", "Microservices Architecture",
        "Agile/SCRUM", "Git"
      ]
    },
    {
      title: "Data Analysis and Visualization",
      skills: [
        "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Plotly", "D3.js", "Statistical Analysis",
        "Hypothesis Testing", "Regression Analysis", "Econometrics"
      ]
    },
    {
      title: "Tools and IDEs",
      skills: ["Jupyter Notebook", "Anaconda", "Eclipse", "Visual Studio", "DBeaver"]
    },
    {
      title: "Other",
      skills: ["Data Structures", "Algorithms", "Object-Oriented Programming (OOP)", "Interpersonal skills"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
