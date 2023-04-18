import React from 'react';
import {Card, Col} from 'antd';

function TrackingImpression(props: {sectionName: string}) {
  const timestoneConfig = {'page-section': props.sectionName};
  return (
    <Col span={12}>
      <Card
        className="timestone-impression"
        title="Impression Part"
        bordered={false}
        {...timestoneConfig}
      >
        some module to track impression
      </Card>
    </Col>
  );
}

export default TrackingImpression;
