import { JobSuggestion, CareerGrowthSuggestions } from '../types';

export const jobSuggestions: JobSuggestion[] = [
  { id: 1, title: 'Frontend Developer', company: 'PDIP', matchScore: 85, salaryRange: 'Rp 10.000.000 - Rp 20.000.000' },
  { id: 2, title: 'Data Scientist', company: 'Meta', matchScore: 72, salaryRange: 'Rp 15.000.000 - Rp 25.000.000' },
  { id: 3, title: 'UX Designer', company: 'Apple Inc.', matchScore: 68, salaryRange: 'Rp 10.000.000 - Rp 15.000.000' },
];

export const careerGrowthSuggestions: CareerGrowthSuggestions = {
  missingSkills: ['React Native', 'GraphQL', 'Docker'],
  youtubeRecommendations: [
    { title: 'React Native Tutorial for Beginners - Build a React Native App', channel: 'Programming with Mosh', url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc' },
    { title: 'GraphQL Crash Course', channel: 'Net Ninja', url: 'https://www.youtube.com/watch?v=xMCnDesBggM&list=PL4cUxeGkcC9gUxtblNUahcsg0WLxmrK_y' },
    { title: 'Learn Docker in 7 Easy Steps - Full Beginner\'s Tutorial', channel: 'Fireship', url: 'https://www.youtube.com/watch?v=gAkwW2tuIqE' },
  ],
};