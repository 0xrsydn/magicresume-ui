'use client'

import React, { useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import JobSuggestions from './JobSuggestions';
import CareerGrowthSuggestions from './CareerGrowthSuggestions';
import { ResumeAnalysisResult } from '../types';
import axios from 'axios';

interface ResumeUploadFlowProps {
  initialAnalysisResult: ResumeAnalysisResult;
}

const ResumeUploadFlow: React.FC<ResumeUploadFlowProps> = ({ initialAnalysisResult }) => {
  const [step, setStep] = useState<number>(1);
  const [file, setFile] = useState<File | null>(null);
  const [parsing, setParsing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [url, setUrl] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<ResumeAnalysisResult | null>(initialAnalysisResult);

  const result = analysisResult?.result[0];

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      await uploadFileAndGetRecommendations(uploadedFile);
    }
  };

  const uploadFileAndGetRecommendations = async (file: File) => {
    setParsing(true);
    setStep(2);
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://109.123.239.167:8192/get-recommendation?session=200', formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total ?? 1));
          setProgress(percentCompleted);
        },
      });

      setAnalysisResult(response.data);
      setParsing(false);
      setStep(3);
    } catch (error) {
      console.error('Error uploading file:', error);
      setParsing(false);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleImport = () => {
    if (file || url) {
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

  return (
    <Card className="w-full max-w-[450px] mx-auto mt-10 sm:mt-16">
      <CardHeader className="relative">
        <CardTitle className="text-violet-500 text-xl sm:text-2xl">Get Personalized Job Matches</CardTitle>
        <CardDescription className="text-sm sm:text-base">Upload your resume to find matching jobs and get course recommendations</CardDescription>
        <Link href="/" passHref>
          <Button variant="ghost" className="absolute top-2 right-2 h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center">
              <Upload className="mx-auto h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
              <p className="mt-2 text-xs sm:text-sm text-gray-600">Drag & Drop or Choose file to upload</p>
              <p className="text-xs text-gray-500">PDF (MAX. 5MB)</p>
              <input
                id="resume-upload"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.docx,.txt"
              />
              <Button
                variant="outline"
                className="mt-3 sm:mt-4 text-xs sm:text-sm"
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
            <Progress value={progress} className="w-full [&>div]:bg-violet-500" />
            <p className="text-sm text-muted-foreground">Analyzing your resume and generating suggestions...</p>
          </div>
        )}

        {step === 3 && analysisResult && (
          <Tabs defaultValue="jobs" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="jobs">Job Matches</TabsTrigger>
              <TabsTrigger value="growth">Career Growth</TabsTrigger>
            </TabsList>
            <TabsContent value="jobs">
              <JobSuggestions suggestions={analysisResult.result[0].job_suggestion} />
            </TabsContent>
            <TabsContent value="growth">
              <CareerGrowthSuggestions 
                personalInfo={analysisResult.result[0].personal_information} 
                courseSuggestions={analysisResult.result[0].course_suggestion}
              />
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
      {step === 1 && (
        <div className="flex justify-end items-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t">
          <div className="space-x-2">
            <Button variant="outline" className="text-xs sm:text-sm">Cancel</Button>
            <Button className="bg-violet-500 hover:bg-violet-300 text-xs sm:text-sm" onClick={handleImport}>Import</Button>
          </div>
        </div>
      )}
      {step === 3 && (
        <CardFooter>
          <Button className="w-full bg-violet-500 hover:bg-violet-300 text-xs sm:text-sm">Get Personalized Career Advice</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ResumeUploadFlow;