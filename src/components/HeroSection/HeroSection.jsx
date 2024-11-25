import React from 'react';
import { Award, Clock, MapPin, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-green-900/10 to-green-900/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-green-800">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">
                50 Years of Research Excellence
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Uaso Ngiro Baboon Project
            </h1>

            <p className="text-xl text-gray-600">
              A pioneering study in primate behavior, ecology, and conservation, 
              integrating scientific research with community-based conservation in Kenya.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Established 1972</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Eastern Laikipia Plateau, Kenya</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors">
                Explore Research
              </button>
              <button className="px-6 py-3 border border-green-800 text-green-800 rounded-lg hover:bg-green-800/5 transition-colors">
                View Publications
              </button>
            </div>
          </div>

          {/* Right Column - Key Highlights Grid */}
          <div className="grid gap-6">
            {/* Featured Image with Caption */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/people/strum-family-baboons.jpg"
                alt="Dr. Shirley Strum with family"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600">
                  Dr. Shirley C. Strum with her children, pioneering baboon research 
                  that would span decades
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-serif text-green-800 mb-2">50+</div>
                <div className="text-sm text-gray-600">Years of Research</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-serif text-green-800 mb-2">3</div>
                <div className="text-sm text-gray-600">Baboon Troops Studied</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-serif text-green-800 mb-2">28+</div>
                <div className="text-sm text-gray-600">Years of Local Partnership</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-serif text-green-800 mb-2">1st</div>
                <div className="text-sm text-gray-600">Community-Based Primate Research</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-800 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;