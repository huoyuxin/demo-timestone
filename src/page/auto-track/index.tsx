import React, {useEffect} from 'react';
import {Table, Row, Card, Typography} from 'antd';
import TrackingClick from './tracking-click';
import TrackingImpression from './tracking-impression';
import TrackingScroll from './tracking-scroll';

const {Title} = Typography;

function ChromeRule() {
  return (
    <div className="">
      <Title level={2}>Auto Track Demo - 组件化埋点、复用程度高</Title>
      <Row gutter={16}>
        <TrackingClick sectionName="click_part" />
        <TrackingImpression sectionName="impression_part" />
      </Row>
      <TrackingScroll sectionName="scroll_part" />
    </div>
  );
}

export default ChromeRule;
