import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import SpaceBackground from '../components/SpaceBackground';

const Resume = () => {
  const navigate = useNavigate();
  const resumePdfUrl = '/resume.pdf'; // User will place their PDF here

  return (
    <div className="h-screen relative overflow-hidden flex flex-col">
      {/* Space Background */}
      <SpaceBackground />
      
      <div className="relative z-10 flex flex-col h-full">
      {/* Header - Thinner */}
      <div className="border-b border-slate-800 bg-slate-900/70 backdrop-blur-md z-20 flex-shrink-0">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-lg font-semibold text-white">Resume</h1>
          <a
            href={resumePdfUrl}
            download="Yeksuh_San_Resume.pdf"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Button variant="ghost" className="text-slate-400 hover:text-white">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </a>
        </div>
      </div>

      {/* Main Content - Full Height */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-6 py-4">
          <Card className="bg-slate-900/85 backdrop-blur-md border-slate-700/50 overflow-hidden h-full flex flex-col">
            {/* Decorative gradient */}
            <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 flex-shrink-0"></div>
            
            <div className="p-4 flex-1 flex flex-col overflow-hidden">
              {/* Resume Preview Section - Compact */}
              <div className="text-center mb-4 flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 mb-2">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-light text-white mb-1">Professional Resume</h2>
                <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                  Download my complete resume to learn more about my professional experience, skills, and accomplishments.
                </p>
              </div>

              {/* PDF Viewer - Full Height */}
              <div className="bg-slate-950/50 rounded-lg border border-slate-800 overflow-hidden flex-1">
                <iframe
                  src={resumePdfUrl}
                  className="w-full h-full"
                  title="Resume PDF"
                >
                  <div className="flex flex-col items-center justify-center h-full text-slate-400 p-8">
                    <ExternalLink className="w-12 h-12 mb-4" />
                    <p className="mb-4">Your browser doesn't support PDF viewing.</p>
                    <a
                      href={resumePdfUrl}
                      download="Yeksuh_San_Resume.pdf"
                      className="text-orange-500 hover:text-orange-400 underline"
                    >
                      Click here to download the PDF instead
                    </a>
                  </div>
                </iframe>
              </div>

              {/* Action Buttons - Compact */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4 flex-shrink-0">
                <a href={resumePdfUrl} download="Yeksuh_San_Resume.pdf">
                  <Button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-6 py-2 text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
                <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-6 py-2 text-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in New Tab
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
};

const FileText = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default Resume;
