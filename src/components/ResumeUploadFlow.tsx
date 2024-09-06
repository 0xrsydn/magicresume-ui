'use client'

import React, { useState } from 'react';
import { Upload, FileText, X, Link } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
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
  const [url, setUrl] = useState<string>('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      simulateParsing();
    }
  };

  const simulateParsing = () => {
    setParsing(true);
    setStep(2);
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

  const handleImport = () => {
    if (file || url) {
      simulateParsing();
    }
  };

  return (
    <Card className="w-[450px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Start Cooking with Magic Resume</CardTitle>
        <CardDescription>Upload your resume to find matching jobs and get career advice</CardDescription>
        <Button variant="ghost" className="absolute top-2 right-2 h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">Drag & Drop or Choose file to upload</p>
              <p className="text-xs text-gray-500">PDF, DOCX, or TXT (MAX. 5MB)</p>
              <input
                id="resume-upload"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.docx,.txt"
              />
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => document.getElementById('resume-upload')?.click()}
              >
                Choose File
              </Button>
            </div>

            <div className="text-center">
              <span className="text-sm text-gray-500">OR</span>
            </div>

            <div className="space-y-2">
              <label htmlFor="url-input" className="text-sm font-medium">
                Import from URL
              </label>
              <div className="flex space-x-2">
                <Input
                  id="url-input"
                  type="url"
                  placeholder="Add resume URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <Button variant="outline" onClick={handleImport}>Upload</Button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <Alert>
              <FileText className="h-4 w-4" />
              <AlertTitle>Parsing Resume</AlertTitle>
              <AlertDescription>{file ? file.name : 'Uploaded URL'}</AlertDescription>
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
      {step === 1 && (
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t">
          <Button variant="link" className="text-sm text-blue-600">
            <Link className="h-4 w-4 mr-2" />
            Help Center
          </Button>
          <div className="space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleImport}>Import</Button>
          </div>
        </div>
      )}
      {step === 3 && (
        <CardFooter>
          <Button className="w-full bg-violet-500 hover:bg-violet-300">Get Personalized Career Advice</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ResumeUploadFlow;