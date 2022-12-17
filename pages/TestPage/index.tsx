import { useContext } from 'react';
import {
  TasksContextB7web,
  TasksContextB7webProvider
} from '../../contexts/TaskContextB7web';

export function TextPage() {
  const { state, dispatch } = useContext(TasksContextB7web);
  console.log('State: ', state);
  console.log('Dispatch: ', dispatch);
  const handleChangeAmount = () => {
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: {
        amountSecondsPassed: 40
      }
    });
  };
  return (
    <TasksContextB7webProvider>
      <h1>Test Page</h1>
      <button onClick={handleChangeAmount}>Tocar</button>
      <p>{state.task.amountSecondsPassed}</p>
    </TasksContextB7webProvider>
  );
}
