import ajax from '@/api/base';

export default {
  search: opts => {
    return ajax.getApi({ url: '/course/search', params: { ...opts } });
  },
  getOnlineDetail: opts => {
    return ajax.getApi({ url: '/course/onlineDetail', params: { ...opts } });
  },
  liveCourseDetail: opts => {
    return ajax.getApi({
      url: '/course/liveCourseDetail',
      params: { ...opts }
    });
  },
  getCommentList: opts => {
    return ajax.getApi({ url: '/course/commentList', params: { ...opts } });
  },
  commentPraise: opts => {
    return ajax.postApi({ url: '/course/commentPraise', data: { ...opts } });
  },
  submitComment: opts => {
    return ajax.postApi({ url: '/student/submitComment', data: { ...opts } });
  },
  syncTime: opts => {
    return ajax.postApi({ url: '/course/syncTime', data: { ...opts } });
  },
  wareInfo: opts => {
    return ajax.getApi({ url: '/course/wareInfo', params: { ...opts } });
  },
  endWatch: opts => {
    return ajax.postApi({ url: '/course/endWatch', data: { ...opts } });
  },
  randomOnline: opts => {
    return ajax.getApi({ url: '/course/randomOnline', params: { ...opts } });
  },
  lectureHallList: opts => {
    return ajax.getApi({ url: '/course/lectureHallList', params: { ...opts } });
  },
  getCourseTypeTree: opts => {
    return ajax.getApi({
      url: '/course/courseSystemTree',
      params: { ...opts }
    });
  }
};
