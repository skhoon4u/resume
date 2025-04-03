import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Make 2025',
      startedAt: '2024-12',
      endedAt: '2025-02',
      where: 'Side Project',
      descriptions: [
        {
          content:
            'Developed a web service that utilizes generative AI APIs to assist users in setting and achieving yearly goals.',
        },
        {
          content:
            'Classifies user goals into annual keywords and subdivides them into actionable monthly and weekly plans, delivered via email.',
        },
        {
          content:
            'Responsible for full-stack development (React for frontend, Node.js and Express for backend), Google Analytics integration, MongoDB for user management, and AWS EC2/S3 for deployment.',
        },
      ],
    },
    {
      title: 'URP(Undergraduate Research Program for Outstanding Students)',
      startedAt: '2024-09',
      endedAt: '2024-12',
      where: 'AI Convergence department at Sungkyunkwan University',
      descriptions: [
        {
          content:
            'Under Prof. Jinyoung Han, studied basic of ML and NLP and did presentations every two weeks about developments.',
        },
        {
          content:
            'Fine-tuned Blenderbot on the ESConv dataset based on research papers to develop a chatbot for psychological counseling.',
        },
        {
          content:
            'Implemented the pipeline in Python and developed a web service using React and Node.js.',
        },
      ],
    },
    {
      title: 'Google ML Bootcamp 2024',
      startedAt: '2024-06',
      endedAt: '2024-10',
      where: 'Google Developers',
      descriptions: [
        {
          content:
            'Successfully completed Google ML Bootcamp, studied Andrew Ng’s Deep Learning Specialization via Coursera.',
        },
        {
          content:
            'Fine-tuned Blenderbot on the ESConv dataset based on research papers to develop a chatbot for psychological counseling.',
        },
        {
          content:
            'Gained practical development experience through a Kaggle project and chatbot development utilizing the Gemma model.',
        },
      ],
    },
  ],
};

export default project;
