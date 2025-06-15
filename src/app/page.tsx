'use client';

import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast.success('Successfully joined the waitlist!');
      setEmail('');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to join waitlist');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/onchainebg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Logo */}
      <div className="absolute top-6 left-[10px] md:left-[20px] md:text-[30px] z-20">
        <h1 className="text-[20px] bg-red-500 font-bold text-white tracking-tight">
          OnChainSuite
        </h1>
      </div>

      {/* Main Content */}
      <main className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
          <h2 className="text-[26px] md:text-[35px] md:text-6xl font-bold text-black hero-copy">
            Join the Future of <br /> OnChain.
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto hero-subcopy">
            Be the first to experience the future.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="form">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className=" px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 email"
                  required   
                />
              </div>
              <div className="sm:w-auto">
                <button
                  type="submit"
                  disabled={isLoading}
                  className=" sm:w-auto cursor-pointer px-[20px] py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap button"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Toaster position="bottom-center" />
    </div>
  );
} 