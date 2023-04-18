import React, {useEffect} from 'react';
import {Card, Typography} from 'antd';
import TrackingCnt from './tracking-content';
import timestone from '../../lib/timestone';

const {Title} = Typography;

function ChromeRule() {
  useEffect(() => {
    // some special trigger case
    setTimeout(() => {
      timestone.action('chrome_rule-action_part--action', {
        special_key_1: 'special_value_1',
        special_key_2: 'special_value_2',
      });
    }, 5000);
  }, []);
  return (
    <div className="">
      <Title level={2}>
        Chrome Rule Demo - 更少的代码改动、新增埋点无需发版
      </Title>
      <TrackingCnt />
      <Card className="mt" title="Action Part" bordered={false}>
        some special case
      </Card>
    </div>
  );
}

export default ChromeRule;
