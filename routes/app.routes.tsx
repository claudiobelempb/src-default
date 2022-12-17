import { useRoutes } from 'react-router-dom';
import { NotFoundPage } from '../pages/404';
import { HistoryPage } from '../pages/History';

import { HomePage } from '../pages/HomePage';
import TaskPage from '../pages/TaskPage';
import { TextPage } from '../pages/TestPage';

const AppRoutes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/history', element: <HistoryPage /> },
    { path: '/test', element: <TextPage /> },
    { path: '/tasks', element: <TaskPage /> },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
};

export { AppRoutes };
