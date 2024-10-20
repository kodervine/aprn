import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>

      <div className="text-center max-w-md mx-auto mb-10">
        <p className="text-lg text-gray-600 mb-4">
          Got questions or want to learn more about our work? Feel free to get
          in touch!
        </p>
        <p className="text-lg text-gray-600">
          Email us at{' '}
          <a
            href="mailto:researchgroup@historians.org"
            className="text-blue-500 hover:underline"
          >
            researchgroup@historians.org
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
