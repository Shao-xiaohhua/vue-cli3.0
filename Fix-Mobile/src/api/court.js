import ajax from '@/api/base';

export default {
  caseLive: opts => {
    return ajax.getApi({ url: '/court/caseLive', params: { ...opts } });
  },
  caseList: opts => {
    return ajax.getApi({ url: '/court/caseList', params: { ...opts } });
  }
};
