// components/Newsletter/Newsletter.jsx
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="py-16 bg-green-900 text-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <h3 className="font-serif text-3xl mb-4">Stay at the Forefront of Research</h3>
        <p className="text-green-100 mb-8 text-lg">
          Join our community of researchers and receive weekly updates on the latest 
          discoveries in primate research and evolution.
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                     placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50
                     text-white"
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-white text-green-900 rounded-lg font-medium 
                     hover:bg-green-50 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;