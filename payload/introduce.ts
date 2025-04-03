import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Hello, I am an undergraduate student passionate about Machine Learning, particularly in NLP, LLMs, Explainable AI, and Recommender Systems. My deep fascination with AI stems from its remarkable potential to enrich human life and its rapid, transformative growth. Over the past year, I actively pursued opportunities to build my skills and knowledge: I enrolled in the AI convergence program at my university, successfully completed the Google ML Bootcamp, earned recognition at the AIM Challenge competition, and conducted research through the Undergraduate Research Program (URP). I am eager to continue expanding my expertise and research capabilities in a graduate program, where I aim to contribute meaningfully to advancements in NLP and related fields. Driven by my curiosity, diligence, and commitment, I look forward to collaborating and growing within an academic environment.',
    'Apart from my academic pursuits, I have a lifelong passion for music. Starting with classical music during childhood, I learned to play piano and violin, later expanding into band music, where I played guitar, bass, and drums. Throughout middle school, high school, and university, I actively participated in bands, performing regularly. During the COVID-19 pandemic, I took leadership roles in my university and departmental bands, organizing remote recordings and online performances, successfully revitalizing our activities during challenging times. Through these experiences, I developed skills in audio recording, mixing, and MIDI-based music production, occasionally composing music as well. Currently, I continue my musical journey by playing electric guitar regularly.',
  ],
  sign: 'Gyeonghun Sun',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
