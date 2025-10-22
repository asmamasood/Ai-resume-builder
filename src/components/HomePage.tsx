import { motion } from 'motion/react';
import { Sparkles, Bot, Palette, FileText, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { AnimatedBackground } from './AnimatedBackground';
import { GradientOrbs } from './GradientOrbs';
import { MeshGradient } from './MeshGradient';
import { FloatingParticles } from './FloatingParticles';
import { GridPattern } from './GridPattern';
import { ImageWithFallback } from './background/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: FileText,
      title: 'Free Templates',
      description: 'Choose from dozens of professional, ATS-friendly resume templates.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Bot,
      title: 'AI Chatbot Assistance',
      description: 'Get instant help polishing your content with AI-powered suggestions.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'Color Theme Customizer',
      description: 'Personalize your resume with beautiful, professionally-designed color themes.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Create a professional resume in under 10 minutes',
    },
    {
      icon: Shield,
      title: 'ATS Optimized',
      description: 'All templates are optimized for Applicant Tracking Systems',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Smart suggestions to make your resume stand out',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <GridPattern />
        <MeshGradient />
        <GradientOrbs />
        <AnimatedBackground />
        <FloatingParticles />
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-200/50 text-indigo-700 flex items-center gap-2 w-fit shadow-lg shadow-indigo-100/50">
                  <Sparkles size={16} />
                  AI-Powered Resume Builder
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-gray-900 mb-6"
              >
                Build Your Professional Resume in Minutes
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-600 mb-8 max-w-lg"
              >
                Create, customize, and polish your resume with AI — fast and easy. Stand out from the crowd with professionally designed templates.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 transition-all"
                  onClick={() => onNavigate('editor')}
                >
                  Create Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:border-indigo-300 hover:bg-indigo-50/50 backdrop-blur-sm transition-all"
                  onClick={() => onNavigate('templates')}
                >
                  Explore Templates
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 flex items-center gap-8 text-gray-600"
              >
                <div>
                  <div className="text-gray-900">50+</div>
                  <div className="text-sm">Templates</div>
                </div>
                <div className="h-8 w-px bg-gray-300" />
                <div>
                  <div className="text-gray-900">100K+</div>
                  <div className="text-sm">Resumes Created</div>
                </div>
                <div className="h-8 w-px bg-gray-300" />
                <div>
                  <div className="text-gray-900">4.9/5</div>
                  <div className="text-sm">User Rating</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1635768229592-8c2532d33cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzYwOTQ3ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional workspace"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to create a standout resume
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-2xl hover:border-indigo-200/50 transition-all cursor-pointer group relative overflow-hidden"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                >
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-indigo-600" size={28} />
                </div>
                <h4 className="text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">Start building your dream resume today!</h2>
            <p className="mb-8 text-indigo-100 max-w-2xl mx-auto">
              Join thousands of job seekers who have landed their dream jobs with our AI-powered resume builder.
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 shadow-xl shadow-white/20 hover:shadow-2xl hover:shadow-white/30 transition-all"
              onClick={() => onNavigate('editor')}
            >
              Get Started for Free
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
