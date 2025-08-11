import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/magic-ui/fade-in';
import { Mail, MapPin, Phone, Download, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import me from "../assets/me.jpg"

const skills = [
  'JavaScript', 'React',
  'Docker', 'Kubernetes',
  'Git', 'Go',
];

const experiences = [
  {
    title: 'Student',
    company: '',
    period: 'Present',
    description: 'B.tech',
    technologies: ['CSE', 'AI']
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-2xl border-4 border-primary/20"
            >
              <img 
                src={me} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about creating software apps using modern architectures.
            Specializing in React, JavaScript, Go, Kubernetes.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <FadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>My Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias inventore delectus ipsam ipsa consequuntur non eum voluptatem voluptatum suscipit voluptates.            
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                  
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                  
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Skills Section */}
            <FadeIn delay={0.4}>
              <Card>
                <CardHeader>
                  <CardTitle>Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Experience Timeline */}
            <FadeIn delay={0.6}>
              <Card>
                <CardHeader>
                  <CardTitle>Professional Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                        className="relative pl-6 border-l-2 border-primary/20 last:border-l-0"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                        <div className="space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="font-semibold text-foreground">{exp.title}</h3>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                          </div>
                          <p className="font-medium text-primary">{exp.company}</p>
                          <p className="text-muted-foreground">{exp.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            

            {/* Download CV */}
            <FadeIn delay={1.0}>
              <Card>
                <CardContent className="pt-6">
                  <Button className="w-full" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            
          </div>
        </div>
      </div>
    </div>
  );
}