import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/magic-ui/fade-in';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { format } from 'date-fns';

const featuredPosts = [
  {
    id: 1,
    title: 'Get Started with Contributing to Kubernetes',
    excerpt: 'Learn how to make your first contribution to kubernetes',
    category: 'Open Source',
    readTime: '3 min read',
    publishedAt: new Date('2024-05-19'),
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    title: 'URL parsing in Go',
    excerpt: 'Learn how to use the standard library of go to parse url',
    category: 'Backend',
    readTime: '1 min read',
    publishedAt: new Date('2025-07-27'),
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    title: 'Writing and Reading data at the same time in Go',
    excerpt: 'A comprehensive comparison of REST and GraphQL APIs, with practical examples and decision-making frameworks.',
    category: 'Backend',
    readTime: '1 min read',
    publishedAt: new Date('2025-07-27'),
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights and tutorials on modern web development, best practices, and emerging technologies
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.2}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {format(post.publishedAt, 'MMM dd, yyyy')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="group/btn p-0 h-auto">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.8}>
          <div className="text-center mt-12">
            <a href='/blog'>
              <Button size="lg" variant="outline">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}