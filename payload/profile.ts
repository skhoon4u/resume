import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { faComment } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/mypic.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Gyeonghun Sun',
    small: '(선경훈)',
  },
  contact: [
    {
      title: 'skhoon4u@gmail.com',
      link: 'mailto:tux@linux.org',
      icon: faEnvelope,
    },
    {
      title: '(+82)010-6615-2484',
      icon: faPhone,
      // badge: true,
    },
    {
      link: 'https://github.com/skhoon4u',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/%EA%B2%BD%ED%9B%88-%EC%84%A0-b93618209/',
      icon: faLinkedin,
    },
    {
      link: 'https://www.youtube.com/playlist?list=PLWWhvwxqwW4Pib36doHLII5zgO7PNxFaX',
      icon: faYoutube,
    },
  ],
  notice: {
    title: 'As iron sharpens iron, so one person sharpens another.',
    icon: faComment,
  },
};

export default profile;
