import {timestoneTracker} from '@timestone/tracker';

const config = {
  // todo: 区分 uat \ live 环境
  // todo: 区分 uat \ live 环境
  // todo: 区分 uat \ live 环境
  requestConfig: {
    api: 'https://timestone-api.datagroup.uat.shopeemobile.com/open/rules',
    // Site Management 的 appId
    appId: ['74f73dfe39ee9e7b85e11f9942f8d7d3'],
    cdnUrl: 'https://bigdata-timestone-1255300759.cossgp.myqcloud.com',
  },

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
};

// TMS SDK Config
// 根据 TS 类型提示
const trackerConfig = {
  version: 'v4',
  appId: 23,
  platform: 'pc_web' as 'pc_web',
  env: 'test',
  locale: 'sg',
  getUserId: () => 6,
};

export default timestoneTracker({config, trackerConfig});
// export default ins;
