import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { PersonalInformation, CourseSuggestion } from '../types';

interface CareerGrowthSuggestionsProps {
  personalInfo: PersonalInformation;
  courseSuggestions: Record<string, CourseSuggestion[]>;
}

const CareerGrowthSuggestions: React.FC<CareerGrowthSuggestionsProps> = ({ personalInfo, courseSuggestions }) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Your Skills</CardTitle>
          <CardDescription>Based on your resume</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {personalInfo?.skills?.map((skill, index) => (
              <Badge key={index} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Career Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Location:</strong> {personalInfo.location}</p>
          <p><strong>Years of Experience:</strong> {personalInfo.year_of_experience}</p>
          <p><strong>Relevant Job Title:</strong> {personalInfo.job_title_relevan}</p>
          <p><strong>Estimated Salary:</strong> {personalInfo.salary_estimation}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Courses</CardTitle>
          <CardDescription>Enhance your skills with these courses</CardDescription>
        </CardHeader>
        <CardContent>
          {Object.entries(courseSuggestions).length > 0 ? (
            <ul className="space-y-4">
              {Object.entries(courseSuggestions).map(([skill, course], index) => (
                <li key={index}>
                  <h3 className="font-semibold mb-2">{skill}</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    {course.thumbnail && (
                      <Image
                        src={course.thumbnail}
                        alt={course.title || 'Video thumbnail'}
                        width={120}
                        height={68}
                        className="rounded"
                      />
                    )}
                    <div>
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-sm text-gray-500">{course.channel_title}</p>
                      <a href={course.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">Watch Video</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No course suggestions available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerGrowthSuggestions;