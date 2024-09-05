import React from 'react';
import ResumeUploadFlow from '../../components/ResumeUploadFlow';
import { jobSuggestions, careerGrowthSuggestions } from '../../data/dummyData';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <ResumeUploadFlow 
        jobSuggestions={jobSuggestions} 
        careerGrowthSuggestions={careerGrowthSuggestions} 
      />
    </div>
  );
};

export default HomePage;