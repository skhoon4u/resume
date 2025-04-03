import { IAward } from '../component/award/IAward';

const award: IAward.Payload = {
  disable: false,
  list: [
    {
      title: 'AIM Challenge',
      startedAt: '2024-08',
      endedAt: '2024-11',
      where: 'AI Innovation Convergence Industry-University Cooperation, Finalist Technical Award',
      descriptions: [
        {
          content:
            'Improved the performance of a coffee-ordering chatbot for a self-serve kiosk project conducted by DreamIdeaSoft.',
        },
        {
          content:
            'Utilized Rasa to classify intents and entities, trained NLP models, and optimized Python logic to enhance chatbot accuracy.',
        },
        {
          content:
            'Led technical direction, coordinated team responsibilities, and conducted meetings with support from a graduate-level mentor.',
        },
      ],
    },
    {
      title: 'SKKU College of Education - Global Convergence Hackathon',
      startedAt: '2024-10',
      endedAt: '2024-10',
      where: 'Sungkyunkwan University, Bronze Prize',
      descriptions: [
        {
          content: 'Participated in a hackathon focused on solving social issues with AI.',
        },
        {
          content:
            'Developed frontend and backend systems using Node.js, integrating fine-tuned hate-speech detection models and GPT API.',
        },
        {
          content:
            'Created a filtering mechanism to mitigate aggressive language in web content, preserving semantic meaning with softened expressions.',
        },
      ],
    },
    {
      title: 'Academic Excellence Scholarship',
      startedAt: '2023-09',
      endedAt: '2023-12',
      where: 'Sungkyunkwan University',
      descriptions: [
        {
          content:
            'Received the Highest Academic Excellence Scholarship for the Fall Semester of 2023 (GPA: 4.5/4.5)',
        },
      ],
    },
  ],
};

export default award;
