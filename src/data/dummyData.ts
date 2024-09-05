import { JobSuggestion, CareerGrowthSuggestions } from '../types';

export const jobSuggestions: JobSuggestion[] = [
  { id: 1, title: 'Frontend Developer', company: 'PDIP', matchScore: 85, salaryRange: 'Rp 10.000.000 - Rp 20.000.000' },
  { id: 2, title: 'Data Scientist', company: 'Meta', matchScore: 72, salaryRange: 'Rp 15.000.000 - Rp 25.000.000' },
  { id: 3, title: 'UX Designer', company: 'Apple Inc.', matchScore: 68, salaryRange: 'Rp 10.000.000 - Rp 15.000.000' },
];

export const careerGrowthSuggestions: CareerGrowthSuggestions = {
  missingSkills: ['React Native', 'GraphQL', 'Docker'],
  youtubeRecommendations: [
    { title: 'Advanced React Native Patterns', channel: 'React Native Academy', url: 'https://www.youtube.com/watch?v=example1' },
    { title: 'GraphQL Crash Course', channel: 'Traversy Media', url: 'https://www.youtube.com/watch?v=example2' },
    { title: 'Docker Tutorial for Beginners', channel: 'TechWorld with Nana', url: 'https://www.youtube.com/watch?v=example3' },
  ],
};