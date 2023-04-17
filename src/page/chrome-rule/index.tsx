import React, {useEffect} from 'react';
import {Card, Typography} from 'antd';
import TrackingCnt from '../../component/tracking-content';
import timestone from '../../timestone';

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
      <Title level={2}>Chrome Rule Demo</Title>
      <TrackingCnt />
      <Card className="mt" title="Action Part" bordered={false}>
        some special case
      </Card>
    </div>
  );
}

export default ChromeRule;
