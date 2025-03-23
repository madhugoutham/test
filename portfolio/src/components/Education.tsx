import { AcademicCapIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Education = () => {
  const educations = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Northern Illinois University",
      location: "DeKalb, IL",
      period: "Aug 2023 – May 2025",
      gpa: "3.7",
    },
    {
      degree: "Bachelor of Technology",
      institution: "SRM Institute of Science & Technology",
      location: "Chennai, India",
      period: "Jul 2017 – Jun 2021",
      gpa: "3.8",
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Delegating Tasks",
      issuer: "LinkedIn Learning",
      year: "2022"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2022"
    },
    {
      name: "Learning Jira Software",
      issuer: "LinkedIn Learning",
      year: "2021"
    },
    {
      name: "SQL: Data Reporting and Analysis",
      issuer: "LinkedIn Learning",
      year: "2021"
    },
    {
      name: "SQL Essential Training",
      issuer: "LinkedIn Learning",
      year: "2021"
    },
    {
      name: "Python Data Structures",
      issuer: "Coursera",
      year: "2020"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education & <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <AcademicCapIcon className="h-6 w-6 mr-2 text-primary" />
              Academic Background
            </h3>

            <div className="space-y-6">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-primary">{edu.degree}</h4>
                      <p className="text-lg">{edu.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-300">{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4 text-sm">
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">{edu.location}</span>
                    </div>
                    <div className="font-semibold">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <svg
                className="h-6 w-6 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Professional Certifications
            </h3>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary dark:hover:border-primary transition-colors duration-300"
                  >
                    <div className="font-semibold">{cert.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {cert.issuer}, {cert.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
