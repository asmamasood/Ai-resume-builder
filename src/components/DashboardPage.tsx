import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Plus,
  Search,
  MoreVertical,
  Edit,
  Download,
  Copy,
  Trash2,
  FileText,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

// Mock saved resumes data
const mockResumes = [
  {
    id: '1',
    title: 'Software Engineer Resume',
    lastModified: '2025-10-20',
    template: 'Modern Professional',
    colorTheme: 'blue',
  },
  {
    id: '2',
    title: 'Product Manager CV',
    lastModified: '2025-10-18',
    template: 'Executive Bold',
    colorTheme: 'purple',
  },
  {
    id: '3',
    title: 'Marketing Specialist',
    lastModified: '2025-10-15',
    template: 'Creative Designer',
    colorTheme: 'pink',
  },
];

const colorSchemes: Record<string, { bg: string; accent: string }> = {
  blue: { bg: 'bg-blue-50', accent: 'bg-blue-600' },
  purple: { bg: 'bg-purple-50', accent: 'bg-purple-600' },
  pink: { bg: 'bg-pink-50', accent: 'bg-pink-600' },
  green: { bg: 'bg-green-50', accent: 'bg-green-600' },
  gray: { bg: 'bg-gray-50', accent: 'bg-gray-600' },
};

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [resumes, setResumes] = useState(mockResumes);

  const filteredResumes = resumes.filter((resume) =>
    resume.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this resume?')) {
      setResumes((prev) => prev.filter((resume) => resume.id !== id));
    }
  };

  const handleDuplicate = (id: string) => {
    const resumeToDuplicate = resumes.find((r) => r.id === id);
    if (resumeToDuplicate) {
      const newResume = {
        ...resumeToDuplicate,
        id: Date.now().toString(),
        title: `${resumeToDuplicate.title} (Copy)`,
        lastModified: new Date().toISOString().split('T')[0],
      };
      setResumes((prev) => [...prev, newResume]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 via-white to-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-gray-900 mb-2">My Resumes</h1>
              <p className="text-gray-600">
                Manage and edit your saved resumes
              </p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 w-full md:w-auto"
              onClick={() => onNavigate('editor')}
            >
              <Plus size={20} className="mr-2" />
              New Resume
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search resumes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>

        {/* Resumes Grid */}
        {filteredResumes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResumes.map((resume, index) => (
              <motion.div
                key={resume.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                  {/* Resume Preview */}
                  <div
                    className={`relative aspect-[8.5/11] ${
                      colorSchemes[resume.colorTheme].bg
                    } p-6`}
                    onClick={() => onNavigate('editor')}
                  >
                    {/* Mock Resume Content */}
                    <div className="space-y-3">
                      <div
                        className={`h-3 ${colorSchemes[resume.colorTheme].accent} rounded w-2/3`}
                      />
                      <div className="h-2 bg-gray-300 rounded w-1/2" />
                      <div className="h-2 bg-gray-300 rounded w-1/3" />

                      <div className="pt-4 space-y-2">
                        <div
                          className={`h-2 ${colorSchemes[resume.colorTheme].accent} rounded w-1/4`}
                        />
                        <div className="h-1.5 bg-gray-300 rounded w-full" />
                        <div className="h-1.5 bg-gray-300 rounded w-full" />
                        <div className="h-1.5 bg-gray-300 rounded w-4/5" />
                      </div>

                      <div className="pt-4 space-y-2">
                        <div
                          className={`h-2 ${colorSchemes[resume.colorTheme].accent} rounded w-1/4`}
                        />
                        <div className="h-1.5 bg-gray-300 rounded w-full" />
                        <div className="h-1.5 bg-gray-300 rounded w-3/4" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        <Edit size={16} className="mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>

                  {/* Resume Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-1">{resume.title}</h3>
                        <p className="text-gray-600">{resume.template}</p>
                      </div>

                      {/* Actions Menu */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => onNavigate('editor')}>
                            <Edit size={16} className="mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download size={16} className="mr-2" />
                            Download PDF
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDuplicate(resume.id)}>
                            <Copy size={16} className="mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDelete(resume.id)}
                          >
                            <Trash2 size={16} className="mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <p className="text-gray-500 text-sm">
                      Last modified: {new Date(resume.lastModified).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={40} className="text-gray-400" />
            </div>
            <h3 className="text-gray-900 mb-2">
              {searchQuery ? 'No resumes found' : 'No resumes yet'}
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {searchQuery
                ? 'Try adjusting your search query'
                : 'Start creating your first professional resume'}
            </p>
            {!searchQuery && (
              <Button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                onClick={() => onNavigate('editor')}
              >
                <Plus size={20} className="mr-2" />
                Create Your First Resume
              </Button>
            )}
          </motion.div>
        )}

        {/* Stats */}
        {resumes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-gray-600 mb-1">Total Resumes</div>
              <div className="text-gray-900">{resumes.length}</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-gray-600 mb-1">Last Updated</div>
              <div className="text-gray-900">
                {new Date(
                  Math.max(...resumes.map((r) => new Date(r.lastModified).getTime()))
                ).toLocaleDateString()}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-gray-600 mb-1">Most Used Template</div>
              <div className="text-gray-900">Modern Professional</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
