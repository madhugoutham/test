import { Link } from 'react-scroll';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-10 md:pt-32 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Madhu Goutham Reddy <span className="text-primary">Ambati</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Machine Learning Engineer & Computer Vision Specialist
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Transforming data into intelligent solutions with advanced machine learning and computer vision expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn btn-primary px-6 py-3"
              >
                Get In Touch
              </Link>
              <a
                href="https://www.linkedin.com/in/madhu-goutham-reddy-ambati/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline px-6 py-3"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/madhugoutham"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline px-6 py-3"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <div className="w-full h-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-5xl font-bold">
                MG
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white"
          >
            <ArrowDownIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
