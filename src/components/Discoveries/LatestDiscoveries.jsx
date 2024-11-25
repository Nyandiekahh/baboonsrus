import React from 'react';

const LatestDiscoveries = ({ researchHighlights, activeStory, setActiveStory }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="font-serif text-3xl mb-12 flex justify-between items-center">
          Latest Discoveries
          <div className="flex gap-2">
            {researchHighlights.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStory === i 
                    ? 'w-8 bg-green-800' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveStory(i)}
              />
            ))}
          </div>
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          {researchHighlights.map((article, index) => (
            <ArticleCard 
              key={article.id}
              article={article}
              isActive={index === activeStory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArticleCard = ({ article, isActive }) => {
  return (
    <article 
      className={`group transition-all duration-500 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95 hover:opacity-75'
      }`}
    >
      {/* Article card content */}
    </article>
  );
};

export default LatestDiscoveries;