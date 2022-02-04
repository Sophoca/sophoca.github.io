import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Meissa',
      position: 'Backend Engineer (인턴)',
      startedAt: '2022-01',
      endedAt: '2022-02',
      descriptions: ['BI(Business Intelligence) tool 개발', '데이터 모델링 및 시각화'],
      skillKeywords: ['Django', 'SQLite3'],
    },
    {
      title: 'VEStellaLab',
      position: 'Web Developer (인턴)',
      startedAt: '2021-07',
      endedAt: '2021-08',
      descriptions: [
        '서비스 관리를 위한 어드민 페이지 개발',
        'rtsp-hls 변환 라이브러리를 사용해 실시간 스트리밍 cctv 데이터를 웹 페이지에 출력',
      ],
      skillKeywords: ['React.js'],
    },
  ],
};

export default experience;
