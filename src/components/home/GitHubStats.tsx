import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedCounter from '@/components/magic-ui/animated-counter';
import FadeIn from '@/components/magic-ui/fade-in';
import Shimmer from '@/components/magic-ui/shimmer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Github, Star, GitFork, Users } from 'lucide-react';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
}

interface Repository {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  React: '#61dafb',
  HTML: '#e34c26',
  CSS: '#1572B6',
  'C++': '#f34b7d',
  Go: '#00ADD8',
  Rust: '#dea584',
};

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Replace 'your-username' with actual GitHub username
        const username = 'priyanshsao'; // Demo username
        
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=10`)
        ]);

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setStats({
          public_repos: userData.public_repos || 42,
          followers: userData.followers || 120,
          following: userData.following || 89,
        });

        setRepos(reposData.slice(0, 5) || [
          { name: 'awesome-project', stargazers_count: 234, forks_count: 45, language: 'TypeScript' },
          { name: 'react-components', stargazers_count: 189, forks_count: 32, language: 'React' },
          { name: 'python-scripts', stargazers_count: 156, forks_count: 28, language: 'Python' },
          { name: 'web-portfolio', stargazers_count: 98, forks_count: 15, language: 'JavaScript' },
          { name: 'api-service', stargazers_count: 67, forks_count: 12, language: 'Go' },
        ]);
      } catch {
        // Fallback data for demo
        setStats({
          public_repos: 42,
          followers: 120,
          following: 89,
        });
        setRepos([
          { name: 'awesome-project', stargazers_count: 234, forks_count: 45, language: 'TypeScript' },
          { name: 'react-components', stargazers_count: 189, forks_count: 32, language: 'React' },
          { name: 'python-scripts', stargazers_count: 156, forks_count: 28, language: 'Python' },
          { name: 'web-portfolio', stargazers_count: 98, forks_count: 15, language: 'JavaScript' },
          { name: 'api-service', stargazers_count: 67, forks_count: 12, language: 'Go' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const languageData = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {} as { [key: string]: number });

  const pieData = Object.entries(languageData).map(([language, count]) => ({
    name: language,
    value: count,
    color: languageColors[language] || '#8884d8',
  }));

  if (loading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shimmer className="h-8 w-64 mx-auto mb-4" />
            <Shimmer className="h-4 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Shimmer key={i} className="h-32" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">GitHub Statistics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A snapshot of my open-source contributions and development activity
            </p>
          </div>
        </FadeIn>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FadeIn delay={0.2}>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Github className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-2xl">
                  <AnimatedCounter value={stats?.public_repos || 0} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Public Repositories</p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle className="text-2xl">
                  <AnimatedCounter value={stats?.followers || 0} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Followers</p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.6}>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Star className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle className="text-2xl">
                  <AnimatedCounter value={repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Total Stars</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Repository Stars Chart */}
          <FadeIn delay={0.8}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Top Repositories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={repos}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="stargazers_count" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Language Distribution */}
          <FadeIn delay={1.0}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitFork className="h-5 w-5 text-green-500" />
                  Language Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}