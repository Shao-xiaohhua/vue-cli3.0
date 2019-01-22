import ajax from '@/api/base';

export default {
  courseTypeTree: () => {
    return ajax.getApi({
      url: '/category/categoryTree',
      params: {
        rootId: 'd755c3383ca84b6eb8f9b4fb9035e69c'
      }
    });
  },
  lectureHallType: () => {
    return ajax.getApi({
      url: '/category/categoryTree',
      params: {
        rootId: '142012a3dcc4430ea61a7363e908331a'
      }
    });
  },
  trialType: () => {
    return ajax.getApi({
      url: '/category/categoryTree',
      params: {
        rootId: 'bf2f5c2279c24543a2bef1f444375d14'
      }
    });
  },
  courtLevel: () => {
    return ajax.getApi({
      url: '/category/categoryTree',
      params: {
        rootId: '3a43e196ce534e3e9ec675c30d495709'
      }
    });
  },
  getLecturerType: () => {
    return ajax.getApi({
      url: '/category/enumsData',
      params: {
        enum: 'com.lenchy.apps.learn.enums.tms.LecturerType'
      }
    });
  }
};
