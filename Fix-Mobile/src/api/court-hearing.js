import ajax from '@/api/base';

export default {
  list: opts => {
    return ajax.getApi({ url: '/court/caseList', params: { ...opts } });
  },
  detail: opts => {
    return ajax.getApi({ url: '/court/courtDetail', params: { ...opts } });
  }
};
