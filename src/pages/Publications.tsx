import { publications } from '@/services/data/publications';
import { useEffect } from 'react';

const Publications = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen py-16">
      <h1 className="text-4xl font-bold text-center">Our Publications</h1>

      {publications.map((publicationGroup, index) => (
        <div key={index} className="mt-12 px-4 md:px-24">
          <h4 className="uppercase text-gray-400 font-bold">
            {publicationGroup.year}
          </h4>
          <ul className="mt-4 space-y-8">
            {publicationGroup.items.map((item, idx) => {
              return (
                <li key={idx} className="bg-white p-6 shadow-lg rounded-lg">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="italic">{item.authors}</p>
                  <span
                    className={`inline-block bg-red-200 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full`}
                  >
                    {item.type}{' '}
                  </span>

                  {/* New paragraph for the publisher */}
                  {item.publisher && (
                    <p className="mt-1 text-gray-600 text-sm">
                      Published in: {item.publisher}
                    </p>
                  )}

                  <p className="mt-2">{item.summary}</p>
                  {item.doi && (
                    <a
                      href={item.doi}
                      className="text-purple-800 underline mt-2 block break-all font-semibold"
                    >
                      Link to publication
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Publications;
