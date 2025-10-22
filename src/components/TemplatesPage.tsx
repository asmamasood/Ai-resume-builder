import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface TemplatesPageProps {
  onNavigate: (page: string) => void;
}

// Mock template data
const templates = [
  { id: 1, name: 'Modern Professional', category: 'Single Page', isPremium: false, color: 'blue' },
  { id: 2, name: 'Executive Bold', category: 'Single Page', isPremium: true, color: 'purple' },
  { id: 3, name: 'Creative Designer', category: 'Single Page', isPremium: false, color: 'pink' },
  { id: 4, name: 'Tech Specialist', category: 'Multi Page', isPremium: true, color: 'green' },
  { id: 5, name: 'Minimal Clean', category: 'Single Page', isPremium: false, color: 'gray' },
  { id: 6, name: 'Corporate Elite', category: 'Multi Page', isPremium: true, color: 'indigo' },
  { id: 7, name: 'Portfolio Showcase', category: 'Slide-Based', isPremium: false, color: 'orange' },
  { id: 8, name: 'Academic Scholar', category: 'Multi Page', isPremium: false, color: 'teal' },
  { id: 9, name: 'Startup Innovator', category: 'Single Page', isPremium: true, color: 'red' },
];

const colorSchemes: Record<string, { bg: string; accent: string }> = {
  blue: { bg: 'bg-blue-50', accent: 'bg-blue-600' },
  purple: { bg: 'bg-purple-50', accent: 'bg-purple-600' },
  pink: { bg: 'bg-pink-50', accent: 'bg-pink-600' },
  green: { bg: 'bg-green-50', accent: 'bg-green-600' },
  gray: { bg: 'bg-gray-50', accent: 'bg-gray-600' },
  indigo: { bg: 'bg-indigo-50', accent: 'bg-indigo-600' },
  orange: { bg: 'bg-orange-50', accent: 'bg-orange-600' },
  teal: { bg: 'bg-teal-50', accent: 'bg-teal-600' },
  red: { bg: 'bg-red-50', accent: 'bg-red-600' },
};

export function TemplatesPage({ onNavigate }: TemplatesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = ['All', 'Single Page', 'Multi Page', 'Slide-Based'];

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 via-white to-purple-50/30 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-gray-900 mb-4">Resume Templates</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                    : ''
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                {/* Template Preview */}
                <div className={`relative aspect-[8.5/11] ${colorSchemes[template.color].bg} p-6`}>
                  {/* Mock Resume Layout */}
                  <div className="space-y-3">
                    <div className={`h-3 ${colorSchemes[template.color].accent} rounded w-2/3`} />
                    <div className="h-2 bg-gray-300 rounded w-1/2" />
                    <div className="h-2 bg-gray-300 rounded w-1/3" />
                    
                    <div className="pt-4 space-y-2">
                      <div className={`h-2 ${colorSchemes[template.color].accent} rounded w-1/4`} />
                      <div className="h-1.5 bg-gray-300 rounded w-full" />
                      <div className="h-1.5 bg-gray-300 rounded w-full" />
                      <div className="h-1.5 bg-gray-300 rounded w-4/5" />
                    </div>

                    <div className="pt-4 space-y-2">
                      <div className={`h-2 ${colorSchemes[template.color].accent} rounded w-1/4`} />
                      <div className="h-1.5 bg-gray-300 rounded w-full" />
                      <div className="h-1.5 bg-gray-300 rounded w-3/4" />
                    </div>

                    <div className="pt-4 space-y-2">
                      <div className={`h-2 ${colorSchemes[template.color].accent} rounded w-1/4`} />
                      <div className="flex gap-2">
                        <div className="h-1.5 bg-gray-300 rounded w-1/4" />
                        <div className="h-1.5 bg-gray-300 rounded w-1/4" />
                        <div className="h-1.5 bg-gray-300 rounded w-1/4" />
                      </div>
                    </div>
                  </div>

                  {/* Premium Badge */}
                  {template.isPremium && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                        Premium
                      </Badge>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => {
                        // Preview functionality
                      }}
                    >
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                      onClick={() => onNavigate('editor')}
                    >
                      Use Template
                    </Button>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-4">
                  <h3 className="text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-gray-600">{template.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <Filter className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-gray-900 mb-2">No templates found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search query
            </p>
            <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
