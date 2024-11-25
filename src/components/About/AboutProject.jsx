import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const AboutProject = () => {
  const [activeSection, setActiveSection] = useState('history');

  const sections = {
    history: {
      title: "Project History & Evolution",
      content: [
        {
          year: "1972",
          title: "Project Inception",
          description: "When Dr. Shirley C. Strum first arrived in Kenya, her initial research focused on understanding baboon behavior in their natural habitat near Lake Elementeita.",
          image: "/images/historical/wildlife-clubs-van.jpg"
        },
        {
          year: "1979",
          title: "Adaptation to Change",
          description: "The arrival of farmers in the region posed new challenges, shifting research priorities to include conservation alongside behavioral studies.",
          highlight: "Research evolved to understand how baboons adapt to human presence"
        },
        {
          year: "1984",
          title: "Major Translocation",
          description: "A groundbreaking effort successfully moved three troops of baboons to the eastern Laikipia Plateau, marking a new chapter in conservation history.",
          highlight: "First successful large-scale primate translocation in Africa"
        },
        {
          year: "1990s-Present",
          title: "Community Integration",
          description: "Pioneered the integration of local communities in primate research, establishing the para-biologist program.",
          image: "/images/people/field-staff-motorcycle.jpg"
        }
      ]
    },
    location: {
      title: "Research Location",
      description: "The project is situated on the eastern Laikipia Plateau, approximately 100 km north of Mt. Kenya. This unique ecosystem features:",
      features: [
        {
          title: "Climate",
          description: "High altitude savanna/bushland with 350-400mm annual rainfall, featuring two rainy and two dry seasons",
          image: "/images/landscapes/rainbow-rocks.jpg"
        },
        {
          title: "Wildlife",
          description: "Home to diverse species including lions, cheetahs, leopards, hyenas, wild dogs, elephants, zebras, giraffes, and buffalo",
          image: "/images/wildlife/grevys-zebras.jpg"
        },
        {
          title: "Research Conditions",
          description: "Researchers conduct on-foot observations, relying on baboons as natural watchdogs for predator awareness",
          image: "/images/people/researcher-fieldwork.jpg"
        }
      ]
    },
    community: {
      title: "Community Integration",
      highlights: [
        {
          title: "Local Expertise",
          description: "First primate project to employ local Kenyans as para-biologists and para-ecologists",
          image: "/images/community/maasai-cattle.jpg"
        },
        {
          title: "Knowledge Exchange",
          description: "Integration of traditional Maasai knowledge with scientific research methods",
          image: "/images/community/maasai-cultural-center.jpg"
        },
        {
          title: "Sustainable Practices",
          description: "Development of community-based conservation approaches that benefit both wildlife and local populations",
          image: "/images/people/plant-research.jpg"
        }
      ]
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeSection === key
                  ? 'bg-green-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* History Section */}
        {activeSection === 'history' && (
          <div className="space-y-16">
            {sections.history.content.map((item, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="text-green-800 font-mono text-sm">{item.year}</div>
                  <h3 className="text-3xl font-serif">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                  {item.highlight && (
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-800">
                      <p className="text-green-800">{item.highlight}</p>
                    </div>
                  )}
                </div>
                {item.image && (
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Location Section */}
        {activeSection === 'location' && (
          <div className="space-y-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-serif mb-6">{sections.location.title}</h2>
              <p className="text-gray-600 text-lg">{sections.location.description}</p>
            </div>
            
            {sections.location.features.map((feature, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-2xl font-serif">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Community Section */}
        {activeSection === 'community' && (
          <div className="space-y-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-serif mb-6">{sections.community.title}</h2>
              <p className="text-gray-600 text-lg">
                Pioneering community-based conservation through local engagement and knowledge integration
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {sections.community.highlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-4">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutProject;