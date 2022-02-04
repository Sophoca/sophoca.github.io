import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '아주대학교',
      subTitle: '소프트웨어학과',
      startedAt: '2017-03',
      // endedAt: '2010-02',
    },
    {
      title: '한국 디지털미디어고등학교',
      subTitle: '해킹방어과',
      startedAt: '2014-03',
      endedAt: '2017-02',
    },
  ],
};

export default education;
