import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-green-900/10 to-green-900/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                Science to understand our origins...
                <br />
                Conservation to guarantee our future
              </h1>
              <h2 className="text-2xl md:text-3xl text-green-800 font-serif">
                Uaso Ngiro Baboon Project
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Baboons and humans are closely related and share many behaviors, emotions, and ways of seeing the world. Learning about baboons will let you decide for yourself the ways that baboons and humans are similar - and the ways that we are different.
              </p>
              <p className="text-sm text-gray-500">
                ~ Shirley Strum, Kenya, 2009
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors">
                Explore Research
              </button>
              <button className="px-6 py-3 border border-green-800 text-green-800 rounded-lg hover:bg-green-800/5 transition-colors">
                Get Involved
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            <img 
              src="/images/people/strum-family-baboons.jpg"
              alt="Dr. Shirley Strum with family"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-serif text-green-800 mb-2">38+</div>
                <div className="text-sm text-gray-600">Years of Research</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-serif text-green-800 mb-2">3</div>
                <div className="text-sm text-gray-600">Research Locations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;