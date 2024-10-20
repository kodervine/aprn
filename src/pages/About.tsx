import AboutBannerImg from '@/assets/images/about-banner.jpeg';

import {
  InformationCircleIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

// Define an array of content
const contentArray = [
  {
    title: 'Migration Patterns',
    description:
      'Researching African migration patterns and their influence on diaspora communities. We are keen on examining the various routes taken by migrants, the challenges faced along the way, and the cultural impacts these movements have on both the host and home countries.',
    icon: InformationCircleIcon,
  },
  {
    title: 'Cultural Exchanges',
    description:
      'Investigating the exchanges between African and global cultures across history. We explore how art, music, and traditions have transcended borders, enriching communities worldwide and fostering deeper understanding among diverse populations.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Modern-Day Impacts',
    description:
      'Studying the cultural legacies of African migration in today’s societies. Our goal is to highlight how historical migration trends have shaped modern communities, influencing identity, social structures, and economic opportunities in various regions.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Digital Archives',
    description:
      'Preserving and archiving African historical materials for future generations. This initiative focuses on digitizing crucial documents, photographs, and artifacts to ensure accessibility and sustainability of cultural heritage in the digital age.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Community Impact',
    description:
      'Exploring the social dynamics and support networks formed within diaspora communities. We examine how cultural practices are maintained and adapted in new environments, fostering resilience and solidarity among members.',
    icon: UsersIcon,
  },
  {
    title: 'Policy Advocacy',
    description:
      'Advocating for policies that support and empower migrant communities. We focus on the importance of inclusive legislation and community engagement in addressing the unique challenges faced by migrants in various contexts.',
    icon: InformationCircleIcon,
  },
];

// Reusable Card Component
const InfoCard = ({ title, description, Icon }: any) => (
  <div className="bg-white rounded-lg shadow-sm transition-transform transform hover:scale-105 delay-100 p-6 md:py-20 relative overflow-hidden border border-gray-300 hover:shadow-xl">
    <div className="flex items-center mb-4">
      <Icon className="w-12 h-12 text-gray-800" />
      <h3 className="text-xl font-bold text-gray-800 ml-4">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Main Component Rendering Cards
const CardGrid = () => (
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
    {contentArray.map((item, index) => (
      <InfoCard
        key={index}
        title={item.title}
        description={item.description}
        Icon={item.icon}
      />
    ))}
  </div>
);

const About = () => {
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
          <h1 className="text-white text-4xl font-bold">About Us</h1>
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
