import HomeBannerImg from '@/assets/images/home-banner.jpg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const InfoCard = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="py-10 rounded-lg text-left">
      <div className="flex gap-4 justify-between items-center">
        <div className="font-bold w-1/2">{title}</div>
        <div className="w-1/2">{content}</div>
      </div>
      <hr className="mt-4" />
    </div>
  );
};
const StatisticsCard = ({ stats }: any) => {
  return (
    <div className="flex gap-4 justify-between">
      {stats.map((stat: any, index: number) => (
        <div key={index} className="flex flex-col gap-5">
          <div className="text-4xl lg:text-[80px] font-bold text-gray-800">
            {stat.number}
          </div>
          <div className="text-base lg:text-lg">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div
        className="relative w-full h-[50vh] md:h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${HomeBannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        title="Photo by Mukhtar Shuaib Mukhtar: https://www.pexels.com/photo/view-of-the-zuma-rock-in-niger-state-nigeria-21715785/"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Exploring the Africa Stories
          </h1>
          <p className="text-white text-xl mt-4 text-center">
            Uncovering Histories, Understanding the Present
          </p>
          <button className="mt-6 px-8 py-4 bg-purple-900 text-white rounded-lg hover:bg-purple-800">
            <Link to="/publications"> Explore Our Research</Link>
          </button>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 text-center">
        <p className="text-lg mt-4 px-4 md:px-24">
          Africa and Diaspora Perspectives Research Network is dedicated to
          understanding and highlighting the intricate histories and
          contributions of Africa and its diaspora across centuries and
          continents.
        </p>

        {/* Cards Section */}

        <div className="mt-12">
          <h2 className="font-bold">Our Areas of Focus</h2>
          <br />
          <InfoCard
            title="Black Studies"
            content="Focusing on the history, culture, and contributions of African and African American communities, highlighting social justice and identity."
          />{' '}
          <InfoCard
            title="Gender Studies"
            content="Examining the social constructions of gender, power dynamics, and inequality, along with the intersection of gender, race, and class."
          />
          <InfoCard
            title="Conflict and War Studies"
            content="Analyzing the causes and impacts of wars and conflicts throughout history, including peacebuilding and international relations."
          />
          <InfoCard
            title="Migration"
            content="Researching the movement of African peoples and its impact on global cultures."
          />
          <InfoCard
            title="Cultural Interactions"
            content="Exploring the exchanges between African and global cultures across history."
          />
          <InfoCard
            title="Modern Impacts"
            content="Understanding the legacy of African migrations on modern-day societies."
          />
          <h5 className="uppercase text-left py-10 font-bold text-purple-800">
            Our Achievements
          </h5>
          <StatisticsCard
            stats={[
              { number: '50+', label: 'Publications' },
              { number: '20+', label: 'Expert Researchers' },
              { number: '10+', label: 'Institutions Represented' },
            ]}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
