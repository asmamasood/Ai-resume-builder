import { useState } from 'react';
import { motion } from 'motion/react';
import {
  User,
  FileText,
  GraduationCap,
  Briefcase,
  Lightbulb,
  FolderOpen,
  Plus,
  Trash2,
  Download,
  Save,
  Bot,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ResumePreview, ResumeData } from './ResumePreview';
import { AIChatbot } from './AIChatbot';
import { ColorThemeSelector, colorThemes, ColorTheme } from './ColorThemeSelector';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface EditorPageProps {
  onNavigate: (page: string) => void;
}

export function EditorPage({ onNavigate }: EditorPageProps) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ColorTheme>(colorThemes[0]);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['personal', 'summary'])
  );

  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
    },
    summary: '',
    education: [{ id: '1', school: '', degree: '', field: '', graduationDate: '' }],
    skills: [],
    experience: [
      { id: '1', company: '', position: '', startDate: '', endDate: '', description: '' },
    ],
    projects: [{ id: '1', name: '', description: '', link: '' }],
  });

  const [skillInput, setSkillInput] = useState('');

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { id: Date.now().toString(), school: '', degree: '', field: '', graduationDate: '' },
      ],
    }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now().toString(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const addSkill = () => {
    if (skillInput.trim()) {
      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()],
      }));
      setSkillInput('');
    }
  };

  const removeSkill = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const addProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        { id: Date.now().toString(), name: '', description: '', link: '' },
      ],
    }));
  };

  const updateProject = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    }));
  };

  const removeProject = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((proj) => proj.id !== id),
    }));
  };

  const handleSave = () => {
    localStorage.setItem('currentResume', JSON.stringify(resumeData));
    alert('Resume saved!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/20 via-purple-50/10 to-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-gray-900">Resume Editor</h1>
            <p className="text-gray-600">Create and customize your professional resume</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSave}>
              <Save size={20} className="mr-2" />
              Save
            </Button>
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <Download size={20} className="mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Main Editor Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column - Form */}
          <div className="lg:col-span-5 space-y-4">
            {/* Personal Info */}
            <Collapsible
              open={expandedSections.has('personal')}
              onOpenChange={() => toggleSection('personal')}
            >
              <div className="bg-white rounded-xl border border-gray-200">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <User size={20} className="text-indigo-600" />
                    <h3 className="text-gray-900">Personal Information</h3>
                  </div>
                  {expandedSections.has('personal') ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 pt-0 space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={resumeData.personalInfo.fullName}
                        onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={resumeData.personalInfo.email}
                          onChange={(e) => updatePersonalInfo('email', e.target.value)}
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={resumeData.personalInfo.phone}
                          onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={resumeData.personalInfo.location}
                        onChange={(e) => updatePersonalInfo('location', e.target.value)}
                        placeholder="New York, NY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        value={resumeData.personalInfo.linkedin}
                        onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                        placeholder="linkedin.com/in/johndoe"
                      />
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Summary */}
            <Collapsible
              open={expandedSections.has('summary')}
              onOpenChange={() => toggleSection('summary')}
            >
              <div className="bg-white rounded-xl border border-gray-200">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <FileText size={20} className="text-indigo-600" />
                    <h3 className="text-gray-900">Professional Summary</h3>
                  </div>
                  {expandedSections.has('summary') ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 pt-0">
                    <div className="relative">
                      <Textarea
                        value={resumeData.summary}
                        onChange={(e) =>
                          setResumeData((prev) => ({ ...prev, summary: e.target.value }))
                        }
                        placeholder="Write a brief summary about yourself..."
                        rows={4}
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-indigo-600"
                        onClick={() => setIsChatbotOpen(true)}
                      >
                        <Sparkles size={16} className="mr-1" />
                        Polish with AI
                      </Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Education */}
            <Collapsible
              open={expandedSections.has('education')}
              onOpenChange={() => toggleSection('education')}
            >
              <div className="bg-white rounded-xl border border-gray-200">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={20} className="text-indigo-600" />
                    <h3 className="text-gray-900">Education</h3>
                  </div>
                  {expandedSections.has('education') ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 pt-0 space-y-4">
                    {resumeData.education.map((edu) => (
                      <div key={edu.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
                        <div className="flex justify-between items-start">
                          <Label>Education Entry</Label>
                          {resumeData.education.length > 1 && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeEducation(edu.id)}
                            >
                              <Trash2 size={16} />
                            </Button>
                          )}
                        </div>
                        <Input
                          value={edu.school}
                          onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                          placeholder="School Name"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            value={edu.degree}
                            onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                            placeholder="Degree"
                          />
                          <Input
                            value={edu.field}
                            onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                            placeholder="Field of Study"
                          />
                        </div>
                        <Input
                          value={edu.graduationDate}
                          onChange={(e) =>
                            updateEducation(edu.id, 'graduationDate', e.target.value)
                          }
                          placeholder="Graduation Date"
                        />
                      </div>
                    ))}
                    <Button variant="outline" className="w-full" onClick={addEducation}>
                      <Plus size={16} className="mr-2" />
                      Add Education
                    </Button>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Work Experience */}
            <Collapsible
              open={expandedSections.has('experience')}
              onOpenChange={() => toggleSection('experience')}
            >
              <div className="bg-white rounded-xl border border-gray-200">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <Briefcase size={20} className="text-indigo-600" />
                    <h3 className="text-gray-900">Work Experience</h3>
                  </div>
                  {expandedSections.has('experience') ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 pt-0 space-y-4">
                    {resumeData.experience.map((exp) => (
                      <div key={exp.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
                        <div className="flex justify-between items-start">
                          <Label>Experience Entry</Label>
                          {resumeData.experience.length > 1 && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeExperience(exp.id)}
                            >
                              <Trash2 size={16} />
                            </Button>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            value={exp.position}
                            onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                            placeholder="Position"
                          />
                          <Input
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                            placeholder="Company"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            value={exp.startDate}
                            onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                            placeholder="Start Date"
                          />
                          <Input
                            value={exp.endDate}
                            onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                            placeholder="End Date"
                          />
                        </div>
                        <div className="relative">
                          <Textarea
                            value={exp.description}
                            onChange={(e) =>
                              updateExperience(exp.id, 'description', e.target.value)
                            }
                            placeholder="Describe your responsibilities and achievements..."
                            rows={3}
                          />
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-2 right-2 text-indigo-600"
                            onClick={() => setIsChatbotOpen(true)}
                          >
                            <Sparkles size={14} />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full" onClick={addExperience}>
                      <Plus size={16} className="mr-2" />
                      Add Experience
                    </Button>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Skills */}
            <Collapsible
              open={expandedSections.has('skills')}
              onOpenChange={() => toggleSection('skills')}
            >
              <div className="bg-white rounded-xl border border-gray-200">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <Lightbulb size={20} className="text-indigo-600" />
                    <h3 className="text-gray-900">Skills</h3>
                  </div>
                  {expandedSections.has('skills') ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 pt-0 space-y-3">
                    <div className="flex gap-2">
                      <Input
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addSkill();
                          }
                        }}
                        placeholder="Add a skill..."
                      />
                      <Button onClick={addSkill}>
                        <Plus size={16} />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full flex items-center gap-2"
                        >
                          {skill}
                          <button
                            onClick={() => removeSkill(index)}
                            className="hover:text-indigo-900"
                          >
                            <Trash2 size={14} />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Projects */}
            <Collapsible
              open={expandedSections.has('projects')}
              onOpenChange={() => toggleSection('projects')}
            >
              <div className="bg-white rounded-xl border border-gray-200">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <FolderOpen size={20} className="text-indigo-600" />
                    <h3 className="text-gray-900">Projects</h3>
                  </div>
                  {expandedSections.has('projects') ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 pt-0 space-y-4">
                    {resumeData.projects.map((project) => (
                      <div key={project.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
                        <div className="flex justify-between items-start">
                          <Label>Project Entry</Label>
                          {resumeData.projects.length > 1 && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeProject(project.id)}
                            >
                              <Trash2 size={16} />
                            </Button>
                          )}
                        </div>
                        <Input
                          value={project.name}
                          onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                          placeholder="Project Name"
                        />
                        <Textarea
                          value={project.description}
                          onChange={(e) =>
                            updateProject(project.id, 'description', e.target.value)
                          }
                          placeholder="Project description..."
                          rows={2}
                        />
                        <Input
                          value={project.link}
                          onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                          placeholder="Project Link (optional)"
                        />
                      </div>
                    ))}
                    <Button variant="outline" className="w-full" onClick={addProject}>
                      <Plus size={16} className="mr-2" />
                      Add Project
                    </Button>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Color Theme Selector */}
            <ColorThemeSelector
              selectedTheme={selectedTheme}
              onThemeChange={setSelectedTheme}
            />
          </div>

          {/* Right Column - Preview */}
          <div className="lg:col-span-7">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ResumePreview data={resumeData} theme={selectedTheme} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chatbot */}
      <AIChatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />

      {/* Floating AI Button */}
      {!isChatbotOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatbotOpen(true)}
          className="fixed right-4 bottom-4 w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg flex items-center justify-center z-40"
        >
          <Bot size={24} />
        </motion.button>
      )}
    </div>
  );
}
