'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email');
      setLoading(false);
      return;
    }
    
    try {
      // Here you would typically make an API call to your newsletter service
      // For now, we'll just simulate it with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track successful signup
      trackEvent({
        action: 'newsletter_signup',
        category: 'Engagement',
        label: email,
      });
      
      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      
      // Track failed signup
      trackEvent({
        action: 'newsletter_signup_error',
        category: 'Error',
        label: String(err),
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto bg-[#f8ebe6] p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#8B5E3B] mb-3">
        Stay Updated on Rose Water Benefits
      </h3>
      
      {submitted ? (
        <div className="text-green-700 py-3 text-center">
          <p>Thank you for subscribing! 🌹</p>
          <p className="text-sm mt-2">We'll send you natural skincare tips and exclusive offers.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3B]"
              required
            />
          </div>
          
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#8B5E3B] text-white py-2 rounded-md hover:bg-[#6a442b] transition ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Subscribing...' : 'Subscribe for Updates'}
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-2">
            We respect your privacy and will never share your information.
          </p>
        </form>
      )}
    </div>
  );
}
