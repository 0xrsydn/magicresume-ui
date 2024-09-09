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
      {suggestions.map((job, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription>{job.company_name}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{job.description}</p>
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-sm font-medium text-violet-600">{job.location}</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm" asChild>
              <a href={job.url} target="_blank" rel="noopener noreferrer">Learn More</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default JobSuggestions;