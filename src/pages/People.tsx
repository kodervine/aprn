import { researchers } from '@/services/data/people';
import { useEffect } from 'react';

const People = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen py-16">
      <h1 className="text-4xl font-bold text-center">Our Researchers</h1>
      <p className="text-lg text-center mt-4">
        Meet the scholars dedicated to uncovering African and diaspora
        histories.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-24">
        {researchers.map((researcher, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col gap-3 items-center"
          >
            <img
              src={researcher.image}
              alt={`${researcher.name}'s profile`}
              className="w-20 h-20 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">{researcher.name}</h3>
              <br />
              <hr className="h-1" />
              <p className="italic mt-1">{researcher.title}</p>
              <p className="mt-2">{researcher.research}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
