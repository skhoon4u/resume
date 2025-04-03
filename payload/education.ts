import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Sungkyunkwan University',
      subTitle: '(Expected to Graduate at 2025-08)\nBS in Computer Education \n(GPA 4.14/4.5)',

      startedAt: '2020-03',
      // endedAt: '2010-02',
    },
    {
      title: 'Samuel Christian Academy',
      subTitle: 'Graduated',
      startedAt: '2016-03',
      endedAt: '2019-02',
    },
  ],
};

export default education;
