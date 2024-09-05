'use client'

import React, { useState } from 'react';
import { Upload, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobSuggestions from './JobSuggestions';
import CareerGrowthSuggestions from './CareerGrowthSuggestions';
import { JobSuggestion, CareerGrowthSuggestions as CareerGrowthSuggestionsType } from '../types';

interface ResumeUploadFlowProps {
  jobSuggestions: JobSuggestion[];
  careerGrowthSuggestions: CareerGrowthSuggestionsType;
}

const ResumeUploadFlow: React.FC<ResumeUploadFlowProps> = ({ jobSuggestions, careerGrowthSuggestions }) => {
  const [step, setStep] = useState<number>(1);
  const [file, setFile] = useState<File | null>(null);
  const [parsing, setParsing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setStep(2);
      simulateParsing();
    }
  };

  const simulateParsing = () => {
    setParsing(true);
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setParsing(false);
        setStep(3);
      }
    }, 200);
  };

  return (
    <Card className="w-[450px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Resume Upload and Career Assistant</CardTitle>
        <CardDescription>Upload your resume to find matching jobs and get career advice</CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="resume" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Upload your resume
            </label>
            <Button variant="outline" className="w-full h-32" onClick={() => document.getElementById('resume')?.click()}>
              <div className="flex flex-col items-center justify-center">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <span className="text-sm text-gray-500">Click to upload or drag and drop</span>
                <span className="text-xs text-gray-500">PDF, DOCX, or TXT (MAX. 5MB)</span>
              </div>
            </Button>
            <input id="resume" type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.docx,.txt" />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <Alert>
              <FileText className="h-4 w-4" />
              <AlertTitle>Parsing Resume</AlertTitle>
              <AlertDescription>{file?.name}</AlertDescription>
            </Alert>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground">Analyzing your resume and generating suggestions...</p>
          </div>
        )}

        {step === 3 && (
          <Tabs defaultValue="jobs" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="jobs">Job Matches</TabsTrigger>
              <TabsTrigger value="growth">Career Growth</TabsTrigger>
            </TabsList>
            <TabsContent value="jobs">
              <JobSuggestions suggestions={jobSuggestions} />
            </TabsContent>
            <TabsContent value="growth">
              <CareerGrowthSuggestions suggestions={careerGrowthSuggestions} />
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
      {step === 3 && (
        <CardFooter>
          <Button className="w-full">Get Personalized Career Advice</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ResumeUploadFlow;