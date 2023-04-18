import React, {useEffect} from 'react';
import {Button, Space, Card, Col, Row, Typography} from 'antd';
const {Title} = Typography;

function TrackingClick(props: {sectionName: string}) {
  const timestoneConfig = {'page-section': props.sectionName};

  return (
    <Col span={12}>
      <Card title="Click Part" bordered={false}>
        <Row gutter={16}>
          <Col span={8} className="unique">
            <Title level={5}>valid</Title>
            <Button
              className="timestone-click block"
              {...timestoneConfig}
              target-type="valid_button"
            >
              button
            </Button>
          </Col>

          <Col span={8} className="multi">
            <Title className="mb" level={5}>
              invalid
            </Title>
            {/* 缺少必要的数据，如 target_type */}
            <Button className="timestone-click block" {...timestoneConfig}>
              button
            </Button>
          </Col>

          <Col span={8} className="dynamic">
            <Title className="mb" level={5}>
              dynamic data
            </Title>
            <Button
              className="mb btn block"
              {...timestoneConfig}
              target-type="dynamic_button"
              data-ts-seq="1"
            >
              dynamic button 1
            </Button>
            <Button
              className="timestone-click block"
              {...timestoneConfig}
              target-type="dynamic_button"
              data-ts-seq="2"
            >
              dynamic button 2
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default TrackingClick;
