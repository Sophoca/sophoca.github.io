import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '파란학기 및 창업동아리 (팀 보컬리스트)',
      startedAt: '2021-06',
      endedAt: '2021-12',
      where: '아주대학교',
      descriptions: [
        { content: '나의 음역대에 맞는 음악 추천 서비스' },
        { content: 'React.js를 사용하여 웹 서비스 개발' },
        { content: '데이터 모델링 및 데이터베이스 스키마 작성' },
        {
          content: '🏆 파란학기 황금 실패상 (2등) 수상',
          href:
            'https://raw.githubusercontent.com/Sophoca/Sophoca/main/images/github-blog/vocalist.pdf',
          weight: 'MEDIUM',
        },
        {
          content: 'Github repository',
          href: 'https://github.com/Sophoca/vocalist-frontend',
        },
      ],
    },
    // {
    //   title: 'VEStellaLab Dashboard',
    //   startedAt: '2021-07',
    //   endedAt: '2021-08',
    //   where: 'VEStellaLab',
    //   descriptions: [
    //     { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    //     { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
    //     { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
    //     { content: 'Proin bibendum non nibh eu aliquet' },
    //   ],
    // },
  ],
};

export default project;
