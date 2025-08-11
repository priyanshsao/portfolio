import React from 'react';
import Hero from '@/components/home/Hero';
import GitHubStats from '@/components/home/GitHubStats';
import FeaturedPosts from '@/components/home/FeaturedPosts';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GitHubStats />
      <FeaturedPosts />
    </div>
  );
}