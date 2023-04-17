import React, {useEffect} from 'react';
import {Button, Space, Card, Col, Row, Typography} from 'antd';
const {Title} = Typography;

function TrackingContent() {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card title="Click Part" bordered={false}>
          <Row gutter={16}>
            <Col span={8} className="unique">
              <Title level={5}>unique</Title>
              <Button className="btn block">button 1</Button>
            </Col>

            <Col span={8} className="multi">
              <Title className="mb" level={5}>
                multi data
              </Title>
              <Button className="mb btn block">multi button 1</Button>
              <Button className="btn block">multi button 2</Button>
            </Col>

            <Col span={8} className="dynamic">
              <Title className="mb" level={5}>
                dynamic data
              </Title>
              <Button className="mb btn block" data-ts-seq="1">
                dynamic button 1
              </Button>
              <Button className="btn block" data-ts-seq="2">
                dynamic button 2
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Impression Part" bordered={false}>
          some module to track impression
        </Card>
      </Col>
    </Row>
  );
}

export default TrackingContent;
