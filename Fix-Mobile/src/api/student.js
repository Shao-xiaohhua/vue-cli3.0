import ajax from '@/api/base';

export default {
  viewInfo: opts => {
    return ajax.getApi({
      url: '/student/viewInfo',
      params: {
        ...opts
      }
    });
  },
  myAttention: opts => {
    return ajax.getApi({
      url: '/student/myAttention',
      params: {
        ...opts
      }
    });
  },
  cancelAttention: opts => {
    return ajax.getApi({
      url: '/student/cancelAttention',
      params: {
        ...opts
      }
    });
  },
  attention: opts => {
    return ajax.postApi({
      url: '/student/attention',
      data: {
        ...opts
      }
    });
  },
  cancelCollect: opts => {
    return ajax.getApi({
      url: '/student/cancelCollect',
      params: {
        ...opts
      }
    });
  },
  collectCourse: opts => {
    return ajax.postApi({
      url: '/student/collectCourse',
      data: {
        ...opts
      }
    });
  },
  myCollectCourse: opts => {
    return ajax.getApi({
      url: '/student/myCollectCourse'
    });
  },
  myCollectLectureHall: opts => {
    return ajax.getApi({
      url: '/student/myCollectLectureHall'
    });
  },
  myCollectCaseCourse: opts => {
    return ajax.getApi({
      url: '/student/myCollectCaseCourse'
    });
  },
  myCollectCase: opts => {
    return ajax.getApi({
      url: '/student/myCollectCase'
    });
  },
  collectCase: opts => {
    return ajax.postApi({
      url: '/student/collectCase',
      data: {
        ...opts
      }
    });
  },
  cancelCaseCollect: opts => {
    return ajax.getApi({
      url: '/student/cancelCaseCollect',
      params: {
        ...opts
      }
    });
  },
  myCourse: opts => {
    return ajax.getApi({
      url: '/student/myCourse'
    });
  },
  myLectureHall: opts => {
    return ajax.getApi({
      url: '/student/myLectureHall'
    });
  },
  myCaseCourse: opts => {
    return ajax.getApi({
      url: '/student/myCaseCourse',
      data: {
        ...opts
      }
    });
  }
};
