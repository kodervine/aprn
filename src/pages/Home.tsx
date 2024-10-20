import HomeBannerImg from '@/assets/images/home-banner.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
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
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Exploring the Africa Stories
          </h1>
          <p className="text-white text-xl mt-4 text-center">
            Uncovering Histories, Understanding the Present
          </p>
          <button className="mt-6 px-8 py-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700">
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Migration</h3>
            <br />
            <hr className="h-1" />
            <p className="mt-2">
              Researching the movement of African peoples and its impact on
              global cultures.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Cultural Interactions</h3>
            <br />
            <hr className="h-1" />
            <p className="mt-2">
              Exploring the exchanges between African and global cultures across
              history.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Modern Impacts</h3>
            <br />
            <hr className="h-1" />
            <p className="mt-2">
              Understanding the legacy of African migrations on modern-day
              societies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
