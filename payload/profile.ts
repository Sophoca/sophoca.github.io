import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
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
    // {
    //   link: 'https://www.facebook.com/iu.loen',
    //   icon: faFacebook,
    // },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  // notice: {
  //   title: "This resume is a sample page of 'https://github.com/uyu423/resume-nextjs'.",
  //   icon: faBell,
  // },
};

export default profile;
