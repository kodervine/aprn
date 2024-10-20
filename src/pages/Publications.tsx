import { publications } from '@/services/data/publications';

const Publications = () => {
  return (
    <div className="min-h-screen py-16">
      <h1 className="text-4xl font-bold text-center">Our Publications</h1>

      {publications.map((publicationGroup, index) => (
        <div key={index} className="mt-12 px-4 md:px-24">
          <h2 className="lg:text-2xl font-bold">
            {publicationGroup.year} Publications
          </h2>
          <ul className="mt-4 space-y-4">
            {publicationGroup.items.map((item, idx) => (
              <li key={idx} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="font-bold">{item.title}</h3>
                <p className="italic">{item.authors}</p>

                {/* New paragraph for the publisher */}
                {item.publisher && (
                  <p className="mt-1 text-gray-600">
                    Published by: {item.publisher}
                  </p>
                )}

                <p className="mt-2">{item.summary}</p>

                <span
                  className={`inline-block bg-purple-200 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full`}
                >
                  {item.type}{' '}
                </span>

                {item.doi && (
                  <a
                    href={`https://doi.org/${item.doi}`}
                    className="text-purple-800 underline mt-2 block"
                  >
                    DOI: {item.doi}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Publications;
