import ajax from '@/api/base';

export default {
  caseCourseList: opts => {
    return ajax.getApi({
      url: '/course/caseCourseList',
      params: {
        ...opts
      }
    });
  },
  randomCaseList: opts => {
    return ajax.getApi({
      url: '/course/randomCaseList'
    });
  },
  caseList: opts => {
    return ajax.getApi({
      url: '/case/caseList',
      params: {
        ...opts
      }
    });
  },
  caseDetail: opts => {
    return ajax.getApi({
      url: '/case/caseDetail',
      params: {
        ...opts
      }
    });
  },
  caseNum: opts => {
    return ajax.getApi({
      url: '/case/caseNum'
    });
  }
};
