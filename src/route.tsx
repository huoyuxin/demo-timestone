import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App, {PagePath, PageType} from './App';
import ChromeRule from './page/chrome-rule';
import AutoTrack from './page/auto-track';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: PagePath[PageType.ChromeRule],
    element: <ChromeRule />,
  },
  {
    path: PagePath[PageType.AutoTrack],
    element: <AutoTrack />,
  },
]);

export const routers = <RouterProvider router={router} />;
