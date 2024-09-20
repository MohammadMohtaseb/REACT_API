import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
        <p className="text-base md:text-lg text-gray-700 mb-4">
          Welcome to our website! We offer a variety of services and information
          tailored to meet your needs. Our goal is to provide you with the best
          experience and ensure that you find what you're looking for.
        </p>
        <p className="text-base md:text-lg text-gray-700">
          Our team is dedicated to delivering high-quality content and support.
          Whether you're here for recipes, movie recommendations, or weather updates,
          we're here to help. Thank you for visiting!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
