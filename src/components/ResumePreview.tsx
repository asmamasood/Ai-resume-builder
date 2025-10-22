import { Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { ColorTheme } from './ColorThemeSelector';

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
  };
  summary: string;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    field: string;
    graduationDate: string;
  }>;
  skills: string[];
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  projects: Array<{
    id: string;
    name: string;
    description: string;
    link: string;
  }>;
}

interface ResumePreviewProps {
  data: ResumeData;
  theme: ColorTheme;
}

export function ResumePreview({ data, theme }: ResumePreviewProps) {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ backgroundColor: theme.background }}
    >
      <div className="aspect-[8.5/11] p-8 overflow-y-auto">
        {/* Header */}
        <div className="mb-6">
          <h1
            className="mb-2"
            style={{ color: theme.primary }}
          >
            {data.personalInfo.fullName || 'Your Name'}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: theme.secondary }}>
            {data.personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail size={14} />
                {data.personalInfo.email}
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone size={14} />
                {data.personalInfo.phone}
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                {data.personalInfo.location}
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-1">
                <ExternalLink size={14} />
                LinkedIn
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div className="mb-6">
            <h2
              className="pb-2 mb-3 border-b-2"
              style={{ color: theme.primary, borderColor: theme.accent }}
            >
              Professional Summary
            </h2>
            <p style={{ color: theme.secondary }}>{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-6">
            <h2
              className="pb-2 mb-3 border-b-2"
              style={{ color: theme.primary, borderColor: theme.accent }}
            >
              Work Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 style={{ color: theme.primary }}>{exp.position || 'Position Title'}</h3>
                      <p style={{ color: theme.secondary }}>{exp.company || 'Company Name'}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm" style={{ color: theme.secondary }}>
                      <Calendar size={14} />
                      {exp.startDate || 'Start'} - {exp.endDate || 'End'}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-sm mt-2" style={{ color: theme.secondary }}>
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-6">
            <h2
              className="pb-2 mb-3 border-b-2"
              style={{ color: theme.primary, borderColor: theme.accent }}
            >
              Education
            </h2>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 style={{ color: theme.primary }}>
                        {edu.degree || 'Degree'} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p style={{ color: theme.secondary }}>{edu.school || 'School Name'}</p>
                    </div>
                    <p className="text-sm" style={{ color: theme.secondary }}>
                      {edu.graduationDate || 'Graduation Date'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-6">
            <h2
              className="pb-2 mb-3 border-b-2"
              style={{ color: theme.primary, borderColor: theme.accent }}
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: `${theme.primary}15`,
                    color: theme.primary,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div className="mb-6">
            <h2
              className="pb-2 mb-3 border-b-2"
              style={{ color: theme.primary, borderColor: theme.accent }}
            >
              Projects
            </h2>
            <div className="space-y-3">
              {data.projects.map((project) => (
                <div key={project.id}>
                  <div className="flex items-start justify-between">
                    <h3 style={{ color: theme.primary }}>{project.name || 'Project Name'}</h3>
                    {project.link && (
                      <ExternalLink size={16} style={{ color: theme.accent }} />
                    )}
                  </div>
                  {project.description && (
                    <p className="text-sm mt-1" style={{ color: theme.secondary }}>
                      {project.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
