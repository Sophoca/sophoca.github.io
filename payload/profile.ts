import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '홍성빈',
    small: '(Sungbeen Hong)',
  },
  contact: [
    {
      title: 'tjdqls1668@naver.com',
      link: 'mailto:tjdqls1668@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://velog.io/@tjdqls1668',
      link: 'https://velog.io/@tjdqls1668',
      icon: faHome,
    },
    {
      title: 'https://github.com/sophoca',
      link: 'https://github.com/sophoca',
      icon: faGithub,
    },
  ],
  notice: {
    title: '',
    icon: faBell,
  },
};

export default profile;
