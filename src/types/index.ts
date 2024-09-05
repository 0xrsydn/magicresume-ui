export interface JobSuggestion {
    id: number;
    title: string;
    company: string;
    matchScore: number;
    salaryRange: string;
  }
  
  export interface YoutubeRecommendation {
    title: string;
    channel: string;
    url: string;
  }
  
  export interface CareerGrowthSuggestions {
    missingSkills: string[];
    youtubeRecommendations: YoutubeRecommendation[];
  }