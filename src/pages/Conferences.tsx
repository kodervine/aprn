import { useEffect } from 'react';

interface Conference {
  year: number;
  title: string;
  description: string;
  link: string;
}

const conferences: Conference[] = [
  {
    year: 2024,
    title: 'Historical Narratives in the African Diaspora',
    description:
      'Presented at the Global History Symposium in Cape Town, discussing migration patterns and cultural preservation.',
    link: 'https://conference-link-2024.com',
  },
  {
    year: 2023,
    title: 'Cultural Preservation through Digital Archiving',
    description:
      'A look at the use of digital tools in preserving African historical artifacts presented at the Digital Humanities Conference.',
    link: 'https://conference-link-2023.com',
  },
  {
    year: 2022,
    title: 'Impact of African Migrations on Modern Society',
    description:
      'Presented at the World Historians Forum, analyzing how African migrations shaped cultural and societal trends across continents.',
    link: 'https://conference-link-2022.com',
  },
];

const Conferences = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Conferences
        </h1>

        {conferences.map((conference, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-700">
              {conference.year}
            </h2>
            <h3 className="text-xl font-semibold text-blue-600 mt-2 hover:underline">
              <a
                href={conference.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {conference.title}
              </a>
            </h3>
            <p className="text-gray-600 mt-2">{conference.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conferences;
