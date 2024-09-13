export interface JobSuggestion {
  budget: number;
  company_name: string;
  description: string;
  id: string;
  location: string;
  title: string;
  url: string;
  score_relevance: number;
}

export interface YoutubeRecommendation {
  title: string;
  channel_title: string;
  url: string;
  description: string;
  thumbnail: string;
}

export interface CareerGrowthSuggestions {
  [skill: string]: YoutubeRecommendation[];
}

export interface PersonalInformation {
  skills: string[];
  location: string;
  year_of_experience: number;
  job_title_relevan: string;
  salary_estimation: string;
}

export interface CourseSuggestion {
  title: string;
  channel_title: string;
  url: string;
  description: string;
  thumbnail: string;
}

export interface ResumeAnalysisResult {
  message: string;
  result: [{
    personal_information: PersonalInformation;
    job_suggestion: JobSuggestion[];
    course_suggestion: Record<string, CourseSuggestion[]>;
  }];
}