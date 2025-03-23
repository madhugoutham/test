import { UserIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 text-primary mr-3" />
                <span>Madhu Goutham Reddy Ambati</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-primary mr-3" />
                <span>Illinois, United States</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary mr-3" />
                <span>+1 779-775-3627</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-primary mr-3" />
                <a
                  href="mailto:madhugouthamreddy@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  madhugouthamreddy@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/madhu-goutham-reddy-ambati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/madhugoutham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Over 3 years of expertise developing scalable machine learning models, data pipelines, and computer vision solutions.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Proficient in Python, TensorFlow, PyTorch, and advanced ML frameworks, specializing in deep learning, reinforcement learning, and transfer learning.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Achieved a 50% reduction in image analysis time and a 35% improvement in prediction accuracy on high-stakes projects.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Developed production-grade CNN-based algorithms, attaining 84.39% test accuracy in building classification tasks.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Experienced in designing robust MLOps solutions using Apache Spark, Hadoop, ETL pipelines, and AWS cloud services.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Skilled in data analysis and visualization with Pandas, NumPy, Matplotlib, and Power BI for predictive analytics and recommendations.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Published peer-reviewed research on DenseNet-201-based building classification and segmentation techniques.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Continuously updating skills and leveraging emerging AI innovations to drive impactful machine learning solutions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
