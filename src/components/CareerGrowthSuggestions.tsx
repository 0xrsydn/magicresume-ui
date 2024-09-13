import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonalInformation, CourseSuggestion } from '../types';

interface CareerGrowthSuggestionsProps {
  personalInfo: PersonalInformation;
  courseSuggestions: Record<string, CourseSuggestion>;
}

const CareerGrowthSuggestions: React.FC<CareerGrowthSuggestionsProps> = ({ personalInfo, courseSuggestions }) => {
  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><strong>Location:</strong> {personalInfo.location}</li>
            <li><strong>Years of Experience:</strong> {new Date().getFullYear() - personalInfo.year_of_experience}</li>
            <li><strong>Relevant Job Titles:</strong> {personalInfo.job_title_relevan}</li>
            <li><strong>Salary Estimation:</strong> {personalInfo.salary_estimation}</li>
          </ul>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {personalInfo.skills.map((skill, index) => (
              <span key={index} className="bg-violet-100 text-violet-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Courses */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Courses</CardTitle>
          <CardDescription>Enhance your skills with these videos</CardDescription>
        </CardHeader>
        <CardContent>
          {Object.entries(courseSuggestions).length > 0 ? (
            <ul className="space-y-4">
              {Object.entries(courseSuggestions).map(([skill, video], index) => (
                <li key={index}>
                  <h3 className="font-semibold mb-2">{skill}</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    {video.thumbnail && (
                      <Image
                        src={video.thumbnail}
                        alt={video.title || 'Video thumbnail'}
                        width={120}
                        height={68}
                        className="rounded"
                      />
                    )}
                    <div>
                      <h4 className="font-medium">{video.title}</h4>
                      <p className="text-sm text-gray-500">{video.channel_title}</p>
                      <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">Watch Video</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No video suggestions available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerGrowthSuggestions;