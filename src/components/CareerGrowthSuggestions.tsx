import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';
import { CareerGrowthSuggestions as CareerGrowthSuggestionsType, PersonalInformation } from '../types';
import Image from 'next/image';

interface CareerGrowthSuggestionsProps {
  personalInfo: PersonalInformation;
  courseSuggestions: CareerGrowthSuggestionsType;
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
            {personalInfo.skills.map((skill, index) => (
              <Badge key={index} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recommended Videos</CardTitle>
          <CardDescription>Enhance your skills with these YouTube videos</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {Object.entries(courseSuggestions).map(([skill, videos], index) => (
              <li key={index}>
                <h3 className="font-semibold mb-2">{skill}</h3>
                {videos.map((video, videoIndex) => (
                  <div key={videoIndex} className="flex items-center space-x-4 mb-4">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={120}
                      height={90}
                      className="rounded-md"
                    />
                    <div className="flex-grow">
                      <p className="font-medium">{video.title}</p>
                      <p className="text-sm text-muted-foreground">{video.channel_title}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerGrowthSuggestions;