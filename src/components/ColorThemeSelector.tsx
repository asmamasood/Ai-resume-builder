import { Palette, Check } from 'lucide-react';
import { motion } from 'motion/react';

export interface ColorTheme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export const colorThemes: ColorTheme[] = [
  {
    id: 'modern',
    name: 'Modern',
    primary: '#3B82F6',
    secondary: '#64748B',
    accent: '#60A5FA',
    background: '#F8FAFC',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    primary: '#1F2937',
    secondary: '#6B7280',
    accent: '#374151',
    background: '#FFFFFF',
  },
  {
    id: 'creative',
    name: 'Creative',
    primary: '#8B5CF6',
    secondary: '#14B8A6',
    accent: '#A78BFA',
    background: '#FAF5FF',
  },
  {
    id: 'professional',
    name: 'Professional',
    primary: '#0F172A',
    secondary: '#475569',
    accent: '#334155',
    background: '#F1F5F9',
  },
  {
    id: 'vibrant',
    name: 'Vibrant',
    primary: '#EC4899',
    secondary: '#F59E0B',
    accent: '#F472B6',
    background: '#FFF7ED',
  },
];

interface ColorThemeSelectorProps {
  selectedTheme: ColorTheme;
  onThemeChange: (theme: ColorTheme) => void;
}

export function ColorThemeSelector({ selectedTheme, onThemeChange }: ColorThemeSelectorProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-4">
        <Palette size={20} className="text-gray-600" />
        <h3 className="text-gray-900">Color Theme</h3>
      </div>

      <div className="space-y-3">
        {colorThemes.map((theme) => (
          <motion.button
            key={theme.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onThemeChange(theme)}
            className={`w-full p-3 rounded-lg border-2 transition-all ${
              selectedTheme.id === theme.id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div
                    className="w-6 h-6 rounded"
                    style={{ backgroundColor: theme.primary }}
                  />
                  <div
                    className="w-6 h-6 rounded"
                    style={{ backgroundColor: theme.secondary }}
                  />
                  <div
                    className="w-6 h-6 rounded"
                    style={{ backgroundColor: theme.accent }}
                  />
                </div>
                <span className="text-gray-900">{theme.name}</span>
              </div>
              {selectedTheme.id === theme.id && (
                <Check size={20} className="text-indigo-600" />
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
