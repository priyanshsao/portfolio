import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="font-bold text-lg text-foreground">Portfolio</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              A passionate software developer creating innovative solutions and sharing knowledge through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog Posts
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-2">
              <a href='https://github.com/priyanshsao'>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github size={16} />
              </Button>
              </a>
              <a href='https://www.linkedin.com/in/priyansh-sao-894737301/'>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin size={16} />
              </Button>
              </a>
              <a href='https://x.com/priyanshsao06'>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter size={16} />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © Priyansh Sao. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}