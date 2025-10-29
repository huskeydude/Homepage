import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Resume = () => {
  const navigate = useNavigate();
  const resumePdfUrl = '/resume.pdf'; // User will place their PDF here

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-xl font-semibold text-white">Resume</h1>
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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Card className="bg-slate-900/50 border-slate-800 overflow-hidden">
          {/* Decorative gradient */}
          <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
          
          <div className="p-12">
            {/* Resume Preview Section */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-light text-white mb-3">Professional Resume</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Download my complete resume to learn more about my professional experience, skills, and accomplishments.
              </p>
            </div>

            {/* PDF Viewer Placeholder */}
            <div className="bg-slate-950/50 rounded-lg border border-slate-800 overflow-hidden" style={{ minHeight: '600px' }}>
              <iframe
                src={resumePdfUrl}
                className="w-full h-full"
                style={{ minHeight: '600px' }}
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href={resumePdfUrl} download="Yeksuh_San_Resume.pdf">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
              <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in New Tab
                </Button>
              </a>
            </div>
          </div>
        </Card>
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
