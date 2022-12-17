import { createContext, ReactNode, useReducer, useState } from 'react';
import { ActionsType, TaskReducer } from '../../reducers/reducerRockeseate';

type CreateTaskData = {
  task: string;
  minutesAmmout: number;
};

type Task = {
  id: string;
  task: string;
  minutesAmmout: number;
  starDate: Date;
  interruptedDate?: Date;
  finashedDate?: Date;
};

type TasksContextStart = {
  tasks: Task[];
  taskActiveId: string | null;
  activeTask: Task | undefined;
  amountSecondsPassed: number;
  markCurrentTaskAsFinishedContext: () => void;
  setAmountSecondsPassedContext: (seconds: number) => void;
  createNewTaskContext: (data: CreateTaskData) => void;
  interruptCurrentTaskContext: () => void;
};

type TaskContextProps = {
  children: ReactNode;
};

export const TasksContextRocketseat = createContext({} as TasksContextStart);

export function TasksContextRocketseatProvider({ children }: TaskContextProps) {
  const [state, dispatch] = useReducer(TaskReducer, {
    tasks: [],
    taskActiveId: null
  });

  const { tasks, taskActiveId } = state;
  const activeTask = state.tasks.find(task => task.id === taskActiveId);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0);

  function markCurrentTaskAsFinishedContext() {
    dispatch({
      type: ActionsType.MARK_CURRENT_TASK_AS_FINISHED,
      payload: {
        taskActiveId
      }
    });
  }

  function setAmountSecondsPassedContext(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function createNewTaskContext(data: CreateTaskData) {
    const id = String(new Date().getTime());
    const newTask: Task = {
      id,
      task: data.task,
      minutesAmmout: data.minutesAmmout,
      starDate: new Date()
    };

    dispatch({
      type: ActionsType.ADD_NEW_TASK,
      payload: {
        newTask
      }
    });
    setAmountSecondsPassed(0);
  }

  function interruptCurrentTaskContext() {
    dispatch({
      type: ActionsType.INTERRUPT_CURRENT_TASK,
      payload: {
        taskActiveId
      }
    });
  }

  return (
    <TasksContextRocketseat.Provider
      value={{
        tasks,
        activeTask,
        taskActiveId,
        amountSecondsPassed,
        markCurrentTaskAsFinishedContext,
        setAmountSecondsPassedContext,
        createNewTaskContext,
        interruptCurrentTaskContext
      }}
    >
      {children}
    </TasksContextRocketseat.Provider>
  );
}
