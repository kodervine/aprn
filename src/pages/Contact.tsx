import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>

      <div className="text-center max-w-md mx-auto mb-10">
        <p className="text-lg text-gray-600 mb-4">
          Got questions or want to learn more about our work? Feel free to get
          in touch!
        </p>
        <p className="text-lg text-gray-600">
          Email us
          <a
            href="mailto:ngozika.obi-ani@unn.edu.ng"
            className="text-purple-800 hover:underline"
          >
            {' '}
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
