import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JobSuggestion } from '../types';

interface JobSuggestionsProps {
  suggestions: JobSuggestion[];
}

const JobSuggestions: React.FC<JobSuggestionsProps> = ({ suggestions }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Job Suggestions</h2>
      {suggestions.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription>{job.company}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-green-600">{job.salaryRange}</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {job.matchScore}% Match
            </div>
            <Button variant="outline" size="sm">Learn More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default JobSuggestions;