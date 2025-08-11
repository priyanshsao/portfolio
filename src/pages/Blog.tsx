import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FadeIn from '@/components/magic-ui/fade-in';
import { Search, Calendar, Clock, ArrowRight, Filter } from 'lucide-react';
import { format } from 'date-fns';

const blogPosts = [
  {
    id: 1,
    title: 'Get Started with Contributing to Kubernetes',
    excerpt: 'Learn how to make your first contribution to kubernetes',
    category: 'Opensource',
    readTime: '3 min read',
    publishedAt: new Date('2024-05-19'),
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Kubernetes','Opensource']
  },
  {
    id: 2,
    title: 'URL parsing in Go',
    excerpt: 'Learn how to use the standard library of go to parse url',
    category: 'Backend',
    readTime: '1 min read',
    publishedAt: new Date('2025-07-27'),
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['URL','Go']
  },
  {
    id: 3,
    title: 'Writing and Reading data at the same time in Go',
    excerpt: '',
    category: 'Backend',
    readTime: '1 min read',
    publishedAt: new Date('2025-07-27'),
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['time','Go' ,'reading time', 'writing time']
  },
  {
    id: 4,
    title: 'Learn complete time package in Go',
    excerpt: '',
    category: 'Backend',
    readTime: '2 min read',
    publishedAt: new Date('2025-07-29'),
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['time','Go']
  },
  {
    id: 4,
    title: 'JSON in go',
    excerpt: 'A comprehensive comparison of REST and GraphQL APIs, with practical examples and decision-making frameworks.',
    category: 'Backend',
    readTime: '5 min read',
    publishedAt: new Date('2025-08-02'),
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['JSON','Go']
  },
];

const categories = ['All', 'React', 'JavaScript', 'Opensource', 'Backend', 'DevOps'];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts, tutorials, and insights on web development, technology, and software engineering
            </p>
          </div>
        </FadeIn>

        {/* Search and Filter */}
        <FadeIn delay={0.2}>
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className="flex items-center gap-1"
                >
                  <Filter className="h-3 w-3" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {paginatedPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
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
                
                <CardContent className="pt-0 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" className="group/btn p-0 h-auto self-start">
                    Read Full Article
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <FadeIn delay={0.6}>
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className="w-10 h-10"
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          </FadeIn>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <FadeIn>
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setCurrentPage(1);
                }}
              >
                Clear Filters
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}