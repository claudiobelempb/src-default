import { createContext, ReactNode, useReducer, useState } from 'react';
import {
  TaskInitialState,
  TaskReducer,
  TaskType
} from '../../reducers/reducerRockeseate';
import { reducerActionType } from '../../types/reducerActionType';

interface CreateTaskDate {
  task: string;
  minutesAmmout: number;
}

type Task = {
  id: string;
  task: string;
  minutesAmmout: number;
  starDate: Date;
  interruptedDate?: Date;
  finashedDate?: Date;
};

type InitialStateType = {
  task: TaskType;
};

type TaskProviderType = {
  children: ReactNode;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState: InitialStateType = {
  task: TaskInitialState
};

export const TasksContextB7web = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
});

const defaultRecucer = (
  { task }: InitialStateType,
  action: reducerActionType
) => ({
  task: TaskReducer(task, action)
});

export const TasksContextB7webProvider: React.FC<TaskProviderType> = ({
  children
}) => {
  const [state, dispatch] = useReducer(defaultRecucer, initialState);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskActiveId, setTaskActiveId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0);
  const activeTask = tasks.find(task => task.id === taskActiveId);

  function markCurrentTaskAsFinished() {
    setTasks(state =>
      state.map(task => {
        if (task.id === taskActiveId) {
          return { ...task, finashedDate: new Date() };
        } else {
          return task;
        }
      })
    );
  }

  function setAmountSecondsPassedProps(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function createNewTask({ task, minutesAmmout }: CreateTaskDate) {
    const id = String(new Date().getTime());
    const newTask: Task = {
      id,
      task,
      minutesAmmout,
      starDate: new Date()
    };

    setTasks(state => [...state, newTask]);
    setTaskActiveId(id);
    setAmountSecondsPassed(0);
  }

  function interruptCurrentTask() {
    setTasks(state =>
      state.map(task => {
        if (task.id === taskActiveId) {
          return { ...task, interruptedDate: new Date() };
        } else {
          return task;
        }
      })
    );
    setTaskActiveId(null);
  }

  return (
    <TasksContextB7web.Provider value={{ state, dispatch }}>
      {children}
    </TasksContextB7web.Provider>
  );
};
