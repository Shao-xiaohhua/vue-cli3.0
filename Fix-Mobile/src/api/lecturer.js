import ajax from '@/api/base';

export default {
  lecturerList: opts => {
    return ajax.getApi({
      url: '/lecturer/search',
      params: {
        ...opts
      }
    });
  },
  lecturerDatail: opts => {
    return ajax.getApi({
      url: '/lecturer/detail',
      params: {
        ...opts
      }
    });
  },
  courses: opts => {
    return ajax.getApi({
      url: '/lecturer/courses',
      params: {
        ...opts
      }
    });
  }
};
