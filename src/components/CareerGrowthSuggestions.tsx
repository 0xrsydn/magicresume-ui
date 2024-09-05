import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';
import { CareerGrowthSuggestions as CareerGrowthSuggestionsType } from '../types';

interface CareerGrowthSuggestionsProps {
  suggestions: CareerGrowthSuggestionsType;
}

const CareerGrowthSuggestions: React.FC<CareerGrowthSuggestionsProps> = ({ suggestions }) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Skills to Develop</CardTitle>
          <CardDescription>Based on your resume and job market trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {suggestions.missingSkills.map((skill, index) => (
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
          <ul className="space-y-2">
            {suggestions.youtubeRecommendations.map((video, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{video.title}</p>
                  <p className="text-sm text-muted-foreground">{video.channel}</p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerGrowthSuggestions;