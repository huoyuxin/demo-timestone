import React from 'react';
import {Table, Card, Col} from 'antd';
import {ColumnsType} from 'antd/lib/table/interface';
import {columns, data} from './const';

function TrackingScroll(props: {sectionName: string}) {
  const timestoneConfig = {'page-section': props.sectionName};
  return (
    <Card
      className="timestone-scroll mt"
      title="Scroll Part"
      bordered={false}
      {...timestoneConfig}
    >
      <Table
        columns={columns as ColumnsType<any>}
        dataSource={data}
        scroll={{
          x: 900,
          y: 240,
        }}
      />
    </Card>
  );
}

export default TrackingScroll;
