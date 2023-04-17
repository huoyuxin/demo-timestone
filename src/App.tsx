import React from 'react';
import {Typography, Space, Button} from 'antd';
import './App.css';

const {Title} = Typography;

export enum PageType {
  ChromeRule = 'Chrome Rule',
  AutoTrack = 'Auto Track',
}
export const PagePath = {
  [PageType.ChromeRule]: '/chrome-rule',
  [PageType.AutoTrack]: '/auto-track',
};

function App() {
  return (
    <div className="App">
      <Title>Welcome Timestone VIP ~~</Title>

      <Space>
        <Button href={PagePath[PageType.ChromeRule]}>
          go to Chrome Rule page
        </Button>
        <Button href={PagePath[PageType.AutoTrack]}>
          go to Auto Track page
        </Button>
      </Space>
    </div>
  );
}

export default App;
