import ajax from '@/api/base';

export default {
  homeShuffling: opts => {
    return ajax.getApi({
      url: '/content/recommend',
      params: { code: 'APP_Home_Shuffling' }
    });
  },
  homeOnlineCourse: opts => {
    return ajax.getApi({
      url: '/content/recommend',
      params: { code: 'APP_Course_Online' }
    });
  },
  lecturer: opts => {
    return ajax.getApi({
      url: '/content/recommend',
      params: { code: 'APP_Lecturer' }
    });
  },
  onlineLectureHall: opts => {
    return ajax.getApi({
      url: '/content/recommend',
      params: { code: 'APP_LectureHall' }
    });
  },
  lectureHallDeputy: opts => {
    return ajax.getApi({
      url: '/content/recommend',
      params: { code: 'APP_LectureHall_Deputy' }
    });
  }
};
