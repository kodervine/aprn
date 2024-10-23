import { publications } from '@/services/data/publications';
import { ChangeEvent, useEffect, useState } from 'react';
import { EPublicationType } from '@/services/types/publications';

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterByType, setFilterByType] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterByType(e.target.value);
  };

  const filteredPublications = publications.map((publicationGroup) => ({
    ...publicationGroup,
    items: publicationGroup.items.filter(
      (item) =>
        (item.title.toLowerCase().includes(searchQuery) ||
          item.authors.toLowerCase().includes(searchQuery) ||
          item.summary.toLowerCase().includes(searchQuery) ||
          (item.publisher &&
            item.publisher.toLowerCase().includes(searchQuery))) &&
        (filterByType === '' || item.type === filterByType)
    ),
  }));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pb-16 p-6">
      <h1 className="text-4xl font-bold text-center">Our Publications</h1>

      <div className="flex flex-col md:flex-row justify-center my-8 gap-3">
        <input
          type="text"
          placeholder="Search publications, authors, publishers..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 w-full lg:max-w-lg border border-gray-300 rounded-md outline-none focus:outline-purple-900"
        />
        <select
          value={filterByType}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md outline-none focus:outline-purple-900"
        >
          <option value="">All Types</option>
          <option value={EPublicationType.Article}>Article</option>
          <option value={EPublicationType.BookChapter}>Book Chapter</option>
          <option value={EPublicationType.BookReview}>Book Review</option>
          <option value={EPublicationType.Essay}>Essay</option>
        </select>
      </div>

      {/* Filtered Publications */}
      {filteredPublications.map((publicationGroup, index) => (
        <div key={index} className="mt-12 md:px-24">
          <h4 className="uppercase text-gray-400 font-bold">
            {publicationGroup.year}
          </h4>
          <ul className="mt-4 space-y-8">
            {publicationGroup.items.length > 0 ? (
              publicationGroup.items.map((item, idx) => (
                <li key={idx} className="bg-white p-6 shadow-lg rounded-lg">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="italic">{item.authors}</p>
                  <span className="inline-block bg-red-200 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                    {item.type}
                  </span>

                  {/* Publisher */}
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
              ))
            ) : (
              <p className="text-gray-600">No matching publications found.</p>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Publications;
  
