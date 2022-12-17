import { BrowserRouter } from 'react-router-dom';
import { TasksContextRocketseatProvider } from '../contexts/taskContextRocketseat';
import { AppRoutes } from './app.routes';

const Routes = () => {
  return (
    <BrowserRouter>
      <TasksContextRocketseatProvider>
        <AppRoutes />
      </TasksContextRocketseatProvider>
    </BrowserRouter>
  );
};

export { Routes };
