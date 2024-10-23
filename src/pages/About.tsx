import AboutBannerImg from '@/assets/images/about-banner.jpeg';
import { aboutContent } from '@/services/data/about';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

// Reusable Card Component
const InfoCard = ({ title, points, description, Icon }: any) => (
  <div className="bg-white rounded-lg shadow-sm p-6 md:py-20 relative border border-gray-300 hover:shadow-xl flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <Icon className="w-12 h-12 text-gray-800" />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="mt-4 text-gray-600 text-left">{description}</p>
    <ul className="list-none text-left">
      {points.map((item: string, index: number) => (
        <li key={index} className="flex items-start mb-2">
          {/* Icon for each list item */}
          <CheckIcon className="w-5 h-5  mr-2" />
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Main Component Rendering Cards
const CardGrid = () => (
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
    {aboutContent.map((item, index) => (
      <InfoCard
        key={index}
        title={item.title}
        description={item.description}
        points={item.points}
        Icon={item.icon}
      />
    ))}
  </div>
);

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div
        className="relative w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${AboutBannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-5xl">About Us</h1>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 px-4 md:px-24 lg:px-32 text-center">
        <h2 className="text-3xl font-bold">Who We Are</h2>
        <p className="text-lg mt-4">
          We are a group of historians and researchers focused on exploring
          Africa's migration, cultural exchanges, and their impacts on modern
          societies.
        </p>
        <CardGrid />
      </section>
    </div>
  );
};

export default About;
