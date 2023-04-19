import {timestoneTracker} from '@timestone/tracker';
import {Operation, Pages} from '@timestone/tracker/types/interface';

const prodConfig = {
  api: 'https://timestone-api.datagroup.shopeemobile.com/open/rules',
  // Site Management 的 appId
  appId: ['50e6cb6acfab04af074e9c9d14ef19e3'],
  cdnUrl: 'https://bigdata-timestone-1255300759.cossgp.myqcloud.com',
};
const devConfig = {
  api: 'https://timestone-api.datagroup.uat.shopeemobile.com/open/rules',
  // Site Management 的 appId
  appId: ['74f73dfe39ee9e7b85e11f9942f8d7d3'],
  cdnUrl: 'https://bigdata-timestone-1255300759.cossgp.myqcloud.com',
};

const config = {
  // 区分 prod \ dev 环境
  requestConfig: process.env.REACT_APP_ENV === 'prod' ? prodConfig : devConfig,

  // 数据携带，参考文档：https://confluence.shopee.io/pages/viewpage.action?pageId=1680291321&src=contextnavpagetreemode
  // 1. 全局数据，需要在 Global Config/ Global Data 注册字段。埋点触发时执行，实时获取
  globalData: () => ({
    user_id: '6',
    user_email: 'yuxin.huo@shopee.com',
  }),

  // 2. 可选数据，需要在 Point 编辑时注册 dataField。埋点触发时执行，实时获取
  optionsData: {
    is_multi_button_option: () => true,
  },

  // for auto track config
  autoTrackDataGetter: ({
    operation,
    pages,
    currentPages,
    element,
  }: {
    operation: Operation;
    pages?: Pages[];
    currentPages?: Pages[];
    element?: Element;
  }) => {
    let sectionEl = undefined;
    if (operation !== 'scroll') {
      sectionEl = element;
    } else {
      let parent = element?.parentElement;
      while (!sectionEl && parent) {
        if (parent.classList.contains('timestone-scroll')) {
          sectionEl = parent;
          console.log(
            'sectionEl',
            sectionEl,
            sectionEl?.getAttribute('page-section')
          );
        }
        parent = parent?.parentElement;
      }
    }

    const reportObj = {
      operation,
      page_type: currentPages?.[0]?.page_name || '',
      page_section: sectionEl?.getAttribute('page-section') || '',
      target_type: element?.getAttribute('target-type') || '',
      data: {
        // do not put dynamic data here
        fixed_key: 'fixed_value',
      },
    };
    return reportObj;
  },
};

// TMS SDK Config
// 根据 TS 类型提示
const trackerConfig = {
  version: 'v4',
  appId: process.env.REACT_APP_ENV === 'prod' ? 105 : 305,
  platform: 'pc_web' as 'pc_web',
  env: process.env.REACT_APP_ENV === 'prod' ? 'live' : 'test',
  locale: 'sg',
  getUserId: () => 6,
};

export default timestoneTracker({config, trackerConfig});
// export default ins;
