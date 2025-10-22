import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

const features = [
  { name: 'Basic Templates', free: true, premium: true },
  { name: 'Single-Page Resumes', free: true, premium: true },
  { name: 'AI Content Polish', free: '5/month', premium: 'Unlimited' },
  { name: 'Custom Color Themes', free: '3 themes', premium: 'All themes' },
  { name: 'PDF Download', free: 'With watermark', premium: 'No watermark' },
  { name: 'Multi-Page Resumes', free: false, premium: true },
  { name: 'Premium Templates', free: false, premium: true },
  { name: 'Cover Letter Builder', free: false, premium: true },
  { name: 'Job Application Tracker', free: false, premium: true },
  { name: 'Priority Support', free: false, premium: true },
];

const faqs = [
  {
    question: 'Can I try Premium before subscribing?',
    answer:
      'Yes! We offer a 7-day free trial for our Premium plan. You can cancel anytime during the trial period without being charged.',
  },
  {
    question: 'How does the AI feature work?',
    answer:
      'Our AI assistant analyzes your content and provides suggestions to make it more professional, impactful, and ATS-friendly. It helps with grammar, tone, and phrasing to ensure your resume stands out.',
  },
  {
    question: 'Can I download my resume without a subscription?',
    answer:
      'Yes, free users can download their resumes as PDFs with a small watermark. Premium users get watermark-free downloads.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Absolutely! You can cancel your subscription at any time from your account settings. You\'ll continue to have access to Premium features until the end of your billing period.',
  },
];

export function PricingPage({ onNavigate }: PricingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/30 via-white to-indigo-50/30 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start for free or unlock all features with Premium
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl border-2 border-gray-200 p-8"
          >
            <div className="mb-6">
              <h2 className="text-gray-900 mb-2">Free</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mt-2">Perfect for getting started</p>
            </div>

            <Button
              variant="outline"
              className="w-full mb-8"
              size="lg"
              onClick={() => onNavigate('editor')}
            >
              Get Started
            </Button>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Access to basic templates</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Single-page resumes</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">5 AI polish requests per month</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">3 color themes</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">PDF download with watermark</span>
              </div>
              <div className="flex items-start gap-3">
                <X size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Multi-page resumes</span>
              </div>
              <div className="flex items-start gap-3">
                <X size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Premium templates</span>
              </div>
              <div className="flex items-start gap-3">
                <X size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Cover letter builder</span>
              </div>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <h2 className="text-white mb-2">Premium</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-white">$9.99</span>
                <span className="text-indigo-100">/month</span>
              </div>
              <p className="text-indigo-100 mt-2">Everything you need to stand out</p>
            </div>

            <Button
              className="w-full mb-8 bg-white text-indigo-600 hover:bg-gray-100"
              size="lg"
            >
              Upgrade to Premium
            </Button>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">All free features</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Unlimited AI polish requests</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">All premium templates</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Multi-page resume support</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Watermark-free PDF downloads</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">All color themes</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Cover letter builder</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Job application tracker</span>
              </div>
              <div className="flex items-start gap-3">
                <Check size={20} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Priority support</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-gray-900 mb-8 text-center">Feature Comparison</h2>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-gray-900">Free</th>
                  <th className="px-6 py-4 text-center text-gray-900">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.free === 'boolean' ? (
                        feature.free ? (
                          <Check size={20} className="text-green-600 mx-auto" />
                        ) : (
                          <X size={20} className="text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-600">{feature.free}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? (
                          <Check size={20} className="text-green-600 mx-auto" />
                        ) : (
                          <X size={20} className="text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-600">{feature.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="bg-white rounded-2xl border border-gray-200">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-gray-900 text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
