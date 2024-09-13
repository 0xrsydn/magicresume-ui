import React from 'react';
import ResumeUploadFlow from '../../components/ResumeUploadFlow';
import { resumeAnalysisResult } from '../../data/dummyData';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <ResumeUploadFlow analysisResult={resumeAnalysisResult as any} />
    </div>
  );
};

export default HomePage;